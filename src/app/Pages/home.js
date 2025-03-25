"use client";

import Navbar from "../components/navbar.js";
import dynamic from "next/dynamic";
import Image from "next/image";
const MapHome = dynamic(
  () => import("../components/MapHome").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <section
        className="relative md:h-[90vh] bg-cover bg-center p-4"
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
                  Make yourself at home in the heart of Indy!
                </h1>
                <p className="text-base md:text-lg font-medium text-white mx-auto mt-4 mr-0 md:mr-43">
                  Whether you’re here for business or leisure, our properties
                  are the ideal retreat for a memorable stay.
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="hidden xl:block">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203903.48186681385!2d-86.29755811474115!3d39.7796679467037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e1!3m2!1sen!2sph!4v1741262237340!5m2!1sen!2sph&basemap=satellite"
                  width="500"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <MapHome
                  className="rounded-lg"
                  style={{ width: "100px", height: "200px" }}
                />
                <div className="flex mt-8 gap-3">
                  <Image src="/image2.jpg" width={100} height={100} alt="image1" className="rounded-lg w-full h-40" loading="lazy"/>
                  <Image src="/image1.jpg" width={100} height={100} alt="image2" className="rounded-lg w-full h-40" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
