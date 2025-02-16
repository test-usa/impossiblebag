import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Input } from "@heroui/react";
import CommonHeader from "../components/CommonHeader";
import Header from "../layout/Header";
const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");
  const [postCode, setPostCode] = useState("");

  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
    console.log(data);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="profile" title="profile" />
      </div>
      <CommonWrapper>
        <div
          className="flex flex-col w-full max-w-screen-lg h-auto rounded-[24px] mt-[40px] pt-[40px] items-center justify-center flex-shrink-0 px-10"
          style={{
            background:
              "linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)",
          }}
        >
          <form
            onSubmit={onSubmit}
            className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-[10px] pt-10 px-5"
          >
            <Input
              errorMessage="Please enter your first name"
              label="First Name"
              labelPlacement="outside"
              name="first name"
              placeholder="Enter your first name"
              type="text"
              value={firstName}
              onValueChange={setFirstName}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter last name"
              label="Last Name"
              labelPlacement="outside"
              name="last name"
              placeholder="Enter your last name"
              type="text"
              value={lastName}
              onValueChange={setLastName}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter Email Address"
              label="Email Address"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your Email Address"
              type="email"
              value={email}
              onValueChange={setEmail}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter a Phone Number"
              label="Phone Number"
              labelPlacement="outside"
              name="phone"
              placeholder="1234567890"
              type="text"
              value={phone}
              onValueChange={setPhone}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter your Address"
              label="Address"
              labelPlacement="outside"
              name="address"
              placeholder="Enter your Address"
              type="text"
              value={address}
              onValueChange={setAddress}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter city name"
              label="Town/City"
              labelPlacement="outside"
              name="town"
              placeholder="Enter your city name"
              type="text"
              value={town}
              onValueChange={setTown}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter country name"
              label="State/Country"
              labelPlacement="outside"
              name="country"
              placeholder="Enter your country"
              type="text"
              value={country}
              onValueChange={setCountry}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
            <Input
              errorMessage="Please enter post code"
              label="Postal Code"
              labelPlacement="outside"
              name="postCode"
              placeholder="Enter your post code"
              type="text"
              value={postCode}
              onValueChange={setPostCode}
              className="w-full sm:w-[490px] lg:w-[490px] max-w-full py-3"
              style={{ height: "64px" }}
            />
          </form>

          <div className="px-5 w-full flex flex-col sm:flex-row gap-5 mt-10">
            <button className="bg-black py-[14px] text-[16px] text-white font-semibold rounded-[36px] w-full sm:w-[48%] mb-5 sm:mr-2">
              Edit Profile
            </button>
            <button className="bg-white py-[14px] text-[16px] text-black font-semibold rounded-[36px] w-full sm:w-[48%] mb-5 sm:ml-2">
              Delete Account
            </button>
          </div>
        </div>
      </CommonWrapper>
    </>
  );
};

export default Profile;
