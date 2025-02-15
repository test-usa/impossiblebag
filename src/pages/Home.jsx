import React from "react";
import Hero from "../section/Home/Hero";
import Card from "../section/home/Card";
import CommonWrapper from "../components/CommonWrapper";


import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import bag1 from "/Bag1.png";
import bag2 from "/Bag2.png";
import bag3 from "/Bag3.png";
import bag4 from "/Bag4.png";

const list = new Array(20).fill(null);

const BAG_DATA = [
  {
    id: 1,
    image: bag1,
    hoverImage: bag1,
    price: "$1200",
    top: 600,
    left: 260,
    hoverTop: 520,
    hoverLeft: 480,
    addTop: 700,
  },
  {
    id: 2,
    image: bag2,
    hoverImage: bag2,
    price: "$1500",
    top: 695,
    left: 650,
    hoverTop: 600,
    hoverLeft: 860,
    addTop: 770,
    flip: true,
  },
  {
    id: 3,
    image: bag3,
    hoverImage: bag3,
    price: "$1800",
    top: 683,
    left: 1033,
    hoverTop: 600,
    hoverLeft: 1230,
    addTop: 770,
  },
  {
    id: 4,
    image: bag4,
    hoverImage: bag4,
    price: "$2000",
    top: 625,
    left: 1414,
    hoverTop: 520,
    hoverLeft: 1590,
    addTop: 690,
  },
];


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
