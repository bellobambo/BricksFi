import React from "react";

const Works = () => {
  return (
    <div className="py-16 px-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="font-semibold text-[40px] leading-12 text-[#2E2E2E] mb-4">
          HOW IT WORKS
        </h1>
        <p className="font-normal text-[18px] leading-6 text-[#666666] max-w-4xl mx-auto">
          It's time for a change.. BrickFi helps anyone lay a path to financial
          freedom with fractional real estate investing
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Process Steps */}
          <div className="space-y-8">
            {/* BricksFi Logo/Brand */}
            <div className="mb-12">
              <h2 className="text-[32px] font-bold text-[#2E2E2E]">BricksFi</h2>
              {/* Dotted line arrow pointing right */}
              <div className="flex items-center mt-4">
                <div className="border-t-2 border-dashed border-gray-400 flex-grow"></div>
                <div className="ml-2 text-gray-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Connect & Verify Step */}
            <div className="bg-[#5D3FD3] text-white p-6 rounded-lg transform -rotate-1 shadow-lg">
              <h3 className="font-semibold text-[20px] mb-3">
                Connect & Verify
              </h3>
              <p className="font-normal text-[14px] leading-5">
                Sign up and verify your identity through our decentralized
                identity gateway.
              </p>
            </div>

            {/* Additional steps can be added here */}
            <div className="space-y-6 ml-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5D3FD3] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] text-[#2E2E2E] mb-2">
                    Choose Property
                  </h4>
                  <p className="text-[14px] text-[#666666]">
                    Browse and select from our curated real estate portfolio
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5D3FD3] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] text-[#2E2E2E] mb-2">
                    Invest & Own
                  </h4>
                  <p className="text-[14px] text-[#666666]">
                    Purchase fractional shares and receive your property tokens
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#5D3FD3] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] text-[#2E2E2E] mb-2">
                    Earn & Trade
                  </h4>
                  <p className="text-[14px] text-[#666666]">
                    Receive rental income and trade your tokens on our
                    marketplace
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Wallet Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Wallet Image */}
              <img
                src="./wallets.png"
                alt="Digital Wallet"
                className="w-80 h-auto"
              />

              {/* Floating Crypto Icons */}
              <div className="absolute -top-4 -right-4">
                {/* Bitcoin */}
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">₿</span>
                </div>
              </div>

              <div className="absolute -top-8 right-8">
                {/* Ethereum */}
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">Ξ</span>
                </div>
              </div>

              <div className="absolute -left-4 top-4">
                {/* Generic Crypto */}
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">◊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
