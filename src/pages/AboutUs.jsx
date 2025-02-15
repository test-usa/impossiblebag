import React from "react";
import CommonHeader from "../components/CommonHeader";
import CommonWrapper from "../components/CommonWrapper";

import { StaticCard } from "../section/aboutUs/StaticCard";
import CommonExclusiveCard from "../components/CommonExclusiveCard";
import NewsLetter from "../components/NewsLetter";
import ClientReview from "../section/aboutUs/ClientReview";
import CommonButton from "../components/CommonButton";

const AboutUs = () => {
  return (
    <div>
      <CommonHeader heading={"About Us"} title={"About Us"} />
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
  );
};

export default AboutUs;
