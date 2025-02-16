import React from "react";
const CommonButton = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-[#050505] px-10 py-3 rounded-full font-medium text-white">
        {title}
      </button>
      <button className="bg-[#050505] rounded-full p-4 text-xl text-white ">
        {icon}
      </button>
    </div>
  );
};

export default CommonButton;
