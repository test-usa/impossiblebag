"use client";

import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import React from "react";

import MenImg from "/public/2148068409__1_-removebg-preview 2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CommonCarousel = () => {
  return (
    <div className="relative w-full mx-auto  rounded-[20px] p-10 flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full"
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10"
          >
            <div className="h-[611px]   mx-auto bg-[#F8DAB0] rounded-[50px] p-10 flex items-center gap-10">
              <div className="">
                <h2 className="text-[40px] font-bold text-black">
                  Subscribe our newsletter
                </h2>
                <p className="text-gray-700 mt-2 text-[16px]">
                  From Chanel to Hermès, experience luxury at your fingertips
                  with our verified and curated collections.
                </p>

                {/* Email Input */}
                <div className="mt-5 flex items-center bg-white p-2 rounded-full shadow-md w-[508px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 outline-none px-4 bg-transparent text-gray-700 placeholder-gray-500"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Right Side - Image and Details */}
              <div className="relative">
                {/* Background Large Text */}
                <div className="absolute right-0 top-[30rem]  mb-3 b w-[1225px] text-[150px] font-extrabold leading-[132%] tracking-[-1.5px] text-white opacity-40 uppercase  z-0">
                  T<span className="pl-[15px]">HE</span> IMPOSSIBLE BAGS
                </div>

                {/* Main Image - Will Partially Hide the Text */}
                <div className="relative z-10">
                  <img
                    src={MenImg}
                    alt="Luxury Bag"
                    className="h-[611px] w-[534px] object-cover"
                  />
                </div>

                {/* Small Product Card */}
                <div className="absolute flex w-[244px] h-[160px] p-3 right-[2rem] bottom-[10rem] bg-white rounded-[24px] shadow-lg items-start gap-2 flex-shrink-0 z-20">
                  {/* Price & Cart Button Section */}
                  <div className="w-full">
                    <div className="text-gray-600 text-sm pt-3">Price</div>
                    <div className="font-bold text-black text-lg pt-2">
                      $150.00
                    </div>
                    <button className="bg-black text-white p-2 rounded-full mt-4">
                      <ShoppingCart size={16} />
                    </button>
                  </div>

                  <div>
                    <img
                      src={MenImg}
                      alt="Bag"
                      className="w-[200px] h-[140px]"
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-5 right-5 flex gap-2 z-20">
                  <div className="absolute top-5 right-10 flex gap-2 z-20">
                    <button className="swiper-button-prev w-18 h-10 flex items-center justify-center rounded-full bg-white text-[#A5A5A5] shadow-md">
                      <ArrowLeft size={16} />
                    </button>

                    <button className="swiper-button-next w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#A5A5A5] shadow-md">
                      <ArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image and Product Card */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Top Right */}
    </div>
  );
};

export default CommonCarousel;
