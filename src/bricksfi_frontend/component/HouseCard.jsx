

const HouseCard = () => {
  return (
    <div className="flex flex-col gap-2">
        <img src="/house.png" alt="house" className="object-contain"/>

        <span className="font-semibold text-[20px]">The Stables</span>
        <p><span className="text-purple-400 mr-3">$123,999</span> <span className="mr-2 text-gray-200">|</span><span className="font-medium text-[14px] text-gray-400">$50 per token</span></p>
        <p className="text-[16px]">Single Family Habour</p>
        <p><span className="text-gray-400 mr-3">Highland Lake, Florida</span> <span className="mr-2 text-gray-200">|</span><span className="font-medium text-[14px] text-gray-400">123 Investors</span></p>
            <p><span className="text-purple-400 mr-3">New</span> <span className="mr-2 text-purple-200">|</span><span className="font-medium text-[14px] text-purple-400">76% Funded </span></p>

    </div>
  )
}

export default HouseCard