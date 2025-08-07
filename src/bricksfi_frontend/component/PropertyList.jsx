// src/components/PropertyList.jsx
import React from "react";

function PropertyList({ properties, loading, currentUser }) {
  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-8 text-center">
        <p className="text-lg text-gray-600">Loading properties...</p>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-8 text-center">
        <p className="text-lg text-gray-600">No properties found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Available Properties</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              {property.creator.toString() === currentUser?.toString() && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Your Property
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {property.name}
              </h3>

              <div className="flex space-x-4 text-sm text-gray-600 mb-3">
                <span>{property.bedrooms} beds</span>
                <span>{property.bathrooms} baths</span>
                <span>{property.squarefoot} sq ft</span>
              </div>

              <div className="mb-4">
                <p className="text-lg font-bold text-blue-600">
                  {property.price} ICP
                </p>
                <p className="text-sm text-gray-500">
                  (${(property.price * property.icpToUsd).toFixed(2)})
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2 rounded">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Investors</p>
                  <p className="font-semibold text-gray-700">
                    {property.investors}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Yield</p>
                  <p className="font-semibold text-gray-700">
                    {property.monthlyYield}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Funded</p>
                  <p className="font-semibold text-gray-700">
                    {property.fundingPercent}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
