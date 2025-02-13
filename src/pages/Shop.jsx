import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import Filter from "../section/shop/Filter";

const Shop = () => {
  return (
    <CommonWrapper>
      <div className="flex gap-4 pt-20 ">
        <div className="w-[320px]">
          <Filter />
        </div>
        <div className="flex-1 bg-red-700">B</div>
      </div>
    </CommonWrapper>
  );
};

export default Shop;
