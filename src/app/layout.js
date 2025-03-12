import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Topp Creek Indianapolis",
  description: "A brief description of your website.",
  openGraph: {
    title: "Your Website Title",
    description: "A brief description of your website.",
    url: "https://toppcreekindianapolis.com/",
    type: "website",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
