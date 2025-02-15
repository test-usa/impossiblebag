import React from 'react'

const ProductInfo = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-x-32 max-w-7xl mx-auto p-6">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={""}
            alt="Nutrition Hydroxy"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Product Info Section */}
        <div className="w-full lg:w-1/2">
          {/* Product Title */}
          {/* <h1 className="text-5xl font-bold text-gray-900">{product?.name}</h1> */}

          {/* Price */}
          {/* <p className="text-2xl text-gray-700 mt-2">{product?.price}$</p> */}

          {/* Description */}
          {/* <p className="text-gray-600 mt-4">{product?.description}</p> */}

          {/* Quantity & Buy Now */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-sm">
              <button
                // onClick={handleDecrease}
                className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300"
              >
                -
              </button>
              {/* <span className="px-4 py-2 text-lg">{orderQuantity}</span> */}
              <button
                // onClick={handleIncrease}
                className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
            //   onClick={() => createOrder(id as string, orderQuantity)}
              className="bg-primary text-white px-6 py-3 rounded-sm font-semibold"
            >
              Buy Now
            </button>
          </div>

          {/* SKU, Category, Tag */}
          <div className="mt-6 text-gray-700">
            <p>
              <span className="font-semibold">SKU:</span> 008
            </p>
            <p>
              <span className="font-semibold">Category:</span> Accessories
            </p>
            {/* <p>
              <span className="font-semibold flex gap-3">Tag:{product?.tags?.map((tag: []) => <p className="text-black font-normal">{tag}</p>)}</span>
            </p> */}
          </div>

          {/* Display error message if there's an issue with the order */}
          {/* {errorMessage && (
            <div className="mt-4 p-4 bg-red-100 text-red-600 border border-red-200 rounded-md">
              {errorMessage}
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo