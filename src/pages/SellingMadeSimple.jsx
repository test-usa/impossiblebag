import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Input } from "@heroui/react";

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
      <div className="py-5 flex flex-col items-center">
        <p className="text-[48px] font-semibold leading-[63px] text-center">
          Welcome
        </p>
        <p className="text-center">Email: Badhan.Akter29@Gmail.com</p>
        <p className="text-center">
          Not you? <strong>Sign In To My Account</strong>
        </p>
      </div>

      <div
        className="flex flex-col w-full max-w-screen-lg h-auto shrink-0 rounded-[24px] border-dotted mt-[40px] pt-[40px] items-center"
        style={{
          background:
            "linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)",
        }}
      >
        <p className="font-medium text-xl text-center">What Are You Selling?</p>
        <div className="w-full flex flex-col sm:flex-row lg:flex-row gap-[10px] pt-10 px-5">
          <Input
            // isRequired
            errorMessage="Please enter a designer name"
            label="Designer"
            labelPlacement="outside"
            name="designer"
            placeholder="Select a Designer name"
            type="text"
            value={designer}
            onValueChange={setDesigner}
            style={{ height: "64px" }}
            className="w-full sm:w-[490px] lg:w-[490px]"
          />
          <Input
            // isRequired
            errorMessage="Please enter a category name"
            label="Category"
            labelPlacement="outside"
            name="category"
            placeholder="Select a Category"
            type="text"
            value={category}
            onValueChange={setCategory}
            style={{ height: "64px" }}
            className="w-full sm:w-[490px] lg:w-[490px]"
          />
        </div>

        <div className="pt-5 w-full px-5">
          <Input
            // isRequired
            errorMessage="Please enter a product name"
            label="Product"
            labelPlacement="outside"
            name="product"
            placeholder="Select a Product name"
            type="text"
            value={product}
            onValueChange={setProduct}
            // style={{ height: "64px" }}
            className="w-full sm:w-[490px] lg:w-full"
          />
        </div>

        <div className="text-center px-[20px] md:px-[100px] sm:px-[20px] pt-[32px]">
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
            // isRequired
            errorMessage="Please enter product details and condition"
            label="Item Details and Condition"
            labelPlacement="outside"
            name="productDetails"
            placeholder="Type your message......."
            type="text"
            value={productDetails}
            onValueChange={setProductDetails}
            style={{ height: "190px" }}
            className="w-full sm:w-[490px] lg:w-full"
          />
        </div>
        <div>
          <p className="pr-[680px] pt-5">Upload yours photos of Item</p>
          <div class="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white  gap-[10px]">
              himel[1px]
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
            <div class="rounded-[24px] bg-white w-[186px] p-[24px] h-[186px] border-4 border-[1px] border-white gap-[10px]">
              himel
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default SellingMadeSimple;
