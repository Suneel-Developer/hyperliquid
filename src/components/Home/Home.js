import React, { useState } from "react";
import "./home.css";
import EnableTrading from "../EnableTrading/EnableTrading";
import Slider from "../Slider/Slider";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleSubTabClick = (index) => {
    setActiveSubTab(index);
  };

  const [range, setRange] = useState(0);

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const handleRangeInputChange = (event) => {
    setRange(event.target.value);
  };
  const trackColor = `linear-gradient(to right, rgb(80, 210, 193) 0%, rgb(80, 210, 193) ${range}%, rgb(71, 71, 71) ${range}%, rgb(71, 71, 71) 100%)`;

  return (
    <div className="box-container">
      <div className="flex items-center justify-center gap-4 mx-3 w-[92%] mb-4">
        <button className="bg-dark hover:bg-dark_100 transition duration-300 w-full rounded py-1 px-2 h-[30px] text-xs">
          Cross
        </button>
        <button className="bg-dark hover:bg-dark_100 transition duration-300 w-full rounded py-1 px-2 h-[30px] text-xs">
          20x
        </button>
        <button className="bg-dark hover:bg-dark_100 transition duration-300 w-full rounded py-1 px-2 h-[30px] text-xs">
          One-Way
        </button>
      </div>
      {/* Tabs */}
      <div className="max-w-md mx-auto">
        {/* Tab Buttons */}
        <div className="flex border-b-2 items-center justify-around border-dark_400">
          <button
            className={`py-2 text-sm w-full ${
              activeTab === 0
                ? "border-b border-dark_300 text-dark_500 transition-all duration-200 opacity-100"
                : "text-dark_500 transition-all duration-200 opacity-60"
            }`}
            onClick={() => handleTabClick(0)}
          >
            Market
          </button>
          <button
            className={`py-2 text-sm w-full ${
              activeTab === 1
                ? "border-b border-dark_300 text-dark_500 transition-all duration-200 opacity-100"
                : "text-dark_500 transition-all duration-200 opacity-60"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Limit
          </button>
          {/* <button
            className={`py-2 text-sm w-full ${
              activeTab === 1
                ? "border-b border-dark_300 text-dark_500 transition-all duration-300 opacity-100"
                : "text-dark_600 transition-all duration-300 opacity-50"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Pro
          </button> */}
        </div>

        {/* Tab Content */}
        <div className="mt-4 px-2">
          {activeTab === 0 && (
            <div>
              {/* buttons */}
              <div className="px-1 flex items-center justify-between bg-dark_700 p-1 rounded border border-border_color_100 w-full">
                <button
                  className={` text-black w-1/2 rounded text-sm py-1.5 ${
                    activeSubTab === 0
                      ? "bg-dark_800 text-black "
                      : "text-dark_500"
                  }`}
                  onClick={() => handleSubTabClick(0)}
                >
                  Buy / Long
                </button>
                <button
                  className={` text-black w-1/2 rounded text-sm py-1.5 ${
                    activeSubTab === 1
                      ? " bg-dark_1000 text-white"
                      : "text-dark_500"
                  }`}
                  onClick={() => handleSubTabClick(1)}
                >
                  Sell / Short
                </button>
              </div>
              <div className="grid grid-cols-[1fr,auto] gap-1 items-center py-3 mx-2">
                <h3 className="text-dark_200 font-normal text-sm">
                  Available to Trade
                </h3>
                <h3 className="text-white font-normal text-sm text-right">
                  0.00
                </h3>
                <h3 className="text-dark_200 font-normal text-sm">
                  Current Position
                </h3>
                <h3 className="text-white font-normal text-sm text-right">
                  0.0000 ETH
                </h3>
              </div>
              {/* Select Option */}
              <div className="border border-border_color flex items-center w-full hover:border-dark_900 transition duration-300 justify-between rounded py-1.5 px-2.5">
                <h3 className="text-dark_600 text-sm">Size</h3>
                <div className="text-sm">
                  <select className="bg-transparent outline-none border-none">
                    <option className="bg-dark_1400 text-white border-none">
                      ETH
                    </option>
                    <option className="bg-dark_1400 border-none text-white">
                      USD
                    </option>
                  </select>
                </div>
              </div>
              {/* Slider */}
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
              {/* Checkbox */}
              <div className="text-sm flex flex-col gap-2 my-2">
                <div className="flex items-center gap-2">
                  <div class="checkbox-wrapper-48">
                    <label>
                      <input type="checkbox" name="cb" />
                    </label>
                  </div>
                  <h4 className="text-sm" data-tooltip-id="my-tooltip-2">
                    Reduce Only
                  </h4>
                  <ReactTooltip
                    id="my-tooltip-2"
                    place="top"
                    content="This order will not open a new position no matter how large the order size is, It will compare to the existing position at the time of execution"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div class="checkbox-wrapper-48">
                    <label>
                      <input type="checkbox" name="cb" />
                    </label>
                  </div>
                  <h4 className="text-sm" data-tooltip-id="my-tooltip-1">
                    Take Profit / Stop Loss
                  </h4>
                  <ReactTooltip
                    id="my-tooltip-1"
                    place="top"
                    content="Place simple market TP/SL orders. For advanced features such as limit prices or partial TP/SL, set the TP/SL on an open position."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {/* TP Price */}
                <div className="flex gap-3 w-full">
                  <div className="flex items-center justify-between bg-transparent border rounded border-border_color hover:border-border_color_300 transition duration-300 w-[60%] outline-none">
                    <h3 className="text-sm ml-2 text-border_color_300">
                      TP Price
                    </h3>
                    <input
                      type="number"
                      className="bg-transparent w-[50%] outline-none p-1 pr-2 text-right"
                    />
                  </div>
                  <div className="w-[40%] flex border rounded border-border_color hover:border-border_color_300 transition duration-300">
                    <p className="pl-2 mt-[6px] text-dark_200 text-sm">Gain</p>
                    <input
                      type="number"
                      className="bg-transparent w-[80%] outline-none pl-3 pr-2 text-sm"
                    />
                    <div className="select-wrapper w-full mt-1 flex items-center ">
                      <select className="bg-transparent mb-1 border-none outline-none text-sm w-full rounded select-arrow">
                        <option value="1" className="bg-dark_1400">
                          %
                        </option>
                        <option value="2" className="bg-dark_1400">
                          $
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* SL Price */}
                <div className="flex gap-3 w-full">
                  <div className="flex items-center justify-between bg-transparent border rounded border-border_color hover:border-border_color_300 transition duration-300 w-[60%] outline-none">
                    <h3 className="text-sm ml-2 text-border_color_300">
                      SL Price
                    </h3>
                    <input
                      type="number"
                      className="bg-transparent w-[50%] outline-none p-1 pr-2 text-right"
                    />
                  </div>
                  <div className="w-[40%] flex border rounded border-border_color hover:border-border_color_300 transition duration-300">
                    <p className="pl-2 mt-[5px] text-dark_200 text-sm">Loss</p>
                    <input
                      type="number"
                      className="bg-transparent w-[80%] outline-none pl-3 pr-2 text-sm"
                    />
                    <div className="select-wrapper w-full mt-1 flex items-center ">
                      <select className="bg-transparent mb-1 border-none outline-none w-full text-sm rounded select-arrow">
                        <option value="1" className="bg-dark_1400">
                          %
                        </option>
                        <option value="2" className="bg-dark_1400">
                          $
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              {/* buttons */}
              <div className="px-1 flex items-center justify-between bg-dark_700 p-1 rounded border border-border_color_100 w-full">
                <button
                  className={` text-black w-1/2 rounded text-sm py-1.5 ${
                    activeSubTab === 0
                      ? "bg-dark_800 text-black"
                      : "text-dark_500"
                  }`}
                  onClick={() => handleSubTabClick(0)}
                >
                  Buy / Long
                </button>
                <button
                  className={` text-black w-1/2 rounded text-sm py-1.5 ${
                    activeSubTab === 1
                      ? " bg-dark_1000 text-white"
                      : "text-dark_500"
                  }`}
                  onClick={() => handleSubTabClick(1)}
                >
                  Sell / Short
                </button>
              </div>
              <div className="grid grid-cols-[1fr,auto] gap-1 items-center py-3 mx-2">
                <h3 className="text-dark_200 font-normal text-sm">
                  Available to Trade
                </h3>
                <h3 className="text-white font-normal text-sm text-right">
                  0.00
                </h3>
                <h3 className="text-dark_200 font-normal text-sm">
                  Current Position
                </h3>
                <h3 className="text-white font-normal text-sm text-right">
                  0.0000 ETH
                </h3>
              </div>
              {/* Select Option */}
              <div className="border border-border_color flex mb-2 items-center w-full hover:border-dark_900 transition duration-300 justify-between rounded py-1.5 px-2.5">
                <h3 className="text-dark_600 text-sm">Price (USD)</h3>
                <p className="text-sm">
                  3765.3{" "}
                  <button className="text-dark_1100 hover:text-dark_1200 ml-1">
                    Mid
                  </button>{" "}
                </p>
              </div>
              <div className="border border-border_color flex items-center w-full hover:border-dark_900 transition duration-300 justify-between rounded py-1.5 px-2.5">
                <h3 className="text-dark_600 text-sm">Size</h3>
                <div className="text-sm">
                  <select className="bg-transparent outline-none border-none">
                    <option className="bg-dark_1400 text-white border-none">
                      ETH
                    </option>
                    <option className="bg-dark_1400 border-none text-white">
                      USD
                    </option>
                  </select>
                </div>
              </div>
              {/* Slider */}
              <Slider />
              {/* Checkbox */}
              <div className="text-sm flex flex-col gap-2 my-2 w-full">
                <div className="flex items-center gap-2 justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div class="checkbox-wrapper-48">
                      <label>
                        <input type="checkbox" name="cb" />
                      </label>
                    </div>
                    <h4 className="text-sm" data-tooltip-id="my-tooltip-3">
                      Reduce Only
                    </h4>
                    <ReactTooltip
                      id="my-tooltip-3"
                      place="top"
                      content="This order will not open a new position no matter how large the order size is, It will compare to the existing position at the time of execution"
                    />
                  </div>
                  <div className="flex items-center gap-2 mr-1">
                    <h2 className="text-dark_600 text-sm mt-[1px]">TIF</h2>
                    <div className="text-sm">
                      <select className="bg-transparent w-[55px] outline-none border-none text-sm">
                        <option className="bg-dark_1400 text-white border-none">
                          GTC
                        </option>
                        <option className="bg-dark_1400 border-none text-white">
                          IOC
                        </option>
                        <option className="bg-dark_1400 border-none text-white">
                          ALO
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div class="checkbox-wrapper-48">
                    <label>
                      <input type="checkbox" name="cb" />
                    </label>
                  </div>
                  <h4 className="text-sm" data-tooltip-id="my-tooltip-4">
                    Take Profit / Stop Loss
                  </h4>
                  <ReactTooltip
                    id="my-tooltip-4"
                    place="top"
                    content="Place simple market TP/SL orders. For advanced features such as limit prices or partial TP/SL, set the TP/SL on an open position."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {/* TP Price */}
                <div className="flex gap-3 w-full">
                  <div className="flex items-center justify-between bg-transparent border rounded border-border_color hover:border-border_color_300 transition duration-300 w-[60%] outline-none">
                    <h3 className="text-sm ml-2 text-border_color_300">
                      TP Price
                    </h3>
                    <input
                      type="number"
                      className="bg-transparent w-[50%] outline-none p-1 pr-2 text-right"
                    />
                  </div>
                  <div className="w-[40%] flex border rounded border-border_color hover:border-border_color_300 transition duration-300">
                    <p className="pl-2 mt-[6px] text-dark_200 text-sm">Gain</p>
                    <input
                      type="number"
                      className="bg-transparent w-[80%] outline-none pl-3 pr-2 text-sm"
                    />
                    <div className="select-wrapper w-full mt-1 flex items-center ">
                      <select className="bg-transparent mb-1 border-none outline-none text-sm w-full rounded select-arrow">
                        <option value="1" className="bg-dark_1400">
                          %
                        </option>
                        <option value="2" className="bg-dark_1400">
                          $
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* SL Price */}
                <div className="flex gap-3 w-full">
                  <div className="flex items-center justify-between bg-transparent border rounded border-border_color hover:border-border_color_300 transition duration-300 w-[60%] outline-none">
                    <h3 className="text-sm ml-2 text-border_color_300">
                      SL Price
                    </h3>
                    <input
                      type="number"
                      className="bg-transparent w-[50%] outline-none p-1 pr-2 text-right"
                    />
                  </div>
                  <div className="w-[40%] flex border rounded border-border_color hover:border-border_color_300 transition duration-300">
                    <p className="pl-2 mt-[5px] text-dark_200 text-sm">Loss</p>
                    <input
                      type="number"
                      className="bg-transparent w-[80%] outline-none pl-3 pr-2 text-sm"
                    />
                    <div className="select-wrapper w-full mt-1 flex items-center ">
                      <select className="bg-transparent mb-1 border-none outline-none w-full text-sm rounded select-arrow">
                        <option value="1" className="bg-dark_1400">
                          %
                        </option>
                        <option value="2" className="bg-dark_1400">
                          $
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Enable Trading */}
      <div className="border border-t border-border_color w-full mt-16 my-3"></div>
      <div className="grid grid-cols-[1fr,auto] gap-2 items-center mx-2">
        <h3
          className="text-dark_200 underline font-normal text-sm "
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Hello world!"
        >
          Liquidation Price
        </h3>
        <h3 className="text-white font-normal text-sm text-right">N/A</h3>
        <h3 className="text-dark_200 font-normal text-sm">Order Value</h3>
        <h3 className="text-white font-normal text-sm text-right">N/A</h3>
        <h3 className="text-dark_200 font-normal text-sm">Margin Required</h3>
        <h3 className="text-white font-normal text-sm text-right">N/A</h3>
        <h3 className="text-dark_200 underline font-normal text-sm">
          Slippage
        </h3>
        <h3 className="text-dark_300 font-normal text-sm">Est: 0% / Max: 8%</h3>
        <h3 className="text-dark_200 underline font-normal text-sm">Fees</h3>
        <h3 className="text-white font-normal text-sm">0.025% / -0.002%</h3>
      </div>
      {/* Enable Treding Button */}
      <EnableTrading />
      {/* buttons withdraw and deposit */}
      <div className="flex flex-col gap-3">
        <div className="border border-t border-border_color w-full"></div>
        <h2 className="text-white text-sm font-normal mx-2">Account</h2>
        <Deposit />
        <Withdraw />
      </div>
      {/* Details */}
      <div className="border border-t border-border_color my-4 mx-2"></div>
      <div className="grid grid-cols-[1fr,auto] gap-2 items-center mx-2">
        <h3 className="text-dark_200 underline font-normal text-sm">Balance</h3>
        <h3 className="text-white font-normal text-sm">$0.00</h3>
        <h3 className="text-dark_200 font-normal text-sm">Unrealized PNL</h3>
        <h3 className="text-white font-normal text-sm">$0.00</h3>
        <h3 className="text-dark_200 underline font-normal text-sm">
          Account Equity
        </h3>
        <h3 className="text-white font-normal text-sm">$0.00</h3>
        <h3 className="text-dark_200 underline font-normal text-sm">
          Cross Margin Ratio
        </h3>
        <h3 className="text-dark_300 font-normal text-sm">$0.00</h3>
        <h3 className="text-dark_200 underline font-normal text-sm">
          Maintenance Margin
        </h3>
        <h3 className="text-white font-normal text-sm">$0.00</h3>
        <h3 className="text-dark_200 underline font-normal text-sm">
          Cross Account Leverage
        </h3>
        <h3 className="text-white font-normal text-sm">$0.00</h3>
      </div>
    </div>
  );
};

export default Home;
