import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import Header from "../layout/Header";
import Card from "../section/home/Card";
import CommonSpace from "../components/CommonSpace";
import Bento from "../section/wishlist/Bento";
import BigBento from "../section/wishlist/BigBento";

const Wishlist = () => {
  // Example wishlist data
  const wishlistItems = [
    { id: 1, name: "Item 1", price: "$100", image: "image1.jpg", spanRows: 2 },
    { id: 2, name: "Item 2", price: "$150", image: "image2.jpg", spanRows: 1 },
    { id: 3, name: "Item 3", price: "$200", image: "image3.jpg", spanRows: 1 },
    { id: 4, name: "Item 4", price: "$120", image: "image4.jpg", spanRows: 1 },
    { id: 5, name: "Item 5", price: "$180", image: "image5.jpg", spanRows: 1 },
    { id: 6, name: "Item 6", price: "$220", image: "image6.jpg", spanRows: 2 },
  ];

  //"linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)
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
              <div className="flex flex-col sm:flex-row items-stretch  justify-center gap-6 ">
                <div className=" flex-1 rounded-xl">
                  <BigBento />
                </div>
                <div className=" flex-1 flex flex-col gap-6">
                  <div className="rounded-xl">
                    <Bento />
                  </div>
                  <div className=" rounded-xl">
                    <Bento />
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center  gap-6">
                <Bento />
                <Bento />
                <Bento />
              </div>
            </div>
          </div>
        </CommonSpace>
      </CommonWrapper>
    </>
  );
};

export default Wishlist;
