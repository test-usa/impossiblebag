import { Checkbox } from "@heroui/checkbox";
import React from "react";
import Color from "./Color";
import { Slider } from "@nextui-org/react";

const designer = [
  "3.1 Phillip Lim",
  "Alaia",
  "Alexander McQueen",
  "Bottega Veneta",
  "Alexander Wang",
  "Balenciaga",
  "Alexander Wang",
];
const Filter = () => {
  return (
    <div className="p-4 rounded-xl bg-custom-gradient">
      <div className="p-4 bg-white rounded-xl ">
        <h2 className="text-xl font-bold capitalize">filter</h2>

        <h3 className="py-4 font-semibold">Designers</h3>
        <div>
          <div className="flex flex-col gap-4">
            {designer.map((item) => (
              <Checkbox color="primary">{item}</Checkbox>
            ))}
            <div className="border-[.5px] border-[#dddddd]"></div>
          </div>
        </div>
        <h3 className="py-4 font-semibold">Designers</h3>
        <div>
          <div className="flex flex-col gap-4">
            {designer.map((item) => (
              <Checkbox color="primary">{item}</Checkbox>
            ))}
            <div className="border-[.5px] border-[#dddddd]"></div>
          </div>
        </div>
        <h3 className="py-4 font-semibold ">Color</h3>
        <div>
          <div className="flex gap-4">
            <Color color="red-600" />
            <Color color="green-600" />
            <Color color="yellow-600" />
            <Color color="red-600" />
            <Color color="red-600" />
          </div>
          <div className="border-[.5px] border-[#dddddd] mt-4"></div>
        </div>
        <div>
          <div className="flex gap-4">
            <Slider
              className="max-w-md"
              defaultValue={0.4}
              label="Temperature"
              maxValue={1}
              minValue={0}
              step={0.01}
            />
          </div>
          <div className="border-[.5px] border-[#dddddd] mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
