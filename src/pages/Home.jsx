import React from "react";
import Hero from "../section/Home/Hero";
import Card from "../section/home/Card";
import CommonWrapper from "../components/CommonWrapper";
import Tab from "../section/home/Tab";
import CommonExclusiveCard from "../components/CommonExclusiveCard";
import CommoSpace from "../components/CommoSpace";
import CollectionList from "../section/home/CollectionList";
import Support from "../section/home/Support";
import NewsLetter from "../components/NewsLetter";
import BestSelling from "../section/home/BestSelling";
import BestBag from "../section/home/BestBag";
import Gallery from "../section/home/Gallery";
const list = new Array(9).fill(null);

const Home = () => {
  return (
    <div>
      <Hero />
      <CommonWrapper>
        <div className="">
          <CommoSpace>
            <Tab />
          </CommoSpace>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {list.map((item, i) => (
              <Card key={i} />
            ))}
          </div>
          <CommoSpace>
            <CommonExclusiveCard />
          </CommoSpace>

          <CollectionList />
          <CommoSpace>
            <Support />
          </CommoSpace>

          <NewsLetter />
          <CommoSpace>
            <BestSelling />
          </CommoSpace>
          <BestBag />

          <CommoSpace>
            <Gallery />
          </CommoSpace>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Home;
