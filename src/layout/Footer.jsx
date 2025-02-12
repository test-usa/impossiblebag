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
      </div>
    </div>
  );
};

export default Footer;
