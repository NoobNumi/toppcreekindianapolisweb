"use client";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const filteredReviews = data.filter(
          (review) => Number(review.rating) === 5
        );
        setReviews(filteredReviews);
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section className="px-10 md:px-40 bg-gray-100" id="reviews">
      <div className="text-center py-15">
        <p className="text-xl tracking-widest text-primary font-semibold">
          REVIEWS
        </p>
        <p className="w-full md:w-1/2 mx-auto mt-4">
          Read what our guests have to say about their stay with us. We take
          pride in providing the best experience for our guests and are always
          looking for ways to improve. Your feedback is important to us.
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative h-[500px] overflow-hidden reviews-mask"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 20%, black 60%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 20%, black 60%)",
        }}
      >
        {[0, 1, 2].map((colIndex) => (
          <div
            key={colIndex}
            className={`space-y-6 review-column ${
              colIndex % 2 === 0 ? "scroll-down" : "scroll-up"
            }`}
          >
            {/* Reverse reviews for the last column */}
            {(colIndex === 2 ? [...reviews].reverse() : reviews).map(
              (review, index) => (
                <div
                  key={index}
                  className="break-inside-avoid w-full review max-w-full mx-auto flex flex-col gap-6 rounded-xl bg-white p-4 shadow-lg"
                >
                  <p className="mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      alt={review.reviewer.firstName}
                      className="size-10 rounded-full object-cover"
                      src={review.reviewer.profilePicture}
                    />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium">
                        {review.reviewer.firstName}
                      </p>
                      <p className="text-xs text-gray-600 flex gap-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="size-4"
                            style={{
                              fill: starIndex < 5 ? "#ffdd3c" : "#59695d", // Always fills exactly 5 stars
                            }}
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          from {
            transform: translateY(0%);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0%);
          }
        }

        .scroll-up,
        .scroll-down {
          display: flex;
          flex-direction: column;
          animation: linear infinite;
          animation-duration: 250s;
        }

        .scroll-down {
          animation-name: scroll-down;
        }

        .scroll-up {
          animation-name: scroll-up;
        }
      `}</style>
    </section>
  );
}
