import Link from "next/link";

export default function Properties() {
  return (
    <div>
      <section
        className="properties relative flex flex-col h-svh mt-25 mb-25 justify-center bg-cover bg-center p-4"
        id="properties"
        data-aos="fade-up"
      >
        <div className="text-center">
          <p className="text-xl tracking-widest text-primary font-semibold">
            PROPERTIES
          </p>
          <p className="w-full md:w-1/2 mx-auto mt-4">
            Discover our exclusive properties located near the Speedway. Each
            property is designed to provide comfort and luxury, ensuring a
            memorable stay. Explore the details of each property below and book
            your stay with us today.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 w-full mt-14 mx-auto">
          <Link href="/properties/1" className="relative property-card">
            <div className="card text-start relative">
              <img
                src="/Living-Room-2.jpg"
                className="rounded-lg w-full h-70 object-cover"
              />
              <div className="overlay-card absolute w-full h-full bottom-0 rounded-lg">
                <div className="card-body text-white absolute bottom-0 p-4">
                  <h4 className="card-title">
                    Splendid 4 Bed/2.5 Bath- Near Speedway
                  </h4>
                  <div className="flex items-start gap-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-4"
                    >
                      <path
                        fill="#ffff"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    <p className="card-text text-sm p-0">4.89 Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/properties/2" className="relative property-card">
            <div className="card text-start relative">
              <img
                src="/Living-Room-1.jpg"
                className="rounded-lg w-full h-70 object-cover"
              />
              <div className="overlay-card absolute w-full h-full bottom-0 rounded-lg">
                <div className="card-body text-white absolute bottom-0 p-4">
                  <h4 className="card-title">
                    Fabulous 4 Bed/2.5 Bath - Near Speedway, Sleeps 8
                  </h4>
                  <div className="flex items-start gap-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-4"
                    >
                      <path
                        fill="#ffff"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    <p className="card-text text-sm p-0">5.0 Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
