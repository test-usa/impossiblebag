import React from 'react'
import CommonHeader from '../components/CommonHeader'
import logo1 from "../assets/icons/Frame.png"

const features = [
    {
      heading: "Fast & Secure Delivery",
      logo: "🚚", // Replace with an actual icon component if needed
    },
    {
      heading: "24/7 Customer Support",
      logo: "📞",
    },
    {
      heading: "High-Quality Products",
      logo: "🛍️",
    },
    {
      heading: "Easy Returns",
      logo: "🔄",
    },
  ];
  

const AboutUs = () => {
  return (
    <div>
        <CommonHeader heading={"About Us"} title={"About Us"}/>

       <div className='flex justify-center items-center gap-x-5 py-32'>
       {
            features.map((feature) =>   {
                return (
                    <div className="bg-[#F8DAB0]  p-6 rounded-[16px] flex flex-col items-center text-center w-[288px] h-[255px] shrink-0">
      <div className=" text-4xl">
        {/* Replace with an actual icon */}
        {feature.logo}
      </div>
      <p className="text-black font-medium mt-3">{feature.heading}</p>
    </div>
                )
            })
        }
       </div>
        
       
    </div>
  )
}

export default AboutUs


// width: 288px;
// height: 255px;
// flex-shrink: 0;
// border-radius: 16px;
// background: #F8DAB0;