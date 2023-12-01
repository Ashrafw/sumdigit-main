import React from "react";

const TargetNumber = ({
  targetNumber,
  isDarkMode,
}: {
  targetNumber: number;
  isDarkMode: boolean;
}) => {
  return (
    <div>
      <div
        className={` border ${
          isDarkMode ? "border-white border-opacity-40" : "border-black border-opacity-40"
        }   p-3 font-extrabold text-3xl flex justify-center items-center  min-w-[80px]`}
      >
        {targetNumber}
      </div>
    </div>
  );
};

export default TargetNumber;
