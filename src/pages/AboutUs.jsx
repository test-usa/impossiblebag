import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import { StaticCard } from "../section/aboutUs/StaticCard";
import CommonExclusiveCard from "../components/CommonExclusiveCard";
import NewsLetter from "../components/NewsLetter";
import ClientReview from "../section/aboutUs/ClientReview";
import CommonButton from "../components/CommonButton";
import Header from "../layout/Header";
import CommonHeader from "../components/CommonHeader";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]">
        <Header />
        <CommonHeader heading="About Us" title="About-us" />
      </div>
      <div>
        <StaticCard />
        <CommonWrapper>
          <CommonExclusiveCard />
        </CommonWrapper>
        <ClientReview />
        <CommonWrapper></CommonWrapper>
        <CommonWrapper>
          <NewsLetter />
        </CommonWrapper>
        <CommonButton title={"Start Shopping"} />
      </div>
    </>
  );
};

export default AboutUs;
