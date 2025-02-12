import { Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Icons } from "@/assets/icons/Icons";

import footerLogo from "../assets/images/footerLogo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import visa from "../assets/images/visa.png";
import master from "../assets/images/master.png";
import paypal from "../assets/images/paypal.png";

const Footer = () => {
  return (
    <div className="pl-[200px] bg-black text-white flex pt-3">
      <div>
        <div className="w-[204px] h-[127px]">
          <img src={footerLogo} alt="" />
        </div>
        <div className="flex item-center gap-10 pl-5 pt-3">
          <div className="w-[24px] h-[24px]">
            <FaInstagramSquare />
          </div>
          <div className="w-[24px] h-[24px]">
            <FaFacebook />
          </div>
          <div className="w-[24px] h-[24px]">
            <BsTwitterX />
          </div>
        </div>
      </div>
      <div className="pl-[900px] flex gap-10">
        <div className="">
          <p className="text-[20px] font-semibold">Shipping with us</p>
          <br />
          <p className="text-[16px] font-normal">Making payments</p>
          <br />
          <p className="text-[16px] font-normal">Delivery options</p>
        </div>
        <div className="">
          <p className="text-[20px] font-semibold">Pay with</p>
          <div className="flex gap-2 pt-2">
            <img className="w-[36px] h-[24px]" src={visa} alt="" />
            <img className="w-[36px] h-[24px]" src={master} alt="" />
            <img className="w-[36px] h-[24px]" src={paypal} alt="" />
          </div>
        </div>

import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Icons } from "@/assets/icons/Icons";

const Footer = () => {
  return (
    <footer className="  max-w-7xl w-[93%] mx-auto">
      <div className="  py-10 gap-10 lg:gap-0   flex justify-between">
        <div className="md:flex-row flex-col flex gap-10 items-center">
          <Link
            to={"/"}
            className="flex items-center  justify-center text-base font-semibold"
          >
            Healthify
          </Link>
        </div>
        <div className="flex gap-8 justify-center">
          <Icons.facebookIcon className=" h-6 w-6" />
          <Icons.youtubeIcon className=" h-6 w-6" />

          <LinkedInLogoIcon className=" h-6 w-6" />
          <LinkedInLogoIcon className=" h-6 w-6" />
        </div>
      </div>

      <Divider className="mb-8 bg-divider" />

      <div className="pb-8 flex flex-col md:flex-row  gap-4 justify-between items-center ">
        <p className="text-tiny  text-light-50  text-center">
          2023 <span className=" hover:text-danger"> Pewds. </span> All right
          reserved.
        </p>
        <ul className=" list-none flex justify-center flex-wrap items-center   gap-4">
          {[
            { name: "Privacy Policy", path: "privacy-policy" },

            { name: "Terms of Service", path: "tos" },
            { name: "Cookies Settings", path: "cookies-settings" },
          ].map((el, index) => {
            return (
              <Link key={index} to={`/${el?.path}`}>
                <motion.li
                  variants={hoverVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className=" cursor-pointer text-light-50  text-tiny  underline underline-offset-1"
                >
                  {el.name}
                </motion.li>
              </Link>
            );
          })}
        </ul>

      </div>
    </div>
  );
};

export default Footer;


const hoverVariants = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  hover: {
    scale: [1, 1.06, 1, 1.06, 1],
    originX: 0,
    color: "#428ee6",
  },
};

