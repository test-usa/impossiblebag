import { useState } from "react";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { divider } from "@heroui/theme";

const ClientReview = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 pt-20 max-w-[1880px] mx-auto">
      {/* Testimonials Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center md:text-left">
          Hear from Our Satisfied Clients
        </h2>
        <p className="text-gray-500 text-center md:text-left">
          Here is what some of our Clients have to say about their experience
          working with us.
        </p>

        {/* Testimonials Carousel */}
        <div className="w-[1529px] relative gap-x-10 left-20 mx-auto">
          <Slider ref={(c) => setSlider(c)} {...settings}>
            {[1, 2, 3, 4, 5].map((_, i) => (
            <div className="flex gap-x-20">
                <Card
                key={i}
                className="w-[622px] h-[336px] p-6 bg-custom-gradient mx-2 "
              >
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-yellow-500 text-xl">
                    ★★★★★
                  </div>
                  <p className="mt-2 text-gray-600">
                    Potter Ipsum Wand Elf Parchment Wingardium. Patronum Beaters
                    Stand Butter Wheels Squashy Owl.
                  </p>
                  <div className="flex items-center mt-4 gap-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
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
            </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className=" top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          onClick={() => slider?.slickPrev()}
          className="w-14 h-14 flex items-center justify-center rounded-[16px] bg-white text-black border border-[#141414] hover:bg-black hover:text-white"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className=" top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          onClick={() => slider?.slickNext()}
          className="w-14 h-14 flex items-center justify-center rounded-[16px] bg-white text-black border border-[#141414] hover:bg-black hover:text-white"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ClientReview;
