import React from "react";
import Card from "./Card";

const BestSelling = () => {
  const list = new Array(3).fill(null);
  return (
    <div>
      <h2 className="text-3xl font-semibold font-Poppins text-[#050505] pb-5">
        Best Selling Bag
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {list.map((item, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
