import React, { useState } from "react";

const Slider = () => {
  const [range, setRange] = useState(0);

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const handleRangeInputChange = (event) => {
    setRange(event.target.value);
  };

  // Calculate the background color based on the range value
  const trackColor = `linear-gradient(to right, rgb(80, 210, 193) 0%, rgb(80, 210, 193) ${range}%, rgb(71, 71, 71) ${range}%, rgb(71, 71, 71) 100%)`;

  return (
    <div className="mx-auto items-center justify-center flex">
      <div className="w-full mx-auto  items-center justify-center flex gap-2">
        <div className=" w-full mx-auto">
          <div className="relative">
            <div className="w-full flex gap-1 items-center py-6">
              <input
                type="range"
                min="0"
                max="100"
                className="w-full z-20"
                value={range}
                onChange={handleRangeChange}
                style={{ background: trackColor }}
              />
            </div>
            <div className="absolute top-6 items-center transform -translate-y-1/2 h-7 z-0 left-0 flex text-[#8f9f9cf7] justify-between text-[7px] w-full">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </div>
        </div>
        <div className="rounded w-[80px] flex items-center px-2 py-1 border text-white border-dark_100 hover:border-border_color_300 transition duration-300">
          <input
            type="number"
            className="text-left rounded bg-transparent outline-none w-[40px]"
            id="rangeValue"
            value={range}
            onChange={handleRangeInputChange}
          />
          <span className="text-sm">%</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
