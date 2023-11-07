import React from "react";
import { FaRedo } from "react-icons/fa";
type OperationType = {
  currentAttempt: (string | number)[];
  setCurrentAttempt: React.Dispatch<React.SetStateAction<(string | number)[]>>;
};
const Operation = ({ setCurrentAttempt, currentAttempt }: OperationType) => {
  const handleClick = (value: string) => {
    if (value === "<-" && currentAttempt.length > 0) {
      setCurrentAttempt((prev) => prev.slice(0, -1));
    }
    if (currentAttempt.length === 1 && value !== "<-" && value !== "redo") {
      setCurrentAttempt((prev) => [...prev, value]);
    }
  };

  return (
    // <div className=" flex gap-4 ">
    <div className=" grid grid-cols-2 gap-1 bg-[#19C9C8] bg-opacity-5 rounded-xl">
      <button
        onClick={() => handleClick("+")}
        className=" w-[60px] h-[60px]  font-bold flex justify-center items-center text-xl rounded-tl-xl bg-[#19C9C8] bg-opacity-20"
      >
        +
      </button>
      <button
        onClick={() => handleClick("-")}
        className=" w-[60px] h-[60px]  font-bold  flex justify-center items-center text-xl rounded-tr-xl bg-[#19C9C8] bg-opacity-20 "
      >
        -
      </button>
      <button
        onClick={() => handleClick("x")}
        className=" w-[60px] h-[60px]  font-bold  flex justify-center items-center text-xl  bg-[#19C9C8] bg-opacity-20 "
      >
        x
      </button>
      <button
        onClick={() => handleClick("÷")}
        className=" w-[60px] h-[60px]  font-bold  flex justify-center items-center text-xl  bg-[#19C9C8] bg-opacity-20 "
      >
        ÷
      </button>
      {/* <button
        onClick={() => handleClick("<-")}
        className=" w-[60px] h-[60px]  font-bold  flex justify-center items-center text-xl rounded-bl-xl bg-[#19C9C8] bg-opacity-5 "
      >
        {"<-"}
      </button> */}
      <button
        onClick={() => handleClick("redo")}
        className="  h-[60px]  font-bold col-span-2 flex justify-center items-center  rounded-b-xl bg-[#19C9C8] bg-opacity-10 "
      >
        <FaRedo style={{ fontSize: "16px", margin: "0", padding: "0" }} />
      </button>
    </div>
  );
};

export default Operation;
