import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import Filter from "../section/shop/Filter";
import Sort from "../section/shop/Sort";
import ShoppingCart from "../section/shop/ShoppingCart";
import CustomPagination from "../section/shop/CustomPagination";
import CommonSpace from "../components/CommonSpace";
import NewsLetter from "../components/NewsLetter";
import SapceBottom from "../components/SapceBottom";
import Header from "../layout/Header";

const Shop = () => {
  const list = new Array(20).fill(null);
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <div className="flex flex-col gap-2 items-center  w-full">
          <h2 className="font-bold text-[72px] font-Geist">Shop</h2>
          <p className=" font-Poppins ">Home / Shop</p>
        </div>
      </div>
      <CommonWrapper>
        <CommonSpace>
          <div className="flex gap-10 ">
            <div className="w-[350px] hidden lg:block">
              <Filter />
            </div>

            <div className="flex-1 ">
              <Sort />
              <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 justify-items-center">
                {list.map((item) => (
                  <ShoppingCart />
                ))}
              </div>
              <div className=" flex justify-center items-center w-full pt-10 ">
                <CustomPagination />
              </div>
            </div>
          </div>
        </CommonSpace>
        <SapceBottom>
          <NewsLetter />
        </SapceBottom>
      </CommonWrapper>
    </>
  );
};

export default Shop;
