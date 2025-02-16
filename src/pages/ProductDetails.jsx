import React from "react";
import CommonHeader from "../components/CommonHeader.jsx";
import CommonWrapper from "../components/CommonWrapper.jsx";
import ProductInfo from "../section/ProductDetails/ProductInfo.jsx";
import RelatedProducts from "../section/ProductDetails/RelatedProducts.jsx";
import TabSwitch from "../section/ProductDetails/TabSwitch.jsx";
import CommonSpace from "../components/CommonSpace.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const ProductDetails = () => {
  return (
    <div className="mt-[-105px]">
      <CommonHeader
        heading={"Product Details"}
        title={"Shop / Product Details"}
      ></CommonHeader>
      <CommonSpace>
        <ProductInfo />
      </CommonSpace>
      <TabSwitch />
      <CommonSpace>
        <RelatedProducts />
      </CommonSpace>
      <CommonWrapper>
        <div className="py-20">
          <NewsLetter />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ProductDetails;
