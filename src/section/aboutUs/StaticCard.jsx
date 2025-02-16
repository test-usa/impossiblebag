import React from "react";
import Diamond from "/Diamond.png";
import Truck from "/Truck.png";
import Box from "/Box.png";
import Badge from "/Badge.png";

const features = [Truck, Badge, Box, Diamond];

export const StaticCard = () => {
  return (
    <div className="lg:w-[1212px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center py-20 ">
      {features.map((index) => (
        <div
          key={index}
          className="bg-primary p-6 rounded-[16px]  flex flex-col items-center justify-center text-center w-[288px] h-[255px] shrink-0 mx-auto hover:translate-y-[-8px] transition-all duration-500"
        >
          <img src={index} alt="" />
        </div>
      ))}
    </div>
  );
};
