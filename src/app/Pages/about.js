import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex items-center justify-center w-full min-h-screen"
      data-aos="fade-up"
    >
      <div
        className="max-w-3xl mx-auto mb-40 bg-white rounded-lg justify-center px-6 py-9 flex flex-col md:flex-row items-start gap-9 shadow-lg"
        id="about"
      >
        {/* Image Container */}
        <div className="flex items-center justify-center w-full flex-col">
          <div className="h-30 w-30 relative">
            <Image
              src="/about-host.png"
              alt="About Us"
              className="rounded-full h-full w-full object-cover"
              width={100}
              height={100}
              loading="lazy"
            />
            {/* SVG Badge */}
            <div
              className="absolute bottom-0 right-0 mr-0 p-1 bg-primary rounded-full "
              style={{ height: "40px", width: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <p className="text-center text-3xl font-semibold mt-5 mb-1">Jeff</p>
          <p className="text-center text-primary flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Host</span>
          </p>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-xl tracking-widest text-primary mb-5 font-semibold">
              ABOUT THE HOST
            </p>
            <Link
              href={"https://www.airbnb.com/users/show/55538206"}
              target="_blank"
              className="flex gap-3 text-end underline"
            >
              View on Airbnb
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </Link>
          </div>
          <p className="w-full text-gray-700 leading-relaxed">
            As an avid traveler myself, I understand the importance of a
            comfortable and welcoming space to return to after a day of
            exploration. I value spending quality time with family & friends. I
            understand the importance of creating memories with the people you
            love and want to provide a space for others to do the same. I strive
            to exceed expectations in every way and create a welcoming
            environment where you can relax, unwind & create lasting memories.
          </p>
        </div>
      </div>
    </section>
  );
}
