import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Emmett Torphy",
    rating: 5,
    comment:
      "Potter Ipsum Wand Elf Parchment Wingardium. Patronum Beaters Stand Butter Wheels Squashy Owl Parchment. Map No Time-Turner Start-Of-Term Frisbees Aurors Knitted Easy Lavender Errol.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Emmett Torphy",
    rating: 5,
    comment:
      "Potter Ipsum Wand Elf Parchment Wingardium. Patronum Beaters Stand Butter Wheels Squashy Owl Parchment. Map No Time-Turner Start-Of-Term Frisbees Aurors Knitted Easy Lavender Errol.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Emmett Torphy",
    rating: 5,
    comment:
      "Potter Ipsum Wand Elf Parchment Wingardium. Patronum Beaters Stand Butter Wheels Squashy Owl Parchment. Map No Time-Turner Start-Of-Term Frisbees Aurors Knitted Easy Lavender Errol.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-10">
      {/* Tabs Section */}
      <div className="flex gap-8 border-b">
        <button
          className={`pb-2 text-lg font-medium ${
            activeTab === "description"
              ? "border-b-2 border-black text-black"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 text-lg font-medium ${
            activeTab === "review"
              ? "border-b-2 border-black text-black"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("review")}
        >
          Review
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-600 space-y-4">
        {activeTab === "description" ? (
          <div>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. We’ve created a full-stack structure for
              our working workflow processes, were from the funny the century
              initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold">Review (24)</h3>
            <div className="mt-4 space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="flex gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <div className="flex text-yellow-500">★★★★★</div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 pt-10">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg disabled:opacity-50"
                // disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: 3 }, (_, index) => (
                <button
                  key={index + 1}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg font-medium ${
                    currentPage === index + 1
                      ? "text-black font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-black text-white"
                // disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSwitch;
