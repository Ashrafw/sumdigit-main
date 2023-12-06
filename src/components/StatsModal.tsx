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
    endTime,
  } = usePersistStore();

  const changeTimeFormat = (totalSeconds: number) => {
    // const milliseconds = 20000;
    // const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const aaa = Math.floor(totalSeconds % 3600);
    // const seconds = totalSeconds % 60;
    return `${hours > 0 ? ` ${hours + " hours"},` : ""}    ${
      minutes > 0 ? ` ${minutes + " minutes"}` : ""
    }    ${seconds > 0 ? ` ${seconds + " seconds"}` : ""}      
    `;
  };

  return (
    <div
      className={`absolute bg-black bg-opacity-5 w-screen h-screen z-40  top-0 left-0 flex justify-center items-center`}
      onClick={() => setIsStatsModal(!isStatsModal)}
    >
      <div
        className={` relative min-w-[480px] max-w-[560px] blur-none shadow-xl w-[85%] ${
          isDarkMode ? "bg-[#13212a] text-slate-100" : " bg-slate-200 text-black"
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
          <h1 className=" font-semibold my-2 mt-4">Guess distribution: (attempts)</h1>
          <div className=" flex  items-center gap-3 mb-1">
            <div className=" relative w-[30px]">
              <FaHeart
                className={` text-[32px]  ${
                  !isDarkMode ? "text-[#242424]" : " text-[#dce4e6]"
                }`}
              />
              <p
                className={`absolute  flex pl-1 pb-1  ${
                  isDarkMode ? "text-[#242424]" : " text-white"
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[12px]`}
              >
                1<span className=" text-[10px] font-medium">st</span>
              </p>
            </div>
            <div
              className={` p-1 px-2 font-bold text-center rounded-sm bg-[#34747B] shadow-lg text-white text-sm   w-[${
                (solvedThird / (solvedFirst + solvedSecond + solvedThird)) * 100
              }%]`}
            >
              {solvedThird}
            </div>
          </div>
          <div className=" flex  items-center gap-3 mb-1">
            <div className={` relative w-[30px] `}>
              <FaHeart
                className={`  text-[32px]  ${
                  !isDarkMode ? "text-[#242424]" : " text-[#dce4e6]"
                }`}
              />
              <p
                className={`absolute  flex pl-1 pb-1 ${
                  isDarkMode ? "text-black" : " text-white"
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[12px]`}
              >
                {" "}
                2<span className=" text-[10px] font-medium">nd</span>
              </p>
            </div>
            <div
              className={` p-1 px-2 font-bold text-center rounded-sm bg-[#34747B] shadow-lg text-white text-sm w-[${
                (solvedSecond / (solvedFirst + solvedSecond + solvedThird)) * 100
              }%]  text-center`}
            >
              {solvedSecond}
            </div>
          </div>
          <div className=" flex  items-center gap-3 mb-1">
            <div className=" relative w-[30px]">
              <FaHeart
                className={`  text-[32px]  ${
                  !isDarkMode ? "text-[#242424]" : " text-[#dce4e6]"
                }`}
              />
              <p
                className={`absolute flex pl-1 pb-1 ${
                  isDarkMode ? "text-black" : " text-white"
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[12px]`}
              >
                3<span className=" text-[10px] font-medium">rd</span>
              </p>
            </div>
            <div
              className={` p-1 px-2 font-bold rounded-sm bg-[#34747B]  shadow-lg text-white text-sm w-[${
                (solvedFirst / (solvedFirst + solvedSecond + solvedThird)) * 100
              }%] text-center`}
            >
              {solvedFirst}
            </div>
          </div>
        </div>
        <div
          className={` items-end justify-center gap-2 border-2 p-2 rounded-md  mb-2 shadow-md ${
            isDarkMode ? "border-white" : " border-black"
          }`}
        >
          <div
            className={`flex items-end justify-start gap-2 p-2 rounded-md  shadow-md mb-2 ${
              isDarkMode ? " bg-[rgba(255,255,255,0.03)] " : " "
            }`}
          >
            <p className=" text-md  font-semibold m-0 p-0">Current solve time:</p>
            <strong className=" font-normal text-lg">{changeTimeFormat(endTime)}</strong>
          </div>
          <div
            className={`flex items-end justify-start gap-2 p-2 rounded-md  shadow-md ${
              isDarkMode ? " bg-[rgba(255,255,255,0.03)] " : " "
            }`}
          >
            <p className=" text-md font-semibold m-0 p-0">Fastest solve time:</p>
            <strong className=" font-normal text-lg">
              {changeTimeFormat(fastestTime)}
            </strong>
          </div>
        </div>
        <div className=" my-2 mt-8 flex justify-center">
          <button
            className={` flex items-center justify-center gap-2 text-white  px-16 py-2 ${
              isDarkMode ? "bg-slate-500 text-slate-900" : "bg-slate-800"
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
