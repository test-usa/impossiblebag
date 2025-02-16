import React, { useState } from 'react'
import SmallBag from "/SmallBag.png"

const RelatedProducts = () => {

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-10">
  

    {/* Related Products Section */}
    <h2 className=" text-2xl font-bold">Related Product</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 place-items-center cursor-pointer">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="">
          <div className="relative p-4">
            <img
              src={SmallBag} // Replace with actual image path
              alt="Product"
              className="w-64 h-[275px] object-cover rounded-[24px]"
            />
          </div>
          <div className="p-4">
            <p className="text-lg font-medium">Product Name Here</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">$150.00</span>
              <span className="text-lg font-bold text-black">$120.00</span>
            </div>
            <div className="flex gap-2 mt-3">
              <div className="w-6 h-6 rounded-full bg-[#7c5b34] border-1"></div>
              <div className="w-6 h-6 rounded-full bg-[#252525] border"></div>
              <div className="w-6 h-6 rounded-full bg-[#1b3d23] border"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default RelatedProducts