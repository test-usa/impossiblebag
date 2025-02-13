// import CartIcon from "@/Components/Icons/CartIcon";
import MenImg from "/public/2148068409__1_-removebg-preview 2.png";
// import bagImg from "../assets/Newsletter/newsbag.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import RightArrowIcon from "@/Components/Icons/RightArrowIcon";
// import LeftArrowIcon from "@/Components/Icons/LeftArrowIcon";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="next h-[52px] w-[52px] cursor-pointer rounded-full bg-white flex items-center justify-center absolute top-[80px] right-[100px]">
            <ArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="pre h-[52px] w-[52px] cursor-pointer absolute top-[80px] right-[172px] z-50 rounded-full bg-white flex items-center justify-center">
            <ArrowLeft />
        </div>
    );
}
  
  const NewsLetter = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,  // Show one slide at a time
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  
    return (
      <div className="slider-container py-20">
        <Slider {...settings}>
          <div>
            <div className="relative h-[611px] w-full mx-auto bg-[#F8DAB0] rounded-[36px] p-10 flex items-center gap-10 overflow-hidden">
              {/* Left Content */}
              <div className="max-w-[40%]">
                <h2 className="text-[40px] font-bold text-black">
                  Subscribe our newsletter
                </h2>
                <p className="text-gray-700 mt-2 text-[16px]">
                  From Chanel to Hermès, experience luxury at your fingertips with
                  our verified and curated collections.
                </p>
  
                {/* Email Input */}
                <div className="mt-5 flex items-center bg-white p-2 rounded-full shadow-md w-[508px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 outline-none px-4 bg-transparent text-gray-700 placeholder-gray-500"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
  
              {/* Right Side - Image and Details */}
              <div className="relative w-[60%]">
                {/* Background Large Text */}
                <div className="absolute right-0 top-[30rem] mb-3 w-[1685px] text-[150px] font-extrabold leading-[132%] tracking-[-1.5px] text-white opacity-40 uppercase z-0">
                  T<span className="pl-[15px]">HE</span> IMPOSSIBLE BAGS
                </div>
  
                {/* Main Image - Will Partially Hide the Text */}
                <div className="relative z-10">
                  <img
                    src={MenImg}
                    alt="Luxury Bag"
                    className="h-[611px] w-[534px] object-cover"
                  />
                </div>
  
                {/* Small Product Card */}
                <div className="absolute flex w-[244px] h-[160px] p-3 right-[70px] bottom-[220px] bg-white rounded-[24px] shadow-lg items-start gap-2 flex-shrink-0 z-20">
                  {/* Price & Cart Button Section */}
                  <div className="w-full">
                    <div className="text-gray-600 text-sm pt-3">Price</div>
                    <div className="font-bold text-black text-lg pt-2">$150.00</div>
                    <button className="bg-black text-white p-2 rounded-full mt-4">
                      <ShoppingCart />
                    </button>
                  </div>
  
                  <div>
                    {/* <img src={bagImg} alt="Bag" className="w-[200px] h-[140px]" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div>
            <div className="relative h-[611px] w-full mx-auto bg-[#F8DAB0] rounded-[36px] p-10 flex items-center gap-10 overflow-hidden">
              {/* Left Content */}
              <div className="max-w-[40%]">
                <h2 className="text-[40px] font-bold text-black">
                  Subscribe our newsletter
                </h2>
                <p className="text-gray-700 mt-2 text-[16px]">
                  From Chanel to Hermès, experience luxury at your fingertips with
                  our verified and curated collections.
                </p>
  
                {/* Email Input */}
                <div className="mt-5 flex items-center bg-white p-2 rounded-full shadow-md w-[508px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 outline-none px-4 bg-transparent text-gray-700 placeholder-gray-500"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
  
              {/* Right Side - Image and Details */}
              <div className="relative w-[60%]">
                {/* Background Large Text */}
                <div className="absolute right-0 top-[30rem] mb-3 w-[1685px] text-[150px] font-extrabold leading-[132%] tracking-[-1.5px] text-white opacity-40 uppercase z-0">
                  T<span className="pl-[15px]">HE</span> IMPOSSIBLE BAGS
                </div>
  
                {/* Main Image - Will Partially Hide the Text */}
                <div className="relative z-10">
                  <img
                    src={MenImg}
                    alt="Luxury Bag"
                    className="h-[611px] w-[534px] object-cover"
                  />
                </div>
  
                {/* Small Product Card */}
                <div className="absolute flex w-[244px] h-[160px] p-3 right-[70px] bottom-[220px] bg-white rounded-[24px] shadow-lg items-start gap-2 flex-shrink-0 z-20">
                  {/* Price & Cart Button Section */}
                  <div className="w-full">
                    <div className="text-gray-600 text-sm pt-3">Price</div>
                    <div className="font-bold text-black text-lg pt-2">$150.00</div>
                    <button className="bg-black text-white p-2 rounded-full mt-4">
                      <ShoppingCart />
                    </button>
                  </div>
  
                  <div>
                    {/* <img src={bagImg} alt="Bag" className="w-[200px] h-[140px]" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
    );
  };
  
  export default NewsLetter;
  