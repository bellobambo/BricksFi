import React from "react";
import { data } from "./data";
import MidCard from "./MidCard";
import HouseCard from "./HouseCard";

const HeroMid = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="font-semibold text-[40px] leading-12 text-[#2E2E2E] mb-4">
          WHY WEB3 WITH BRICKSFI?
        </h1>
        <span className="font-normal text-[18px] leading-6 text-[#666666]">
          Unique Value Propositions for the Blockchain Generation
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {data.slice(0, 3).map((item) => (
            <MidCard key={item.id} title={item.title} info={item.info} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {data.slice(3, 5).map((item) => (
              <MidCard key={item.id} title={item.title} info={item.info} />
            ))}
          </div>
        </div>

        <h1 className="font-medium text-[32px] leading-10 mt-16">
          FEATURED PROPERTIES
        </h1>
        <div className="flex flex-row gap-4">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>
      </div>
    </div>
  );
};

export default HeroMid;
