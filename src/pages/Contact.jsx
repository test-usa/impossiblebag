import React from "react";
import CommonHeader from "../components/CommonHeader";
import Header from "../layout/Header";

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="Contact" title="Contact" />
      </div>
      <div>
        <CommonHeader />
        <div className="flex flex-col items-center justify-center min-h-screen py-6 px-4 md:px-6 lg:px-8">
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
                  className="w-full  lg:w-[493px] p-4  border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
                  Last Name*
                </h3>

                <input
                  placeholder="Last Name"
                  className="w-full p-4 border lg:w-[493px]  border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-4  lg:w-[493px] border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">
                  Phone Number*
                </h3>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4  lg:w-[493px] border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full h-[350px] p-4 lg:w-[493px] md:w-[493px] border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </>
  );
};

export default Contact;
