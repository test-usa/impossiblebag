import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const CommonButton = ({ title }) => {
  return (
    <div className="absolute z-30 flex items-center invisible text-white transition-all top-1/2 group-hover:visible">
      <button className="bg-[#050505] px-10 py-3 rounded-full font-medium ">
        {title}
      </button>
      <button className="bg-[#050505] rounded-full p-4 text-lg ">
        <FiArrowUpRight />
      </button>
    </div>
  );
};

export default CommonButton;
