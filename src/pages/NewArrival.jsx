import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import Filter from "../section/shop/Filter";
import Sort from "../section/shop/Sort";
import ShoppingCart from "../section/shop/ShoppingCart";
import { Button } from "@heroui/react";
import FilterModal from "../section/shop/FilterModal";

const NewArrival = () => {
  const list = new Array(20).fill(null);
  return (
    <CommonWrapper>
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
        </div>
      </div>
    </CommonWrapper>
  );
};

export default NewArrival;
