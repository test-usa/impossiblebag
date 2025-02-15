import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import bag from "../../assets/images/bag.png";
import CommonButton from "../../components/CommonButton";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="bg-[#F0EDE6] font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group gap-20  p-4 hover:translate-y-[-8px] transition-all duration-500   hover:shadow-[-2px_2px_5px_lightblue]">
      <div className="flex justify-between w-full ">
        <h2 className="text-[#050505] text-xl">Product Name</h2>
        <span className="z-10 p-2 text-2xl bg-white rounded-full ">
          <IoMdHeartEmpty />
        </span>
      </div>
        <CommonButton title={"View Details"} />
      <div className="max-w-[384px]">
        <img className="w-full" src={bag} alt="bang" />
      </div>
      <div className="w-full h-full bg-[#26262666] absolute top-0 invisible group-hover:visible transition-all rounded-2xl "></div>
    </div>
  );
};

export default Card;
