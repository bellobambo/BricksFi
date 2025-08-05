import React from "react";

const WaitList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join the WaitList
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be the first to know when BricksFi launches. Get early access to
            revolutionary real estate investment opportunities.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#5D3FD3] text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Join Waitlist
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              We'll never share your information with third parties.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why Join BricksFi?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Early Access</h3>
              <p className="text-gray-600">
                Get first access to premium real estate investment
                opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Lower Fees</h3>
              <p className="text-gray-600">
                Enjoy reduced platform fees as an early adopter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Exclusive Updates</h3>
              <p className="text-gray-600">
                Receive exclusive updates on new features and investment
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
