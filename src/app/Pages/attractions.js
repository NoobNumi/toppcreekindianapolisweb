"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Attractions() {
  const attractions = [
    {
      name: "Speedway",
      image: "/property_2/58.jpg",
      distance: "🚗 7 minutes away",
    },
    {
      name: "Lucas Oil Stadium",
      image: "/lucas_oil_stadium.jpg",
      distance: "🚕 16 minutes away",
    },
    {
      name: "Downtown",
      image: "/property_2/57.jpg",
      distance: "🚌 18 minutes away",
    },
    {
      name: "Undergound Catacombs",
      image: "/underground_catacombs.jpg",
      distance: "🚌 20 minutes away",
    },
  ];

  return (
    <section
      className="attractions px-0 sm:px-7 mt-11 pb-11 relative h-[100vh] flex justify-center items-center"
      id="attractions"
      data-aos="fade-up"
    >
      <div className="relative w-full text-start">
        <div className="px-10">
          <p className="text-xl mb-3 tracking-widest text-primary font-semibold">
            NEARBY ATTRACTIONS
          </p>
          <p>
            Explore the best attractions near our location. From the famous
            Speedway to the bustling Downtown, there's something for everyone to
            enjoy.
          </p>
        </div>
        <div className="mt-11 px-10">
          <Swiper
            modules={[Autoplay]}
            className="custom-swiper top-swiper"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            initialSlide={-0}
          >
            {attractions.map((place, index) => (
              <SwiperSlide
                key={index}
                className="relative"
                style={{ cursor: "grab" }}
              >
                <div className="relative rounded-lg overflow-visible">
                  <Image
                    src={place.image}
                    alt={place.name}
                    className="w-full h-90 object-cover rounded-lg"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <div className="glass absolute bottom-1 w-96 left-1/2 transform -translate-x-1/2 py-3 rounded-sm text-center shadow-md z-20">
                  <h4 className="font-medium text-lg text-white">
                    {place.name}
                  </h4>
                  <p className=" text-white">{place.distance}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
