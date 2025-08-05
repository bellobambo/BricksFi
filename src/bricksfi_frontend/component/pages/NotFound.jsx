import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#5D3FD3] mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-[#5D3FD3] text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Go Back Home
          </Link>
          <div className="text-center">
            <Link
              to="/marketplace"
              className="text-[#5D3FD3] hover:underline mx-4"
            >
              Browse Marketplace
            </Link>
            <Link
              to="/waitlist"
              className="text-[#5D3FD3] hover:underline mx-4"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
