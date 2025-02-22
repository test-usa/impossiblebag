import React from "react";
import CommonWrapper from "../components/CommonWrapper.jsx";
import Header from "../layout/Header.jsx";
import CommonSpace from "../components/CommonSpace.jsx";
import BentoSecond from "../section/wishlist/BentoSecond.jsx";
import BentoFirst from "../section/wishlist/BentoFirst.jsx";
import CommonButton from "../components/CommonButton.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import { LiaShareAltSolid } from "react-icons/lia";
import WishDelete from "../section/wishlist/WishDelete.jsx";

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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <CommonButton title="Share Closet" icon={<LiaShareAltSolid />} />
          <WishDelete />
        </div>

        <CommonSpace>
          <NewsLetter />
        </CommonSpace>
      </CommonWrapper>
    </>
  );
};

export default Wishlist;
