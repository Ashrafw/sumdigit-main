import React from "react";
import { useStateStore } from "../zustand";

const TargetNumber = () => {
  const { isDarkMode, targetNumber } = useStateStore();

  return (
    <div>
      <div
        className={` border shadow-md rounded ${
          isDarkMode ? "border-white border-opacity-40" : "border-black border-opacity-40"
        }   p-3 font-extrabold text-4xl flex justify-center items-center  min-w-[80px]`}
      >
        {targetNumber}
      </div>
    </div>
  );
};

export default TargetNumber;
