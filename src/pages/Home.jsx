import React from "react";
import Hero from "../section/Home/Hero.jsx";
import CommonWrapper from "../components/CommonWrapper.jsx";

import CommonExclusiveCard from "../components/CommonExclusiveCard.jsx";
import CollectionList from "../section/home/CollectionList.jsx";
import Support from "../section/home/Support.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import BestSelling from "../section/home/BestSelling.jsx";
import BestBag from "../section/home/BestBag.jsx";
import Gallery from "../section/home/Gallery.jsx";
import CommonSpace from "../components/CommonSpace.jsx";
import Card from "../section/home/Card.jsx";
import Tab from "../section/home/Tab.jsx";
const list = new Array(9).fill(null);

const Home = () => {
  return (
    <div>
      <Hero />
      <CommonWrapper>
        <div className="">
          <CommonSpace>
            <Tab />
          </CommonSpace>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {list.map((item, i) => (
              <Card key={i} />
            ))}
          </div>
          <CommonSpace>
            <CommonExclusiveCard />
          </CommonSpace>

          <CollectionList />
          <CommonSpace>
            <Support />
          </CommonSpace>

          <NewsLetter />
          <CommonSpace>
            <BestSelling />
          </CommonSpace>
          <BestBag />

          <CommonSpace>
            <Gallery />
          </CommonSpace>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Home;
