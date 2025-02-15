import React from "react";
import CommonHeader from "../components/CommonHeader";
import ProductInfo from "../section/ProductDetails/ProductInfo";
import RelatedProducts from "../section/ProductDetails/RelatedProducts";
import TabSwitch from "../section/ProductDetails/TabSwitch";

const ProductDetails = () => {
  return (
    <div className="mt-[-105px]">
      <CommonHeader
        heading={"Product Details"}
        title={"Shop / Product Details"}
      ></CommonHeader>
      <ProductInfo/>
      <TabSwitch/>
      <RelatedProducts/>
    </div>
  );
};

export default ProductDetails;
