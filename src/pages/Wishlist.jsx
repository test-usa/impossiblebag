import React from "react";
import CommonWrapper from "../components/CommonWrapper";

const Wishlist = () => {
  // Example wishlist data
  const wishlistItems = [
    { id: 1, name: "Item 1", price: "$100", image: "image1.jpg", spanRows: 2 },
    { id: 2, name: "Item 2", price: "$150", image: "image2.jpg", spanRows: 1 },
    { id: 3, name: "Item 3", price: "$200", image: "image3.jpg", spanRows: 1 },
    { id: 4, name: "Item 4", price: "$120", image: "image4.jpg", spanRows: 1 },
    { id: 5, name: "Item 5", price: "$180", image: "image5.jpg", spanRows: 1 },
    { id: 6, name: "Item 6", price: "$220", image: "image6.jpg", spanRows: 2 },
  ];

  return (
    <CommonWrapper>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6"
        style={{
          background:
            "linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)",
        }}
      >
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ${
              item.spanRows === 2 ? "row-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
    </CommonWrapper>
  );
};

export default Wishlist;
