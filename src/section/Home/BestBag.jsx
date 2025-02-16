import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import bestbag1 from "../../assets/images/bestBag1.png";
import bestbag2 from "../../assets/images/bestBag2.png";

const bestBag = [
  { logo: bestbag1, title: "Modern Quality and Mind Refreshing Color Bag " },
  { logo: bestbag2, title: "Modern Quality and Mind Refreshing Color Bag  " },
];
const BestBag = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  gap-4 font-Geist">
      {bestBag.map((item, i) => (
        <div className="max-w-[750px] max-h-[730px] relative" key={i}>
          <img className="w-full h-full" src={item.logo} alt={item.title} />
          <div className="w-full flex items-center justify-between gap-10 absolute top-4 px-8">
            <h2 className="max-w-[350px] odd:text-2xl even:text-3xl odd:font-semibold even:font-normal">
              {item.title}
            </h2>
            <button className="text-[#050505] text-xl rounded-full p-5 bg-white ">
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestBag;
