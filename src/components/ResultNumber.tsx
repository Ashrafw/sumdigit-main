import React from "react";

const ResultNumber = ({ resultNumbers }: { resultNumbers: number[] }) => {
  console.log("resultNumbers", resultNumbers);
  return (
    <div className=" flex gap-4  min-h-[60px] ">
      {resultNumbers.map((item, i) => (
        <div
          key={`index-key-results-${i}`}
          className=" w-[60px] h-[60px] flex justify-center items-center text-xl font-bold rounded-md bg-black bg-opacity-25"
        >
          {item}
        </div>
      ))}
      {/* <div className=" w-[60px] h-[60px] flex justify-center items-center text-xl font-bold rounded-md bg-black bg-opacity-25"></div> */}
    </div>
  );
};

export default ResultNumber;
