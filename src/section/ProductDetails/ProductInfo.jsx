import React, { useState } from "react";
import ProductDetailsBag from "/ProductDetailsBag.png";
import { ShoppingCart } from "lucide-react";
import SmallBag from "/SmallBag.png";

const bags = [SmallBag, SmallBag, SmallBag, SmallBag];

const products = [
  {
    id: 1,
    name: "Luxury Black Handbag",
    image: "/images/black-handbag.jpg",
    originalPrice: 150.0,
    discountedPrice: 120.0,
    Brand: "Gucci",
    productCode: "#T01838354",
    Availability: "In stoke",
    colors: ["#000000", "#1D4D26", "#D4A017"],
    category: "Handbags",
    description:
      "A stylish black handbag with gold detailing, perfect for any occasion.",
  },
  {
    id: 2,
    name: "Elegant Leather Purse",
    image: "/images/leather-purse.jpg",
    originalPrice: 180.0,
    discountedPrice: 140.0,
    colors: ["#8B4513", "#3A3A3A", "#F4E3C0"],
    category: "Purses",
    description:
      "Elegant leather purse crafted with premium materials for a luxurious feel.",
  },
];

const ProductInfo = () => {
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-7 max-w-[1320px] mx-auto p-6 ">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <img
            src={ProductDetailsBag}
            alt="Nutrition Hydroxy"
            className="max-w-[600px] h-auto object-contain"
          />
          <div className="max-w-[600px] hidden lg:flex lg:justify-center space-x-5 mt-7">
            {bags.map((img) => (
              <img className="w-[135px] h-auto" src={img} alt="" />
            ))}
          </div>
        </div>

        {/* Right Product Info Section */}
        <div className=" max-w-xl">
          {/* Product Name and Rating */}
          <div className="flex justify-start items-center gap-5 pb-4">
            <h2 className="text-xl font-semibold">{products[0].name}</h2>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex text-yellow-500">★★★★★</div>
              <span className="text-gray-500 text-sm">(4.5/5.0)</span>
            </div>
          </div>
          <hr />

          {/* Description */}
          <p className="text-gray-600 mt-3 py-4">
            Lorem Ipsum Dolor Sit Amet Consectetur. Odio Lorem Erat Non Purus
            Pellentesque Diam Quis. Placerat Volutpat Massa Quam Quis.
            Adipiscing A Dignissim Velit Nunc. Eu Vel Consectetur Lorem Lectus
            Imperdiet.
          </p>

          {/* Product Info */}
          <div className="mt-4 space-y-2">
            <p>
              <span className="font-semibold">Brand:</span> Fendi
            </p>
            <p>
              <span className="font-semibold">Product Code:</span> ER4325T
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              <span className="text-green-600">In stock</span>
            </p>
          </div>

          {/* Color Options */}
          <div className="mt-4 flex items-center gap-5">
            <p className="font-semibold">Color:</p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-6 h-6 rounded-full bg-[#7c5b34] border"></div>
              <div className="w-6 h-6 rounded-full bg-[#252525] border"></div>
              <div className="w-6 h-6 rounded-full bg-[#1b3d23] border"></div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-2xl font-bold">$120.00</span>
            <span className="text-gray-500 line-through ml-2">$150.00</span>
          </div>

          {/* Quantity Selector & Cart Button */}
          <div className="flex items-center mt-4 space-x-4">
            {/* Quantity */}
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-2 bg-[#E5E5E5] text-gray-500  disabled:opacity-50"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="mx-4 bg-white">{quantity}</span>
              <button
                className="px-3 py-2 bg-[#E5E5E5] text-gray-500"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="flex items-center text-white transition-all top-1/2 group-hover:visible">
              <button className="bg-[#050505] px-10 py-3 rounded-full font-medium ">
                Add To Cart
              </button>
              <button className="bg-[#050505] rounded-full p-4 text-lg ">
                <ShoppingCart className="" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
