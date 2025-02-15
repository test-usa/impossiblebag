import React from "react";
import Hero from "../section/Home/Hero";
import Card from "../section/home/Card";
import CommonWrapper from "../components/CommonWrapper";
const list = new Array(20).fill(null);

const Home = () => {
  return (
    <div>
      <Hero />
      <CommonWrapper>
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((item, i) => (
            <Card key={i} />
          ))}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Home;
