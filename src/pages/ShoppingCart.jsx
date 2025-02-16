import CommonHeader from "../components/CommonHeader";
import Header from "../layout/Header";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
// import CartWrapper from "../components/shopping-cart/CartWrapper";
import React, { useState } from "react";

import SmallBag from "/SmallBag.png";
import NewsLetter from "../components/NewsLetter";
import { useNavigate } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper";
import ProductTable from "../section/ShoppingCart/ProductTable";
import OrderSummary from "../section/ShoppingCart/OrderSummary";

const ShoppingCart = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] text-center">
        <Header />
        <CommonHeader heading="Shopping Cart" title="Shopping Cart" />
      </div>
      <ProductTable />
      <OrderSummary />
      <div className="my-20 ">
        <CommonWrapper>
          <NewsLetter />
        </CommonWrapper>
      </div>
    </>
  );
};

export default ShoppingCart;
