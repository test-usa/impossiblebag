import React from "react";
import CommonHeader from "../components/CommonHeader";
import CommonWrapper from "../components/CommonWrapper";

import CommonCarousel from "../components/CommonCarousel";
import { StaticCard } from "../section/aboutUs/StaticCard";
import CommonExclusiveCard from "../components/CommonExclusiveCard";
import NewsLetter from "../components/NewsLetter";

const AboutUs = () => {
  return (
    <div>
      <CommonHeader heading={"About Us"} title={"About Us"} />
      <StaticCard />
      <CommonExclusiveCard />

      <CommonWrapper>
        <NewsLetter/>
      </CommonWrapper>
    </div>
  );
};

export default AboutUs;
