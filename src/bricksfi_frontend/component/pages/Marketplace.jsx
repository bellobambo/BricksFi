import React from "react";
import HouseCard from "../HouseCard";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Real Estate Marketplace
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and invest in tokenized real estate properties. Build your
            portfolio with fractional ownership opportunities.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Types</option>
                <option>Single Family</option>
                <option>Multi Family</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Locations</option>
                <option>Florida</option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Any Price</option>
                <option>$0 - $100K</option>
                <option>$100K - $500K</option>
                <option>$500K+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-[#5D3FD3] text-white py-2 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors">
                Filter Properties
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-md font-medium hover:bg-gray-50 transition-colors">
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
