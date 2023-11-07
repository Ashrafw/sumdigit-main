import React from "react";
type DisplayOutputType = {
  currentAttempt: (string | number)[];
  completeAttempt: (string | number)[][];
};
const DisplayOutput = ({ currentAttempt, completeAttempt }: DisplayOutputType) => {
  return (
    <div className="  grid grid-cols-5 gap-2  border border-white border-opacity-0 rounded-md p-2">
      {completeAttempt.length > 0 &&
        completeAttempt.map((row) => (
          <>
            {row.map((comValue, i) => (
              <div
                className={` w-[80px] h-[50px] border border-white border-opacity-10 ${
                  i === 4 ? "bg-[#19C9C8] bg-opacity-50" : "bg-zinc-900"
                }   rounded-md flex items-center justify-center text-2xl`}
              >
                {comValue}
              </div>
            ))}{" "}
          </>
        ))}
      {currentAttempt.length > 0 &&
        currentAttempt.map((item, index) => (
          <div
            className={` w-[80px] h-[50px] border border-white  ${
              index + 1 === currentAttempt.length
                ? "bg-[#19C9C8] bg-opacity-30 border-opacity-80"
                : "bg-zinc-900 bg-opacity-75 border-opacity-10"
            }  rounded-md flex items-center justify-center text-2xl`}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default DisplayOutput;
