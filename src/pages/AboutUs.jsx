import React from "react";
import CommonHeader from "../components/CommonHeader";
import CommonWrapper from "../components/CommonWrapper";
import Diamond from "/public/Diamond.png";
import Truck from "/public/Truck.png";
import Box from "/public/Box.png";
import Badge from "/public/Badge.png";
import CommonCarousel from "../components/CommonCarousel";


const features = [Truck, Badge, Box, Diamond];

const AboutUs = () => {
  return (
    <div>
      <CommonHeader heading={"About Us"} title={"About Us"} />

  
        <div className="w-[1210px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-5  py-16 mx-auto">
          {features.map((index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-[16px] flex flex-col items-center justify-center text-center w-[288px] h-[255px] shrink-0 mx-auto"
            >
              <img src={index} alt="" />
            </div>
          ))}
        </div>

        <CommonWrapper>
          <CommonCarousel/>
        </CommonWrapper>
      
    </div>
  );
};

export default AboutUs;
