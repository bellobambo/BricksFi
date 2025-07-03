import React from 'react'

const HeroTop = () => {
  return (
    <div className='flex flex-row justify-evenly'>
        <div className="left h-[265px] w-[672px] mt-20 gap-[24px] flex-col">
            <div className='text-[48px]'>
                Real Estate Meets the blockchain
            </div>
            <p>Bricks lets you invest in tokenized properties across Africa through secure, on-chain ownership.  Fractional ownership of real estate assets through blockchain tokenization. Start investing in high-value properties from as low as $50. Buy fractions. Earn yield. Trade freely.</p>

            <div className='flex flex-row mt-20 gap-8 '>
                <button className='cursor-pointer bg-[#5D3FD3] text-white p-[16px] rounded-lg'>Explore Properties</button>
                <button>How does it works</button>
            </div>
        </div>
        <div className="right">
            <img src="/hero-right.png" alt="" />
        </div>
    </div>
  )
}

export default HeroTop