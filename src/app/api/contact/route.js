import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Nodemailer transporter setup for Namecheap Private Email
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com", // Namecheap's mail server
      port: 465, // Secure SSL port
      secure: true, // Must be true for port 465
      auth: {
        user: process.env.EMAIL_USER, // Your Namecheap email
        pass: process.env.EMAIL_PASS, // Your Namecheap email password
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Your business email
      replyTo: email, // Allows replies to go to the user
      to: process.env.EMAIL_USER, // Your business email
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
