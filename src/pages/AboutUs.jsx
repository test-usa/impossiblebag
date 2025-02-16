import React from "react";
import CommonWrapper from "../components/CommonWrapper.jsx";
import { StaticCard } from "../section/aboutUs/StaticCard.jsx";
import CommonExclusiveCard from "../components/CommonExclusiveCard.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import ClientReview from "../section/aboutUs/ClientReview.jsx";
import CommonButton from "../components/CommonButton.jsx";
import Header from "../layout/Header.jsx";
import CommonHeader from "../components/CommonHeader.jsx";

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
