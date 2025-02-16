import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import CommonHeader from "../components/CommonHeader";
import Header from "../layout/Header";
import CommonSpace from "../components/CommonSpace";
const Profile = () => {
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
    console.log(data);
  };

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="profile" title="profile" />
      </div>
      <CommonWrapper>
        <CommonSpace>
          <div className="max-w-5xl mx-auto bg-custom-gradient rounded-3xl font-Geist">
            <div className="text-3xl font-semibold pt-12 text-center">
              <h2>Personal Info</h2>
            </div>
            <Form
              className="w-full  grid grid-cols-2 gap-6  text-xl p-16 "
              validationBehavior="native"
              onSubmit={onSubmit}
            >
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                className="bg-transparent "
                isRequired
                errorMessage="Please enter a valid email"
                label="First Name"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                isRequired
                errorMessage="Please enter a valid email"
                label="Last Name"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                isRequired
                errorMessage="Please enter a valid email"
                label="Last Name"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                isRequired
                errorMessage="Please enter a valid email"
                label="Phone Number"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                isRequired
                errorMessage="Please enter a valid email"
                label=" Address"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
              <Select
                classNames={{
                  trigger: "bg-white py-6",
                  label: "text-lg font-medium",
                }}
                label="Select an animal"
                labelPlacement="outside"
                placeholder="Country Name"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
              <Input
                classNames={{
                  label: "text-lg font-medium",
                  inputWrapper:
                    "!bg-white py-6  rounded-2xl ring-1 ring-[#D9D9D9] ",
                  input: "text-lg",
                }}
                isRequired
                errorMessage="Please enter a valid email"
                label="Postal Code"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
              <button className="bg-[#050505] text-white py-2 rounded-3xl">
                Edit Profile
              </button>
              <button className="ring-1 bg-white ring-[#050505] py-2 rounded-3xl text-[#050505]">
                Delete Account
              </button>
            </Form>
          </div>
        </CommonSpace>
      </CommonWrapper>
    </>
  );
};

export default Profile;
