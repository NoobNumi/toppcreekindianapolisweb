export default function Amenities() {
  return (
    <div data-aos="fade-up">
      <p className="text-xl mt-35 font-medium tracking-wide ms-20">
        Why are we the best?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 justify-center px-10 md:px-20">
        <div
          className="card py-6 px-5 rounded-md bg-white"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div
            className="mb-5 p-2 bg-primary rounded-full"
            style={{ height: "52px", width: "52px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-9 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <p className="text-lg font-medium mb-3">
            Seamless Check-in, Every Time
          </p>
          <p className="text-sm text-gray-400">
            Guests rave about our effortless check-in process, earning it a
            flawless 5-star rating!
          </p>
        </div>
        <div
          className="card py-6 px-5 rounded-md bg-white"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div
            className="mb-5 p-2 bg-primary rounded-full"
            style={{ height: "52px", width: "52px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          </div>
          <p className="text-lg font-medium mb-3">Work Comfortably, Anywhere</p>
          <p className="text-sm text-gray-400">
            Enjoy a private, high-speed WiFi-equipped workspace designed to keep
            you productive.
          </p>
        </div>
        <div
          className="card py-6 px-5 rounded-md bg-white"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div
            className="p-2 bg-primary rounded-full mb-5"
            style={{ height: "52px", width: "52px" }}
          >
            <svg
              className="size-9"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9688 4C15.9688 3.58579 15.633 3.25 15.2188 3.25C14.8045 3.25 14.4688 3.58579 14.4688 4V5.75C14.4688 6.16421 14.8045 6.5 15.2188 6.5C15.633 6.5 15.9688 6.16421 15.9688 5.75V4Z"
                fill="#FFFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 7.25C3.80109 7.25 3.61032 7.32902 3.46967 7.46967C3.32902 7.61032 3.25 7.80109 3.25 8V13.25C3.25 15.7034 4.42801 17.8817 6.24927 19.25H4C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75L17.5 20.75C17.9142 20.75 18.25 20.4142 18.25 20C18.25 19.5858 17.9142 19.25 17.5 19.25H15.2507C15.9006 18.7617 16.4687 18.1703 16.9304 17.5H17C19.4853 17.5 21.5 15.4853 21.5 13V11.75C21.5 10.5074 20.4926 9.5 19.25 9.5H18.25V8C18.25 7.58579 17.9142 7.25 17.5 7.25H4ZM16.75 13.25C16.75 16.5637 14.0637 19.25 10.75 19.25C7.43629 19.25 4.75 16.5637 4.75 13.25V8.75H16.75V13.25ZM18.25 11V13.25C18.25 14.1832 18.0796 15.0766 17.7681 15.9008C19.0528 15.5615 20 14.3913 20 13V11.75C20 11.3358 19.6642 11 19.25 11H18.25Z"
                fill="#FFFF"
              />
              <path
                d="M10.75 3.25C11.1642 3.25 11.5 3.58579 11.5 4V5.75C11.5 6.16421 11.1642 6.5 10.75 6.5C10.3358 6.5 10 6.16421 10 5.75V4C10 3.58579 10.3358 3.25 10.75 3.25Z"
                fill="#FFFF"
              />
              <path
                d="M7.03125 4C7.03125 3.58579 6.69546 3.25 6.28125 3.25C5.86704 3.25 5.53125 3.58579 5.53125 4V5.75C5.53125 6.16421 5.86704 6.5 6.28125 6.5C6.69546 6.5 7.03125 6.16421 7.03125 5.75V4Z"
                fill="#FFFF"
              />
            </svg>
          </div>
          <p className="text-lg font-medium mb-3">
            Your Morning, Brewed to Perfection
          </p>
          <p className="text-sm text-gray-400">
            Wake up to the rich aroma of freshly brewed coffee, courtesy of our
            premium drip coffee maker.
          </p>
        </div>
        <div
          className="card py-6 px-5 rounded-md bg-white"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div
            className="mb-5 p-2 bg-primary rounded-full"
            style={{ height: "52px", width: "52px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-9 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <p className="text-lg font-medium mb-3">
            Stay Where Everyone Wants to Be
          </p>
          <p className="text-sm text-gray-400">
            With a perfect 5-star location rating, you’re steps away from the
            best attractions, dining, and entertainment!
          </p>
        </div>
      </div>
    </div>
  );
}
