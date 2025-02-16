import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  
  const handleSubmitPayment = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex justify-center lg:justify-end lg:w-[1520px] lg:ml-44 px-4 md:px-8">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] bg-white p-6 rounded-lg shadow-md border border-[#D9D9D9]">
        <h2 className="text-xl font-bold mb-4 text-center pt-2">
          Order Summary
        </h2>
        <hr className="mt-4 bg-[#C5C5C5]" />

        <div className="space-y-4 pt-6">
          <div className="flex justify-between">
            <span>Price</span>
            <span>$ 196.34</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge</span>
            <span>$ 196.34</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$ 196.34</span>
          </div>
          <hr className="bg-[#C5C5C5]" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$ 196.34</span>
          </div>
        </div>

        <button
          onClick={handleSubmitPayment}
          className="bg-black text-white py-2 px-4 rounded-full w-full mt-6 mb-4"
        >
          Continue to checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
