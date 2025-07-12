import React from "react";
import MidCard from "./MidCard";
import HouseCard from "./HouseCard";

const MidBottom = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Property Cards and Browse Properties */}
        <div className="flex gap-8 mb-16 items-start">
          {/* Property Card 1 */}
          <HouseCard />
          {/* Property Card 2 */}
          <HouseCard />

      </div>
      </div>
    </div>
  );
};

export default MidBottom;
