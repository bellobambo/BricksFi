import React from "react";

const Navbar = () => {
  return (
    <nav className="font-montserrat flex flex-row items-center justify-evenly pt-4 pb-12">
      <div className="left flex flex-row gap-2">
        <img src="/Vector.png" className="h-8" alt="" />
        <span className="font-bold text-2xl leading-[100%] text-[#5D3FD3]">BrickFi</span>
      </div>
      <div className="middle flex flex-row gap-5">
        <p className="font-[16px] leading-6">Home </p>
        <p className="font-[16px] leading-6">Marketplace</p>
      </div>
      <div className="right flex flex-row gap-4">
        <div>
          <img src="/modetoggle.png" alt="" className="items-center flex justify-center"/>
        </div>
        <button className="bg-[#5D3FD3] px-[16px] py-[15px] rounded-2xl font-medium ">
          <span className="font-[16px] text-white leading-4.5 ">
            Connect wallet
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
