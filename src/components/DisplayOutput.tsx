import React from "react";
import { useStateStore } from "../zustand";
import { usePersistStore } from "../zustandPersist";
type DisplayOutputType = {
  currentAttempt: (string | number)[];
  completeAttempt: (string | number)[][];
};
const DisplayOutput = ({ currentAttempt, completeAttempt }: DisplayOutputType) => {
  const { targetNumber } = useStateStore();
  const { isDarkMode } = usePersistStore();

  return (
    <div
      className={`  grid grid-cols-5 gap-2 border ${
        isDarkMode ? "border-white " : "border-black "
      } border-opacity-0 rounded-md p-2 `}
    >
      {completeAttempt?.length > 0 &&
        completeAttempt.map((row, j) => (
          <>
            {row.map((comValue, i) => (
              <div
                key={`complete-${i}-${j}`}
                className={` w-[70px] h-[35px] max-sm:w-[50px] max-sm:h-[28px] max-sm:text-[16px] border shadow-md ${
                  isDarkMode ? "border-white  " : "border-black "
                }  border-opacity-10 ${
                  targetNumber === comValue
                    ? " bg-emerald-500 text-slate-100"
                    : i === 4
                    ? "bg-[#19C9C8] bg-opacity-50"
                    : !isDarkMode
                    ? "text-zinc-900 bg-gray-300 bg-opacity-20 "
                    : "bg-zinc-900 text-slate-100"
                }   rounded-md flex items-center justify-center text-lg font-bold`}
              >
                {comValue}
              </div>
            ))}{" "}
          </>
        ))}
      {currentAttempt?.length > 0 &&
        currentAttempt.map((item, index) => (
          <div
            key={`current-${index}`}
            className={` w-[70px] h-[35px] max-sm:w-[50px] max-sm:h-[28px] max-sm:text-[16px] border shadow-md  ${
              isDarkMode ? "border-white " : "border-black  bg-[#19C9C8]"
            }   ${
              index + 1 === currentAttempt.length
                ? "bg-[#19C9C8] bg-opacity-30 border-opacity-80"
                : !isDarkMode
                ? "text-zinc-900 bg-gray-300 bg-opacity-20 "
                : "bg-zinc-900 text-slate-100"
              // " bg-opacity-75 border-opacity-10"
            }  rounded-md flex items-center justify-center text-lg font-bold`}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default DisplayOutput;
