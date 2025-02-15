import React, { useState } from 'react'

const RelatedProducts = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
  

    {/* Related Products Section */}
    <h2 className="mt-14 text-2xl font-bold">Related Product</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="bg-white rounded-lg shadow-sm">
          <div className="relative p-4">
            <img
              src="/bag-example.jpg" // Replace with actual image path
              alt="Product"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-lg font-medium">Product Name Here</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">$150.00</span>
              <span className="text-lg font-bold text-black">$120.00</span>
            </div>
            {/* Color Options */}
            <div className="flex gap-2 mt-3">
              <span className="w-4 h-4 bg-black rounded-full border"></span>
              <span className="w-4 h-4 bg-green-700 rounded-full border"></span>
              <span className="w-4 h-4 bg-yellow-600 rounded-full border"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default RelatedProducts