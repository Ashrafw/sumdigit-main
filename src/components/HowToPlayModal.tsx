import React from "react";
import { FaTimes, FaHeart } from "react-icons/fa";
import { useStateStore } from "../zustand";
import video from "../assets/howtoplay20.mp4";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { usePersistStore } from "../zustandPersist";
import { FaChevronRight } from "react-icons/fa";
const HowToPlayModal = () => {
  const { setIsHowToPlayModal, isHowToPlayModal } = useStateStore();
  const { isDarkMode } = usePersistStore();

  return (
    <div
      className={`absolute bg-black   bg-opacity-5 w-screen h-screen z-40 top-0 left-0 flex justify-center items-center`}
      onClick={() => setIsHowToPlayModal(!isHowToPlayModal)}
    >
      <div
        className={` max-w-[780px] shadow-xl relative w-[95%] ${
          isDarkMode ? "bg-[#13212a] text-slate-300" : " bg-slate-200 text-black"
        } z-40 p-6 rounded-lg max-sm:overflow-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="">
          <div className="modal-container flex flex-col gap-4">
            <h2 className=" text-3xl font-bold max-sm:text-lg ">How to play SumDigit</h2>

            <div className="  max-sm:text-xs">
              <div className=" mb-2 flex items-start ">
                <div className=" mr-2">•</div>
                <p>
                  The goal is to use the selected six numbers and the basic operations to
                  reach the target number exactly. You can use each number only once, and
                  you don't have to use all the numbers.
                </p>
              </div>
              <div className=" mb-2 flex items-start">
                <div className=" mr-2">•</div>
                <p>
                  You can use addition, subtraction, multiplication, and division.
                  Intermediate results do not need to be whole numbers, but the final
                  result must be the target number.
                </p>
              </div>
              <div className=" mb-2 flex items-start">
                <div className=" mr-2">•</div>
                <p>
                  A <strong>new</strong> target Number and set of six numbers is released
                  daily at midnight.
                </p>
              </div>
              <div className=" mb-2 flex">
                <div className=" mr-2">•</div>
                <p>You will have three lives/attempts to reach the target number.</p>
              </div>
              {/* 
              <p className=" mb-2 flex">
                <VscDebugBreakpointData className=" text-2xl pt-0 mt-0 mr-2" />
                Using the six chosen numbers and basic operations, try to reach the target
                number.
              </p> */}
              {/* <div className=" flex">
                <FaHeart />
                <FaHeart />
                <FaHeart />
              </div> */}
            </div>

            <div className=" max-sm:text-xs">
              <h1 className=" font-bold text-xl  max-sm:text-xs">Example</h1>
              <p className="max-sm:hidden">
                Suppose the target number is 346, and your selected numbers are 25, 50,
                75, 3, 6, and 2. You could attempt to reach the target as follows:
              </p>
              <iframe
                allow="autoplay"
                className=" mt-4 w-[100%] min-h-[360px] rounded-lg shadow-xl m-auto max-sm:min-h-[160px]"
                src={video}
              />
            </div>
          </div>
          <button
            className={`absolute top-0 right-0 m-2 ${
              isDarkMode
                ? "bg-black bg-opacity-30 text-slate-200"
                : " bg-slate-300  text-neutral-500"
            } p-2 rounded-full`}
            onClick={() => setIsHowToPlayModal(!isHowToPlayModal)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;
