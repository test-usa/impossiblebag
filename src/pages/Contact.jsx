import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import arrow from "../assets/images/arrow.png";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [massage, setMassage] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
    console.log(data);
  };

  return (
    <CommonWrapper>
      <div className="pt-[140px] ">
        <h3 className="text-[48px] font-semibold leading-[63px] text-center">
          Send Your Massage
        </h3>
        <div className="lg:pl-[250px] xl:pl-[250px] pt-[64px] items-center">
          <Form
            className="w-full max-w-xs"
            validationBehavior="native"
            onSubmit={onSubmit}
          >
            <div className="lg:flex xl:flex gap-[20px]">
              <div>
                <Input
                  isRequired
                  errorMessage="Please enter your first Name"
                  label="First Name"
                  labelPlacement="outside"
                  name="first name"
                  placeholder="Enter your first name"
                  type="text"
                  value={firstName}
                  onValueChange={setFirstName}
                  style={{ width: "490px", height: "64px" }}
                />
              </div>
              <div>
                <Input
                  isRequired
                  errorMessage="Please enter your last name"
                  label="Last Name"
                  labelPlacement="outside"
                  name="last name"
                  placeholder="Please enter your last name"
                  type="text"
                  value={lastName}
                  onValueChange={setLastName}
                  style={{ width: "490px", height: "64px" }}
                />
              </div>
            </div>
            <div className="lg:flex xl:flex gap-[20px]">
              <div>
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                  style={{ width: "490px", height: "64px" }}
                />
              </div>
              <div>
                <Input
                  isRequired
                  errorMessage="Please enter your phone number"
                  label="Phone Number"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your phone number"
                  type="text"
                  value={phoneNumber}
                  onValueChange={setPhoneNumber}
                  style={{ width: "490px", height: "64px" }}
                />
              </div>
            </div>
            <div>
              <Input
                isRequired
                errorMessage="Please type your massage"
                label="Your Massage"
                labelPlacement="outside"
                name="massage"
                placeholder="type your massage"
                type="text"
                value={massage}
                onValueChange={setMassage}
                className="w-[490px] lg:w-[1050px] lg:h-[100px]"
              />
            </div>
            <div className="flex pt-2">
              <Button
                type="submit"
                variant="bordered"
                className="bg-black text-white items-center rounded-full"
              >
                Send Massage
              </Button>
              <button className="bg-black w-[40px] h-[40px] rounded-full">
                <img className="pl-2" src={arrow} alt="Arrow" />
              </button>
            </div>
            {submitted && (
              <div className="text-small text-default-500">
                {/* You submitted: <code>{JSON.stringify(submitted)}</code> */}
                Thank you for your valuable Massage
              </div>
            )}
          </Form>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Contact;
