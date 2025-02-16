import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import Header from "../layout/Header";
import Card from "../section/home/Card";
import CommonSpace from "../components/CommonSpace";
import Bento from "../section/wishlist/Bento";
import BigBento from "../section/wishlist/BigBento";
import BentoSecond from "../section/wishlist/BentoSecond";
import BentoFirst from "../section/wishlist/BentoFirst";
import CommonButton from "../components/CommonButton";
import NewsLetter from "../components/NewsLetter";
import { LiaShareAltSolid } from "react-icons/lia";

const Wishlist = () => {
  return (
    <>
      <CommonWrapper>
        <Header />
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <h2 className="font-bold text-[72px]">My Closet</h2>
          <p className=" text-[#7F7F7F]">
            Your favorite picks, all in one place
          </p>
        </div>
      </CommonWrapper>
      <CommonWrapper>
        <CommonSpace>
          <div className="w-full p-4 rounded-xl bg-custom-gradient">
            <div className="w-full p-4 flex flex-col gap-6 ">
              <BentoFirst />
              <BentoSecond />
              <BentoFirst />
              <BentoSecond />
            </div>
          </div>
        </CommonSpace>

        <CommonButton title="Share Closet" icon={<LiaShareAltSolid />} />

        <CommonSpace>
          <NewsLetter />
        </CommonSpace>
      </CommonWrapper>
    </>
  );
};

export default Wishlist;
