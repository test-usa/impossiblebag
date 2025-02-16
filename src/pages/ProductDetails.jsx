import React from "react";
import CommonHeader from "../components/CommonHeader";
import CommonWrapper from "../components/CommonWrapper";
import ProductInfo from "../section/ProductDetails/ProductInfo";
import RelatedProducts from "../section/ProductDetails/RelatedProducts";
import TabSwitch from "../section/ProductDetails/TabSwitch";
import CommonSpace from "../components/CommonSpace";
import NewsLetter from "../components/NewsLetter";
import Header from "../layout/Header";

const ProductDetails = () => {
  return (
    <>
    <div>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="Product Details" title=" Product / Product Details" />
      </div>

    
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
    </>
  );
};

export default ProductDetails;
