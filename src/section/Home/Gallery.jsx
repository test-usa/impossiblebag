import React from "react";

import g1 from "../../assets/images/g1.png";
import g2 from "../../assets/images/g2.png";
import g3 from "../../assets/images/g3.png";
import g4 from "../../assets/images/g4.png";
import g5 from "../../assets/images/g5.png";
import g6 from "../../assets/images/g6.png";
import g7 from "../../assets/images/g7.png";
import g8 from "../../assets/images/g8.png";
import g9 from "../../assets/images/g9.png";

const Gallery = () => {
  return (
    <div className=" w-full grid grid-cols-1 gap-3 justify-items-center ">
      <div className="grid grid-cols-4 gap-2  place-items-stretch  ">
        <div className="col-span-2 ">
          <img className=" " src={g9} alt="img" />
        </div>
        <img className="" src={g2} alt="img" />
        <img className="" src={g3} alt="img" />
      </div>

      <div className="grid grid-cols-4 gap-2  place-items-stretch">
        <img src={g4} alt="img" />
        <div className=" col-span-2 gap-2">
          <img className="w-full" src={g5} alt="img" />
        </div>
        <img src={g6} alt="img" />
      </div>
      <div className="grid grid-cols-3 gap-2 place-items-stretch ">
        <img src={g7} alt="img" />
        <img src={g8} alt="img" />
        <img src={g1} alt="img" />
      </div>
    </div>
  );
};

export default Gallery;
