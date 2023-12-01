import React from "react";
type DisplayOutputType = {
  currentAttempt: (string | number)[];
  completeAttempt: (string | number)[][];
  targetNumber: number;
  isDarkMode: boolean;
};
const DisplayOutput = ({
  currentAttempt,
  completeAttempt,
  targetNumber,
  isDarkMode,
}: DisplayOutputType) => {
  return (
    <div
      className={`  grid grid-cols-5 gap-2 border ${
        isDarkMode ? "border-white " : "border-black "
      } border-opacity-0 rounded-md p-2 `}
    >
      {completeAttempt.length > 0 &&
        completeAttempt.map((row) => (
          <>
            {row.map((comValue, i) => (
              <div
                className={` w-[70px] h-[35px] border shadow-md ${
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
      {currentAttempt.length > 0 &&
        currentAttempt.map((item, index) => (
          <div
            className={` w-[70px] h-[35px] border shadow-md  ${
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
