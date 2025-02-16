import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import MenImg from "/2148068409__1_-removebg-preview 2.png";

// Navigation Buttons Container
const CustomArrows = ({ next, prev }) => (
  <div className="absolute top-5 right-5 flex gap-3 z-10">
    <button
      onClick={prev}
      className="h-14 w-14 flex items-center justify-center bg-white text-gray-400 rounded-full shadow-md"
    >
      <ArrowLeft />
    </button>
    <button
      onClick={next}
      className="h-14 w-14 flex items-center justify-center bg-white text-gray-400 rounded-full shadow-md"
    >
      <ArrowRight />
    </button>
  </div>
);

const slides = [
  {
    title: "Subscribe to our newsletter",
    description:
      "From Chanel to Hermès, experience luxury at your fingertips with our verified and curated collections.",
    price: "$150.00",
    image: MenImg,
  },
  {
    title: "Get Exclusive Offers",
    description:
      "Sign up to receive the latest updates and promotions on luxury collections.",
    price: "$200.00",
    image: MenImg,
  },
  {
    title: "Subscribe our newsletter",
    description:
      "From Chanel to Hermès, experience luxury at your fingertips with our verified and curated collections.",
    price: "$300.00",
    image: MenImg,
  },
];

const NewsLetter = () => {
  let sliderRef = null;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <div className="slider-container relative">
      {/* Custom Navigation Buttons */}
      <CustomArrows
        next={() => sliderRef?.slickNext()}
        prev={() => sliderRef?.slickPrev()}
      />

      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-[611px] w-full mx-auto bg-[#F8DAB0] rounded-[36px] p-10 flex items-center gap-10 overflow-hidden">
              {/* Left Content */}
              <div className="lg:max-w-[40%]">
                <h2 className="lg:text-[40px] text-2xl font-bold text-black">
                  {slide.title}
                </h2>
                <p className="text-black mt-2 text-[16px]">
                  {slide.description}
                </p>

                {/* Email Input */}
                <div className="mt-5 flex items-center bg-white p-1 rounded-full shadow-md w-[508px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 outline-none px-4 bg-transparent text-gray-700 placeholder-black"
                  />
                  <button className="bg-black text-white px-8 py-3 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Right Side - Image and Details */}
              <div className="relative w-[60%] hidden lg:block">
                {/* Background Large Text */}
                <div className="absolute right-0 top-[30rem] mb-3 w-[1685px] text-[150px] font-extrabold leading-[132%] tracking-[-1.5px] text-white opacity-40 uppercase z-0">
                  T<span className="pl-[15px]">HE</span> IMPOSSIBLE BAGS
                </div>

                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={slide.image}
                    alt="Luxury Bag"
                    className="h-[611px] w-[534px] object-cover"
                  />
                </div>

                {/* Small Product Card */}
                <div className="absolute flex w-[244px] h-[160px] p-3 right-[70px] bottom-[220px] bg-white rounded-[24px] shadow-lg items-start gap-2 flex-shrink-0 z-20">
                  {/* Price & Cart Button Section */}
                  <div className="w-full">
                    <div className="text-gray-600 text-sm pt-3">Price</div>
                    <div className="font-bold text-black text-lg pt-2">
                      {slide.price}
                    </div>
                    <button className="bg-black text-white p-2 rounded-full mt-4">
                      <ShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsLetter;
