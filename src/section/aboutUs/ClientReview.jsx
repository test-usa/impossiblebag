import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Button, ButtonGroup } from "@heroui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

import React from "react";
const slides = [1, 2, 3, 4, 5, 6, 7];
const ClientReview = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Add your button navigation logic here
  };

  return (
    <div className="p-8 pt-20 w-[1880px] ml-48">
      {/* Testimonials Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Hear from Our Satisfied Clients</h2>
        <p className="text-gray-500">
          Here is what some of our Clients have to say about their Experience of
          working with us.
        </p>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {[1, 2, 3].map((_, i) => (
            <Card key={i} className="p-6 bg-custom-gradient">
              <CardContent>
                <div className="flex items-center gap-2 text-yellow-500 text-xl">
                  ★★★★★
                </div>
                <p className="mt-2 text-gray-600">
                  Potter Ipsum Wand Elf Parchment Wingardium. Patronum Beaters
                  Stand Butter Wheels Squashy Owl.
                </p>
                <div className="flex items-center mt-4 gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Replace with actual avatar image
                    alt="Client"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Emmett Torphy</p>
                    <p className="text-gray-500 text-sm">
                      Direct Operations Producer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className=" flex justify-center gap-2 z-20">
          <button
            onClick={prevSlide}
            className="w-14 h-14 flex items-center justify-center rounded-[16px] bg-white text-black border-1 border-[#141414] hover:bg-black hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            variant="ghost"
            className="w-14 h-14 flex items-center justify-center rounded-[16px] bg-white text-black border-1 border-[#141414] hover:bg-black hover:text-white"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        {/* Navigation Buttons */}
        {/* <div className="flex justify-end gap-2 mt-6">
                    <Button
                        variant="outline"
                        onClick={() => handleButtonClick("prev")}
                        className={`${activeButton === "prev" ? "bg-black text-white" : "bg-white text-black"
                            }`}
                    >
                        <ArrowLeft size={18} />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => handleButtonClick("next")}
                        className={`${activeButton === "next" ? "bg-black text-white" : "bg-white text-black"
                            }`}
                    >
                        <ArrowRight size={18} />
                    </Button>
                </div> */}
      </div>
    </div>
  );
};

export default ClientReview;
