import React from "react";
import CommonHeader from "../components/CommonHeader";
import ProductInfo from "../section/ProductDetails/ProductInfo";

const ProductDetails = () => {
  return (
    <div className="mt-[-105px]">
      <CommonHeader
        heading={"Product Details"}
        title={"Shop / Product Details"}
      ></CommonHeader>
      <ProductInfo/>
    </div>
  );
};

export default ProductDetails;
