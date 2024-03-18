import React, { useState } from "react";

function EnableTrading() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("popup-container")) {
      setShowPopup(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleAcceptClick = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="mx-2 w-[95%] outline-none h-[33px] px-2 rounded text-sm text-black my-4 bg-dark_300"
        onClick={togglePopup}
      >
        Enable Trading
      </button>
       {showPopup && (
        <div className="popup-container " onClick={closePopup}>
          <div className="popup-content1 ">
            <div className="w-full flex items-start flex-col">
              <h2 className="text-lg px-6 py-5 text-left w-full">
                Terms of Use
              </h2>
              <div className="px-6 py-3 pb-6 flex flex-col w-full justify-start text-left">
                <div className="flex items-center gap-2">
                  <div className="checkbox-wrapper-48">
                    <label>
                      <input type="checkbox"/>
                    </label>
                  </div>
                  <h4 className="text-sm">
                    I acknowledge that I am trading with meal money
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="checkbox-wrapper-48">
                    <label>
                      <input type="checkbox"/>
                    </label>
                  </div>
                  <h4 className="text-sm">
                    I accept the{" "}
                    <span className="text-dark_300">Terms of Use.</span>
                  </h4>
                </div>
              </div>
              <div className="border border-t border-border_color_200 my-3 w-full"></div>
              <div className="flex items-center w-[91%] gap-2 m-auto">
                <button
                  onClick={handleAcceptClick}
                  className="mb-4  h-[33px] w-full rounded text-black bg-dark_300 font-normal text-sm"
                >
                  Accept
                </button>
                {/* On Accept Popup */}
                {isOpen && (
                  <div className="popup-container">
                    <div className="popup-content2">
                     <div className="flex justify-between items-center px-6 py-4">
                     <div></div>
                      <div className="flex items-center gap-2">
                        <div className="bg-dark_300 h-[4px] w-[30px] rounded "></div>
                        <div className="bg-dark_900 h-[4px] w-[30px] rounded "></div>
                        <div className="bg-dark_900 h-[4px] w-[30px] rounded "></div>
                      </div>
                      <button
                        className="text-white text-right"
                        onClick={handleClosePopup}
                      >
                        X
                      </button>
                     </div>
                      <div className="border border-t border-border_color_200"></div>
                      <h2 className="text-lg font-semibold text-center w-full text-white pt-10 pb-2">
                        Establish Connection
                      </h2>
                      <p className="text-sm px-16 text-dark_900 text-center">
                        This signature is gas-free to send. It opens a
                        decentralized channel for gas-free and instantaneous
                        trading.
                      </p>
                      <div className="flex items-center justify-center gap-2 pb-8 pt-5">
                        <div class="checkbox-wrapper-48">
                          <label>
                            <input type="checkbox" name="cb" />
                          </label>
                        </div>
                        <h4 className="text-sm">Stay Connected</h4>
                      </div>
                      <div className="border border-t border-border_color_200 my-3 w-full"></div>
                      <button className="mb-4 bg-dark_300 font-medium h-[33px] rounded w-[93%] mx-4 text-black text-sm">
                        Establish Connection
                      </button>
                    </div>
                  </div>
                )}
                <button
                  className="mb-4 border text-dark_300 border-dark_300 h-[33px] w-full rounded font-normal text-sm"
                  onClick={togglePopup}
                >
                  Reject
                </button>
              </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnableTrading;
