import React, { useState } from "react";

const Deposit = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const closePopup = (e) => {
    if (e.target.classList.contains("popup-container")) {
      setShowPopup(false);
    }
  };
  return (
    <>
      {/* Deposit popup */}
      <button
        className="btn mx-2 outline-none h-[33px] px-2 rounded text-sm text-dark_300 border border-dark_300"
        onClick={togglePopup}
      >
        Deposit
      </button>
      {showPopup && (
        <div className="popup-container" onClick={closePopup}>
          <div className="popup-content">
            <div className="w-full flex flex-col ">
              <div className="w-full flex justify-between items-center px-6 py-4">
                <div></div>
                <div className="flex items-center gap-2">
                  <div className="bg-dark_300 h-[4px] w-[30px] rounded "></div>
                  <div className="bg-dark_300 h-[4px] w-[30px] rounded "></div>
                  <div className="bg-dark_900 h-[4px] w-[30px] rounded "></div>
                </div>
                <button className="text-white text-right" onClick={togglePopup}>
                  X
                </button>
              </div>
              <div className="border border-t border-border_color_200 w-full"></div>
              <p className="text-sm flex p-3 pb-1 ml-2 mt-3 items-start text-left w-full text-dark_900">
                You send
              </p>
              <div className="w-[94%] mx-2 select-wrapper">
                <select className="w-full bg-transparent border border-border_color transition duration-300 rounded p-2 outline-none hover:border-dark_900 select-arrow">
                  <option className="bg-black">USDC</option>
                  <option className="bg-black">USDC</option>
                  <option className="bg-black">USDC</option>
                </select>
              </div>

              <div className="mt-2 w-[94%] border -mb-2 border-border_color hover:border-dark_900 transition duration-300 rounded">
                <input
                  type="number"
                  className="hide-arrows w-full rounded p-2 bg-transparent outline-none placeholder:text-dark_900"
                  placeholder="Amount"
                />
                <button className="mr-3 text-dark_300 hover:text-dark_1200 text-sm">MAX</button>
              </div>
              <div className="flex items-center my-3 justify-between w-[94%]">
                <p className="text-sm flex items-start text-left w-full text-dark_900">
                  Available to deposit
                </p>
                <p className="text-sm text-dark_900 font-semibold">0.00</p>
              </div>
              <div className="border border-t border-border_color_200 my-3 w-full"></div>
              <button className="mb-4 bg-dark_1300 h-[33px] rounded w-[90%] text-black font-normal text-sm">
                Deposit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposit;
