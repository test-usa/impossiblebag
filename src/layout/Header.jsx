import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import headerLogo from "../assets/images/headerLogo.png";
import CommonWrapper from "../components/CommonWrapper";
import { IoMdCloseCircle } from "react-icons/io";
import menu from "../assets/images/menu.png";
import woman from "../assets/images/woman.png";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <CommonWrapper>
      <div className="flex items-center justify-between pt-5">
        <div onClick={() => setShow(true)}>
          <img className=" cursor-pointer" src={menu} alt="" />
        </div>
        <div className=" hidden sm:block max-w-52  max-h-28">
          <img className=" w-full h-full" src={headerLogo} alt="" />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl p-3 bg-white rounded-full cursor-pointer">
            <FaRegHeart />
          </span>
          <span className="text-2xl p-3 bg-white rounded-full cursor-pointer">
            <PiShoppingCartThin />
          </span>
          <div className="flex items-center cursor-pointer">
            <img className="w-12 h-12 rounded-full" src={woman} alt="" />
            <p className="text-xs">
              Hi, <br />
              Dana Keeling!
            </p>
          </div>
        </div>
      </div>
      {show && <MobileMenu setShow={setShow} />}
    </CommonWrapper>
  );
}
