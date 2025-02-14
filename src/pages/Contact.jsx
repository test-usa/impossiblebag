import React from "react";

// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";

// import { GoArrowUpRight } from "react-icons/go";
import CommonHeader from "../components/CommonHeader";

const Contact = () => {
  // const { register, handleSubmit, reset } = useForm();
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const onSubmit = async (data) => {
  //     setIsSubmitting(true);
  //     try {
  //         await axios.post("YOUR_API_ENDPOINT_HERE", data);
  //         alert("Message sent successfully!");
  //         reset();
  //     } catch (error) {
  //         alert("Failed to send message");
  //     } finally {
  //         setIsSubmitting(false);
  //     }
  // };
  return (
    <div>
      {/* Contact */}
      {/* <ReuseSubHeader title="Contact" subtitle="Home /Contact " /> */}
      <CommonHeader />
      <div className="flex items-center justify-center min-h-screen py-6 px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold mb-6 text-center leading-tight tracking-tight">
          Send Your Message
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
                First Name*
              </h3>
              <input
                placeholder="First Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
                Last Name*
              </h3>

              <input
                placeholder="Last Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
                Email Address*
              </h3>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
                Phone Number*
              </h3>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
              Your Message*
            </h3>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full h-[350px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center mt-8 flex justify-start">
            <button className="bg-black px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
              Send Message
            </button>
            <button className="bg-black p-[20px] text-white rounded-full">
              {/* <GoArrowUpRight /> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
