import React from "react";
import { useStateStore } from "../zustand";
import { FaTimes, FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { usePersistStore } from "../zustandPersist";
const StatsModal = () => {
  const { setIsStatsModal, isStatsModal } = useStateStore();
  const { isDarkMode } = usePersistStore();
  const {
    gamesPlayed,
    currentStreak,
    longestStreak,
    fastestTime,
    solvedFirst,
    solvedSecond,
    solvedThird,
    lastGameDate,
  } = usePersistStore();
  return (
    <div
      className={`absolute bg-black bg-opacity-5 w-screen h-screen z-40  top-0 left-0 flex justify-center items-center`}
      onClick={() => setIsStatsModal(!isStatsModal)}
    >
      <div
        className={` relative min-w-[480px] max-w-[560px] blur-none shadow-xl w-[85%] ${
          isDarkMode ? "bg-[#2c2c2c] text-slate-100" : " bg-slate-200 text-black"
        } z-40 p-6 rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className=" text-xl font-bold mb-4">Statistic</h1>
        <div className=" grid grid-cols-3 gap-2 justify-between">
          <div
            className={`flex items-center  justify-center gap-2 border-2 p-2 rounded-md ${
              isDarkMode ? "border-white" : " border-black"
            }`}
          >
            <div className=" flex flex-col items-end justify-center">
              <p className=" text-sm font-semibold m-0 p-0">Games </p>
              <p className=" text-sm font-semibold m-0 p-0">played </p>
            </div>
            <strong className=" font-light text-4xl">{gamesPlayed}</strong>
          </div>

          <div
            className={`flex items-center justify-center gap-2 border-2 p-2 rounded-md ${
              isDarkMode ? "border-white" : " border-black"
            }`}
          >
            <div className=" flex flex-col items-end justify-center">
              <p className=" text-sm font-semibold m-0 p-0">Current </p>
              <p className=" text-sm font-semibold m-0 p-0">streak </p>
            </div>
            <strong className=" font-light text-4xl">{currentStreak}</strong>
          </div>

          <div
            className={`flex items-center justify-center gap-2 border-2 p-2 rounded-md ${
              isDarkMode ? "border-white" : " border-black"
            }`}
          >
            <div className=" flex flex-col items-end">
              <p className=" text-sm font-semibold m-0 p-0">Longest </p>
              <p className=" text-sm font-semibold m-0 p-0">streak </p>
            </div>
            <strong className=" font-light text-4xl">{longestStreak}</strong>
          </div>
        </div>

        <div className=" my-8">
          <h1 className=" font-semibold my-2 mt-4">Guess distribution</h1>
          <div className=" flex  items-center gap-3 mb-1">
            <div className=" relative w-[30px]">
              <FaHeart
                className={`  text-3xl  ${
                  !isDarkMode ? "text-[#242424]" : " text-[#dce4e6]"
                }`}
              />
              <p
                className={`absolute  ${
                  isDarkMode ? "text-[#242424]" : " text-white"
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-sm`}
              >
                1
              </p>
            </div>
            <div
              className={` p-1 px-2 font-bold rounded-sm bg-[#34747B] shadow-lg text-white text-sm   w-[${
                (solvedFirst / (solvedFirst + solvedSecond + solvedThird)) * 100
              }%]`}
            >
              {solvedFirst}
            </div>
          </div>
          <div className=" flex  items-center gap-3 mb-1">
            <div className={` relative w-[30px] `}>
              <FaHeart
                className={`  text-3xl  ${
                  !isDarkMode ? "text-[#242424]" : " text-[#dce4e6]"
                }`}
              />
              <p
                className={`absolute  ${
                  isDarkMode ? "text-black" : " text-white"
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-sm`}
              >
                {" "}
                2
              </p>
            </div>
            <div
              className={` p-1 px-2 font-bold rounded-sm bg-[#34747B] shadow-lg text-white text-sm w-[${
                (solvedSecond / (solvedFirst + solvedSecond + solvedThird)) * 100
              }%]  text-center`}
            >
              {solvedSecond}
            </div>
          </div>
          <div className=" flex  items-center gap-3 mb-1">
            <div className=" relative w-[30px]">
              <FaHeart
                className={`  text-3xl  ${
                  !isDarkMode ? "text-[#242424]" : " text-[#dce4e6]"
                }`}
              />
              <p
                className={`absolute  ${
                  isDarkMode ? "text-black" : " text-white"
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-sm`}
              >
                {" "}
                3
              </p>
            </div>
            <div
              className={` p-1 px-2 font-bold rounded-sm bg-[#34747B]  shadow-lg text-white text-sm w-[${
                (solvedThird / (solvedFirst + solvedSecond + solvedThird)) * 100
              }%] text-center`}
            >
              {solvedThird}
            </div>
          </div>
        </div>
        <div></div>
        <div
          className={`flex items-end justify-center gap-2 border-2 p-2 rounded-md   shadow-md ${
            isDarkMode ? "border-white" : " border-black"
          }`}
        >
          <p className=" text-lg font-semibold m-0 p-0">Fastest solve time:</p>
          <strong className=" font-light text-4xl">
            {fastestTime} <span className=" text-lg ">seconds</span>
          </strong>
        </div>
        <div className=" my-2 mt-8 flex justify-center">
          <button
            className={` flex items-center justify-center gap-2 text-white  px-16 py-2 ${
              isDarkMode ? "bg-slate-300 text-slate-900" : "bg-slate-800"
            }  rounded-lg shadow-lg font-semibold text-xl 
               `}
            // onClick={() => handleClick()}
          >
            Share <CiShare2 />
          </button>
        </div>
        <button
          className={`absolute top-0 right-0 m-2 ${
            isDarkMode
              ? "bg-black bg-opacity-30 text-slate-200"
              : " bg-slate-300  text-neutral-500"
          } p-2 rounded-full`}
          onClick={() => setIsStatsModal(!isStatsModal)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default StatsModal;
