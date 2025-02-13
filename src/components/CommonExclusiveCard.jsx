import React from "react";
import ExclusiveImg from "/public/ExclusiveImg.jpg";
import CommonWrapper from "./CommonWrapper";
import RightTopArrow from "/public/RightTopArrow.png";
const CommonExclusiveCard = () => {
  return (
    <CommonWrapper>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full p-8 md:p-10 bg-gradient-to-t from-[#EBEBEB] to-white rounded-tl-[36px] rounded-bl-[36px] flex justify-center items-center">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/efac/2ae4/07a8c3a4f8e8f20451dd440bf9db11bc?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IQvJBMrFH6nqBMZ-M~sgag952nhkyfIebpJTf6MNOIYspgh~JHBjfrBYePrcB6vYmyNom0cF3rd0xA16go0VTFGJz--~L-8HQqUoBj3MSkNgn3NqxV63fKHGhAoBhayfWm5LQFfkwtLusfUNUsJFlG4uVP33feY01SdwJf7uo5yxtlgXNC5LdTTM2GtCl7IRXlyvIC6kwBhe3QiMoZcROpiYywyfkuiYwyosA618UR3GM-5GLsF2TJmZKsfp04Rn~~q02bvXIMe8pH7MPoxiLMnidYgPds9DKyGdXu6B6JjgeRhDAH5-YOSLcN9~97e4nPq5i~1Wv-qoIhfxrIjEaw__"
            }
            alt="Exclusive Offer"
            className="w-[280px] md:w-[350px] lg:w-[406px]"
          />
        </div>

        <div className="lg:w-1/2 w-full bg-primary rounded-tr-[36px] rounded-br-[36px] flex justify-center items-center p-8 md:p-10">
          <div className="bg-white rounded-[36px] p-6 md:p-8 flex flex-col items-center w-full max-w-sm md:max-w-md">
            <h2 className="font-geist font-semibold text-xl md:text-2xl pt-6 md:pt-8 text-center">
              Exclusive bag offers await
            </h2>

            <p className="font-geist text-center text-sm md:text-base text-[#5A5C5F] pt-4 md:pt-6">
              Lorem ipsum dolor sit amet consectetur.
              <br /> Phasellus ornare vitae in urna suspendisse
              <br /> elit arcu tellus.
            </p>

            <div className="flex items-center pt-6 md:pt-8">
              {/* <GroupButton
              buttonText="Try NOW"
              icon={<ArrowIcon className=" " />}
            /> */}
              <button className="rounded-[24px] font-[16px] bg-black text-white border border-black font-geist text-lg md:text-xl px-4 md:px-6 py-2 transition-all duration-300 hover:bg-white hover:text-black">
                See Collection
              </button>
              
                <img className="w-[54px] h-[54px] rounded-full font-[16px] bg-black text-white border border-black font-geist text-lg md:text-xl px-4 md:px-6 py-2 transition-all duration-300 hover:bg-white hover:text-black" src={RightTopArrow} alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default CommonExclusiveCard;
