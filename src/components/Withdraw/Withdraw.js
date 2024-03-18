import React, {useState} from 'react'
import Arbitrum from "../../assets/arbitrum.png";


const Withdraw = () => {
        const [showPopup, setShowPopup] = useState(false);

        // Function to toggle the visibility of the popup
        const togglePopup = () => {
          setShowPopup(!showPopup);
        };
        const closePopup = (e) => {
          if (e.target.classList.contains("popup-container")) {
            setShowPopup(false);
          }
        };
  return (
    <div>
        <button
          className="btn mx-2 outline-none h-[33px] px-2 rounded text-sm text-dark_300 border border-dark_300 w-[96%]"
          onClick={togglePopup}
        >
          Withdraw
        </button>
        {/* Withdraw popup */}
        {showPopup && (
          <div className="popup-container " onClick={closePopup}>
            <div className="popup-content ">
              <div className="w-full flex flex-col ">
                <button
                  onClick={togglePopup}
                  className="text-white text-right w-full px-6 py-4"
                >
                  X
                </button>
                <div className="border border-t border-border_color_200 w-full"></div>
                <div className="p-3 text-center flex flex-col gap-3">
                  <img src={Arbitrum} alt="Arbitrum" />
                  <h2>Withdraw from Arbitrum</h2>
                  <p className="text-sm font-normal sm:px-5 px-2 text-dark_200">
                    USDC will be sent over the arbitrum network to the provided
                    address.
                    <br /> A $1 fee will be deducted from the USDC withdraw
                  </p>
                  <p className="text-sm font-normal text-dark_200">
                    Withdrawls should arrive within 5 minutes
                  </p>
                  <div className="mt-6 w-[94%] border -mb-2 border-border_color hover:border-dark_900 transition duration-300 rounded">
                    <input
                      type="number"
                      className="hide-arrows w-full rounded p-2 bg-transparent outline-none placeholder:text-dark_900"
                      placeholder="Amount"
                    />
                    <button className="mr-3 text-dark_300 hover:text-dark_1200 text-sm">MAX</button>
                  </div>
                  <div className="flex items-center justify-between w-[94%]">
                    <p className="text-sm flex items-start text-left w-full text-dark_900">
                      Available to withdraw
                    </p>
                    <p className="text-sm text-dark_900 font-semibold">0.00</p>
                  </div>
                </div>
                <div className="border border-t border-border_color_200 my-3 w-full"></div>
                <button className="mb-4 bg-dark_1300 h-[33px] rounded w-[90%] text-black font-normal text-sm">
                  Withdraw from L1
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Withdraw