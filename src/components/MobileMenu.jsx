import React from "react";
import mobileMenu from "../assets/images/mobileMenu.png";
import close from "../assets/images/close.png";
import { Link } from "react-router-dom";
const MobileMenu = ({ setShow }) => {
  return (
    <div className="max-w-3xl bg-custom-gradient p-8">
      <div className=" flex items-center justify-between ">
        <div>
          <img className=" w-16" src={mobileMenu} alt="" />
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          <img className="w-8" src={close} alt="" />
        </div>
      </div>
      <ul className="flex flex-col gap-4 font-Geist text-3xl py-10">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/about-us"> About Us</Link>
        <Link to="/new-arrival"> New Arrival</Link>
        <Link to="/shop">Shop </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </ul>
    </div>
  );
};

export default MobileMenu;
