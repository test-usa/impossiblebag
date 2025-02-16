import React from "react";
import CommonHeader from "../components/CommonHeader";
import Header from "../layout/Header";
const Checkout = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="Checkout" title="Checkout" />
      </div>
    </>
  );
};

export default Checkout;
