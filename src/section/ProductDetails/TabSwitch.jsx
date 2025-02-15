import React, { useState } from "react";

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
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
        <p>
          We’ve created a full-stack structure for our working workflow
          processes, were from the funny the century initial all the made, have
          spare to negatives. But the structure was from the funny the century
          rather, initial all the made, have spare to negatives.
        </p>
        <p>
          We’ve created a full-stack structure for our working workflow
          processes, were from the funny the century initial all the made, have
          spare to negatives. We’ve created a full-stack structure for our
          working workflow processes, were from the funny the century initial
          all the made, have spare to negatives.
        </p>
        <p>
          We’ve created a full-stack structure for our working workflow
          processes, were from the funny the century initial all the made, have
          spare to negatives.
        </p>
      </div>
    </div>
  );
};

export default TabSwitch;
