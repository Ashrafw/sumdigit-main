import React from "react";
import { useStateStore } from "../zustand";

const DisplayNone = () => {
  const { isDarkMode } = useStateStore();

  return (
    <div
      className={` grid grid-cols-5 gap-2 shadow-sm border ${
        isDarkMode ? "border-white " : "border-black "
      } border-opacity-25 rounded-md p-2`}
    >
      {/* row */}
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      {/* row */}
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      {/* row */}
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      {/* row */}
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      {/* row */}
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
      <div
        className={` w-[70px] h-[35px] border ${
          isDarkMode ? "border-white " : "border-black "
        } border-opacity-20 rounded-md`}
      ></div>
    </div>
  );
};

export default DisplayNone;
