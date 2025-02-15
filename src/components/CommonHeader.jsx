/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const CommonHeader = ({ title, heading }) => {
  return (
    <div className="h-[437px] flex items-center justify-center bg-custom-gradient text-center px-4 ">
      <div className="max-w-lg w-full text-[#050505]">
        <h1 className="text-7xl font-bold font-Geist">{heading}</h1>
        <p className="text-[#050505] mt-2 text-lg">
          <span className="">Home</span> / {title}
        </p>
      </div>
    </div>
  );
};

export default CommonHeader;
