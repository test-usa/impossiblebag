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
    <div className="relative w-full mx-auto rounded-[20px] p-10 flex items-center justify-center overflow-hidden py-20">
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
            <div className="h-[611px] mx-auto bg-[#F8DAB0] rounded-[50px] p-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-[400px] text-center lg:text-left">
                <h2 className="text-[30px] md:text-[40px] font-bold text-black">
                  Subscribe our newsletter
                </h2>
                <p className="text-gray-700 mt-2 text-[14px] md:text-[16px]">
                  From Chanel to Hermès, experience luxury at your fingertips
                  with our verified and curated collections.
                </p>

                {/* Email Input */}
                <div className="mt-5 flex items-center bg-white p-2 rounded-full shadow-md w-full md:w-[508px]">
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
              <div className="relative flex flex-col items-center">
                {/* Background Large Text */}
                <div className="absolute top-[15rem] w-full text-[70px] md:text-[120px] lg:text-[150px] font-extrabold leading-[132%] tracking-[-1.5px] text-white opacity-40 uppercase z-0 text-center lg:text-right">
                  T<span className="pl-[5px] md:pl-[15px]">HE</span> IMPOSSIBLE
                  BAGS
                </div>

                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={MenImg}
                    alt="Luxury Bag"
                    className="h-[400px] md:h-[500px] lg:h-[611px] w-auto object-cover"
                  />
                </div>

                {/* Small Product Card */}
                <div className="absolute w-[200px] md:w-[244px] h-[140px] md:h-[160px] p-3 left-1/2 lg:left-[490px] bottom-[10rem] md:bottom-[14rem] transform -translate-x-1/2 bg-white rounded-[24px] shadow-lg flex items-start gap-2 flex-shrink-0 z-20">
                  {/* Price & Cart Button */}
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
                      className="w-[100px] md:w-[140px] h-auto"
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-5 lg:right-14 right-5 flex gap-2 z-20">
                  <button className="swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full bg-white text-white shadow-md transition-all hover:bg-gray-800">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="swiper-button-next w-10 h-10 flex items-center justify-center rounded-full bg-white text-white shadow-md transition-all hover:bg-gray-800">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonCarousel;
