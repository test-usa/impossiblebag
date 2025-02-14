import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Input } from "@heroui/react";
import frame from "../assets/images/Frame.svg";

const SellingMadeSimple = () => {
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [productDetails, setProductDetails] = useState("");

  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
    console.log(data);
  };

  return (
    <CommonWrapper>
      <div className="py-5 flex flex-col items-center w-full">
        <p className="text-[48px] font-semibold leading-[63px] text-center">
          Welcome
        </p>
        <p className="text-center">Email: Badhan.Akter29flex-wrap@Gmail.com</p>
        <p className="text-center">
          Not you? <strong>Sign In To My Account</strong>
        </p>
      </div>

      <div
        className="flex flex-col w-full max-w-screen-lg h-auto rounded-[24px] mt-[40px] pt-[40px] items-center justify-center flex-shrink-0 px-10"
        style={{
          background:
            "linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)",
        }}
      >
        <p className="font-medium text-xl text-center max-w-full mx-auto">
          What Are You Selling?
        </p>

        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col sm:flex-row lg:flex-row gap-[10px] pt-10 px-5"
        >
          <Input
            errorMessage="Please enter a designer name"
            label="Designer"
            labelPlacement="outside"
            name="designer"
            placeholder="Select a Designer name"
            type="text"
            value={designer}
            onValueChange={setDesigner}
            className="w-full sm:w-[490px] lg:w-[490px] max-w-full"
            style={{ height: "64px" }}
          />
          <Input
            errorMessage="Please enter a category name"
            label="Category"
            labelPlacement="outside"
            name="category"
            placeholder="Select a Category"
            type="text"
            value={category}
            onValueChange={setCategory}
            className="w-full sm:w-[490px] lg:w-[490px] max-w-full"
            style={{ height: "64px" }}
          />
        </form>

        <div className="pt-5 lg:w-full md:w-full w-full px-5">
          <Input
            errorMessage="Please enter a product name"
            label="Product"
            labelPlacement="outside"
            name="product"
            placeholder="Select a Product name"
            type="text"
            value={product}
            onValueChange={setProduct}
            className="lg:w-full w-[490px] md:w-full w-full max-w-full"
          />
        </div>

        <div className="text-center px-5 pt-[32px]">
          <p className="font-medium text-xl">
            Any Details We Should Know About
          </p>
          <p className="font-normal text-xl mt-4">For Example:</p>
          <ul className="list-disc">
            <li>
              <p>Condition: light corner wear, odor, interior pen marks</p>
            </li>
            <li>
              <p>Items included: shoulder strap and lock & key</p>
            </li>
            <li>
              <p>Other details: measurements & item age</p>
            </li>
          </ul>
        </div>

        <div className="pt-5 w-full px-5">
          <Input
            errorMessage="Please enter product details and condition"
            label="Item Details and Condition"
            labelPlacement="outside"
            name="productDetails"
            placeholder="Type your message......."
            type="text"
            value={productDetails}
            onValueChange={setProductDetails}
            style={{ height: "190px" }}
            className="w-full lg:w-full max-w-full"
          />
        </div>

        <div className="pt-5 w-full px-5">
          <p className="w-full lg:w-full max-w-full py-5">
            Upload your photos of Item
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 px-5">
            {[
              "Add Photo",
              "Front",
              "Back",
              "Inside",
              "Base",
              "Condition",
              "Details",
              "Retail Tag",
              "Seller Id",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px] flex flex-col items-center justify-center"
              >
                {item === "Add Photo" ? (
                  <>
                    <img className="pl-1 pt-1" src={frame} alt="Add Photo" />
                    <p className="pl-1 pt-1 font-light">{item}</p>
                  </>
                ) : (
                  <p className="pl-1 pt-1 font-light">{item}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 w-full ">
          <button className="bg-black py-[14px] text-[16px] text-white font-semibold rounded-[36px] my-5 w-full mb-[64px] px-5">
            Submit My Quote
          </button>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default SellingMadeSimple;
