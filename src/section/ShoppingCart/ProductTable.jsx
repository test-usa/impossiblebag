import React, { useState } from "react";
import SmallBag from "/SmallBag.png";
import { Trash2 } from "lucide-react";

const ProductTable = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: { SmallBag },
      name: "Product Name",
      color: "Red",
      price: 120.0,
      quantity: 1,
      code: "r245626",
    },
    {
      id: 2,
      image: { SmallBag },
      name: "Product Name",
      color: "Red",
      price: 150.0,
      quantity: 1,
      code: "r245627",
    },
    {
      id: 3,
      image: { SmallBag },
      name: "Product Name",
      color: "Red",
      price: 180.0,
      quantity: 1,
      code: "r245628",
    },
    {
      id: 4,
      image: { SmallBag },
      name: "Product Name",
      color: "Red",
      price: 120.0,
      quantity: 1,
      code: "r245629",
    },
    // Add more products here
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          let newQuantity =
            action === "increase" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity }; //ensure quantity is at least 1
        }
        return item;
      })
    );
  };
  return (
    <div className="flex justify-center py-20">
      <div className="lg:w-[1472px] bg-[#FFFFFF] rounded-[24px] shadow-md bg-custom-gradient p-6 ">
        <div className="overflow-x-auto p-5 bg-white rounded-[24px]">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left rounded-24px">
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Product Name</th>
                <th className="py-2 px-4">Color</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product, index) => (
                <React.Fragment key={product.id}>
                  <tr>
                    <td className="py-2 px-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.color}</td>
                    <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                    <td className="py-2 px-4 flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(product.id, "decrease")
                        }
                        className="p-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(product.id, "increase")
                        }
                        className="p-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2 px-4">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-[#5A5C5F] pl-4"
                      >
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="7">
                      <hr className="border-gray-300" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
