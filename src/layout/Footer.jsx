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

const Footer = () => {
  return (
    <CommonWrapper>
      <div className="bg-black text-white pt-6 pb-6">
        <div className="flex flex-col sm:flex-row justify-between px-5 sm:px-10 items-center">
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-[204px] h-[127px] ">
              <img src={footerLogo} alt="Footer Logo" />
            </div>
            <div className="flex flex-row gap-5 justify-center pl-5 md:pl-12 lg:pl-12">
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

          <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-10 text-center sm:text-left">
            <div>
              <p className="text-[20px] font-semibold">Shipping with us</p>
              <br />
              <p className="text-[16px] font-normal">Making payments</p>
              <br />
              <p className="text-[16px] font-normal">Delivery options</p>
            </div>
            <div>
              <p className="text-[20px] font-semibold">Pay with</p>
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
        <div className="py-7">
          <div className="px-7">
            <hr />
          </div>
          <p className="pt-[24px] text-center font-normal">
            Copyright@2024TheImpossibleBags
          </p>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Footer;
