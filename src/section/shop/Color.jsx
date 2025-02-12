import React from "react";

const Color = ({ color }) => {
  return (
    <div className={`p-1 rounded-full ring-1 ring-${color} w-max`}>
      <div className={`w-6 h-6 bg-${color} rounded-full`} />
    </div>
  );
};

export default Color;
