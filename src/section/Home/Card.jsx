import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import bag from "../../assets/images/bag.png";
import CommonButton from "../../components/CommonButton";
import { FiArrowUpRight } from "react-icons/fi";

const Card = () => {
  return (
    <div className="bg-[#F0EDE6] font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group gap-20  p-4 hover:translate-y-[-8px] transition-all duration-500   hover:shadow-[-2px_2px_5px_lightblue] ">
      <div className="flex justify-between items-center  w-full ">
        <div className="text-[#050505] text-xl font-Geist">
          <h2>Product Name</h2>
          <p className="font-semibold">$150.00</p>
        </div>
        <span className="z-10 p-2 text-2xl bg-white rounded-full ">
          <IoMdHeartEmpty />
        </span>
      </div>

      <div className="flex items-center justify-center invisible group-hover:visible transition-all duration-250 absolute top-1/2 z-10">
        <button className="bg-[#050505] px-10 py-3 rounded-full font-medium text-white ">
          View Details
        </button>
        <button className="bg-[#050505] rounded-full p-4 text-xl text-white ">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="max-w-[384px]">
        <img className="w-full" src={bag} alt="bang" />
      </div>
      <div className="w-full h-full bg-[#26262666] absolute top-0 invisible group-hover:visible transition-all rounded-2xl "></div>
    </div>
  );
};

export default Card;
