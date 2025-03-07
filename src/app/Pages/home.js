import Navbar from "../components/navbar.js";

export default function Home() {
  return (
    <div>
      <section
        className="relative h-[90vh] bg-cover bg-center p-4"
        id="home"
        data-aos="fade-up"
      >
        <div
          className="rounded-2xl"
          style={{ backgroundImage: `url('/indianapolis.png')` }}
        >
          <div className="overlay h-[90vh] rounded-2xl">
            <Navbar />
            <div className="flex flex-col xl:flex-row w-full items-center md:items-start justify-center px-5 md:px-23 mt-18 md:mt-24">
              <div className="mx-auto text-start">
                <h1 className="text-4xl md:text-6xl font-medium text-white mx-auto mr-0 md:mr-18">
                  Make yourself at home at the heart of Indy!
                </h1>
                <p className="text-base md:text-lg font-medium text-white mx-auto mt-4 mr-0 md:mr-43">
                  Whether you’re here for business or leisure, our property is
                  the ideal retreat for a memorable stay.
                </p>
                <div className="flex flex-col md:flex-row mt-8 gap-3">
                  <a
                    href="#properties"
                    className="btn btn-primary rounded-full px-8 py-4 text-center"
                  >
                    Book your stay
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-white rounded-full px-8 py-4 text-center justify-center flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="hidden xl:block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203903.48186681385!2d-86.29755811474115!3d39.7796679467037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e1!3m2!1sen!2sph!4v1741262237340!5m2!1sen!2sph&basemap=satellite"
                  width="500"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="flex mt-8 gap-3">
                  <img src="/image2.jpg" className="rounded-lg w-full h-40" />
                  <img src="/image1.jpg" className="rounded-lg w-full h-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
