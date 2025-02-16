import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import Filter from "../section/shop/Filter";
import Sort from "../section/shop/Sort";
import ShoppingCart from "../section/shop/ShoppingCart";
import NewsLetter from "../components/NewsLetter";
import CustomPagination from "../section/shop/CustomPagination";
import CommonSpace from "../components/CommonSpace";
import SapceBottom from "../components/SapceBottom";
import Header from "../layout/Header";
import CommonHeader from "../components/CommonHeader";

const NewArrival = () => {
  const list = new Array(20).fill(null);
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="New Arrival" title="New Arrival" />
      </div>
      <CommonWrapper>
        <CommonSpace>
          <div className="flex gap-10 pt-20 ">
            <div className="w-[350px] hidden lg:block">
              <Filter />
            </div>

            <div className="flex-1">
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

export default NewArrival;
