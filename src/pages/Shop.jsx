import React from "react";
import CommonWrapper from "../components/CommonWrapper.jsx";
import Filter from "../section/shop/Filter.jsx";
import Sort from "../section/shop/Sort.jsx";
import ShoppingCart from "../section/shop/ShoppingCart.jsx";
import CustomPagination from "../section/shop/CustomPagination.jsx";
import CommonSpace from "../components/CommonSpace.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import SapceBottom from "../components/SapceBottom.jsx";
import Header from "../layout/Header.jsx";
import CommonHeader from "../components/CommonHeader.jsx";

const Shop = () => {
  const list = new Array(20).fill(null);
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="Shop" title="shop" />
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
