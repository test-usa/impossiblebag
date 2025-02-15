import React from "react";
import flame1 from "../../assets/images/Frame1.png";
import flame2 from "../../assets/images/Frame2.png";
import flame3 from "../../assets/images/Frame3.png";

const supportList = [
  {
    logo: flame1,
    title: "24 Hour Return Policy",
    des: "Lorem ipsum dolor sit amet consectetur. Mattis egestas nulla nibh dictumst felis commodo id aliquet.",
    bg: "bg-[#E4D7CE]",
  },
  {
    logo: flame2,
    title: "Fast & Secure Delivery",
    des: "Lorem ipsum dolor sit amet consectetur. Mattis egestas nulla nibh dictumst felis commodo id aliquet.",
    bg: "bg-[#F1ECE6]",
  },
  {
    logo: flame3,
    title: "Next Level Pro Quality",
    des: "Lorem ipsum dolor sit amet consectetur. Mattis egestas nulla nibh dictumst felis commodo id aliquet.",
    bg: "bg-[#E2DCD0]",
  },
];
const Support = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold font-Poppins text-[#050505] pb-5">
        We Supported By
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 font-Geist">
        {supportList.map((item) => (
          <div
            className={`${item.bg} flex flex-col  items-center gap-4  px-6 py-8 rounded-3xl`}
          >
            <div className="w-16">
              <img className="w-full" src={item.logo} alt="" />
            </div>
            <h2 className="text-2xl md:text-lg lg:text-2xl font-semibold">
              {item.title}
            </h2>
            <p className="text-[16px] text-center">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
