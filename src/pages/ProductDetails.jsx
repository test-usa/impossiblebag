import React from "react";
import CommonHeader from "../components/CommonHeader";
import CommonWrapper from "../components/CommonWrapper";
import ProductInfo from "../section/ProductDetails/ProductInfo";
import RelatedProducts from "../section/ProductDetails/RelatedProducts";
import TabSwitch from "../section/ProductDetails/TabSwitch";
import CommoSpace from "../components/CommoSpace";
import NewsLetter from "../components/NewsLetter";

const ProductDetails = () => {
  return (
    <div className="mt-[-105px]">
      <CommonHeader
        heading={"Product Details"}
        title={"Shop / Product Details"}
      ></CommonHeader>
      <CommoSpace>
        <ProductInfo />
      </CommoSpace>
      <TabSwitch />
      <CommoSpace>
        <RelatedProducts />
      </CommoSpace>
      <CommonWrapper>
        <NewsLetter />
      </CommonWrapper>
    </div>
  );
};

export default ProductDetails;
