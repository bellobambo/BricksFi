import React from 'react'

const MidCard = ({title,info,}) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-[354px] h-[208px] flex flex-col'>
        <h2 className='font-semibold text-[18px] text-[#2E2E2E] mb-3'>{title}</h2>
        <p className='font-normal text-[14px] text-[#666666] leading-5 mb-4 flex-grow'>{info}</p>
        <button className='text-[#5D3FD3] font-medium text-[14px] hover:text-[#4A2FB8] transition-colors duration-200 self-start'>
            Read more →
        </button>
    </div>
  )
}

export default MidCard