import { RadioGroup, Radio } from "@heroui/react";

import React from "react";

const Tab = () => {
  return (
    <div>
      <RadioGroup
        size="lg"
        classNames={{
          wrapper: "flex items-center justify-between  w-[40%] ",
        }}
        className="flex items-center justify-between"
        orientation="horizontal"
      >
        <Radio size="lg" value="buenos-aires">
          All Collection
        </Radio>
        <Radio value="sydney">New Collection</Radio>
        <Radio value="san-francisco">What's Hot</Radio>
      </RadioGroup>
    </div>
  );
};

export default Tab;
