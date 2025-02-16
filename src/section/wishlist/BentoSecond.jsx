import React from "react";
import Bento from "./Bento";

const BentoSecond = () => {
  const list = new Array(3).fill(null);
  return (
    <div className="w-full flex items-center justify-between  gap-6">
      {list.map((item, i) => (
        <Bento key={i} />
      ))}
    </div>
  );
};

export default BentoSecond;
