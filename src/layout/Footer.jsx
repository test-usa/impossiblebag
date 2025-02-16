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
import CommonWrapper from "../components/CommonWrapper";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-3 w-full">
      <CommonWrapper>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col lg:items-start sm:items-start">
            <div className="">
              <img
                className="w-[100px] h-[70px] "
                src={logo}
                alt="Footer Logo"
              />
            </div>
            <div className="flex flex-row gap-5 justify-center pt-2">
              <div className="text-2xl">
                <FaInstagramSquare />
              </div>
              <div className="text-2xl">
                <FaFacebook />
              </div>
              <div className="text-2xl">
                <BsTwitterX />
              </div>
            </div>
          </div>

          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row gap-10 text-center sm:text-left">
            <div>
              <p className="text-xl font-semibold">Shipping with us</p>
              <p className="text-[16px] font-normal pt-1">Making payments</p>
              <p className="text-[16px] font-normal pt-1">Delivery options</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Pay with</p>
              <div className="flex gap-2 pt-2 justify-center sm:justify-start">
                <img className="w-[36px] h-[24px]" src={visa} alt="Visa" />
                <img
                  className="w-[36px] h-[24px]"
                  src={master}
                  alt="Mastercard"
                />
                <img className="w-[36px] h-[24px]" src={paypal} alt="Paypal" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div>
            <hr className="border-t border-[#444343]" />
          </div>
          <p className="pt-4 text-center font-normal">
            Copyright@2024TheImpossibleBags
          </p>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Footer;
