// src/components/CreateProperty.jsx
import React, { useState } from "react";

function CreateProperty({ actor, principal, onPropertyCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    bedrooms: "",
    bathrooms: "",
    squarefoot: "",
    investors: "",
    monthlyYield: "",
    icpToUsd: "",
    fundingPercent: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await actor.createProperty(
        formData.name,
        parseInt(formData.price),
        formData.image,
        parseInt(formData.bedrooms),
        parseInt(formData.bathrooms),
        parseInt(formData.squarefoot),
        parseInt(formData.investors),
        parseInt(formData.monthlyYield),
        parseFloat(formData.icpToUsd),
        parseFloat(formData.fundingPercent)
      );

      setSuccess(true);
      setFormData({
        name: "",
        price: "",
        image: "",
        bedrooms: "",
        bathrooms: "",
        squarefoot: "",
        investors: "",
        monthlyYield: "",
        icpToUsd: "",
        fundingPercent: "",
      });
      onPropertyCreated();
    } catch (err) {
      setError(err.message || "Failed to create property");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Property
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Property created successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Property Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price (ICP)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium text-gray-700"
            >
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="bathrooms"
              className="block text-sm font-medium text-gray-700"
            >
              Bathrooms
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="squarefoot"
              className="block text-sm font-medium text-gray-700"
            >
              Square Footage
            </label>
            <input
              type="number"
              id="squarefoot"
              name="squarefoot"
              value={formData.squarefoot}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="investors"
              className="block text-sm font-medium text-gray-700"
            >
              Investors
            </label>
            <input
              type="number"
              id="investors"
              name="investors"
              value={formData.investors}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="monthlyYield"
              className="block text-sm font-medium text-gray-700"
            >
              Monthly Yield (%)
            </label>
            <input
              type="number"
              id="monthlyYield"
              name="monthlyYield"
              value={formData.monthlyYield}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="icpToUsd"
              className="block text-sm font-medium text-gray-700"
            >
              ICP to USD Rate
            </label>
            <input
              type="number"
              step="0.01"
              id="icpToUsd"
              name="icpToUsd"
              value={formData.icpToUsd}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="fundingPercent"
              className="block text-sm font-medium text-gray-700"
            >
              Funding Percent (%)
            </label>
            <input
              type="number"
              step="0.01"
              id="fundingPercent"
              name="fundingPercent"
              value={formData.fundingPercent}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {isSubmitting ? "Creating..." : "Create Property"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProperty;
