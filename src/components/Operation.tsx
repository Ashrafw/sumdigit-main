import React from "react";
import { FaRedo } from "react-icons/fa";
import { useStateStore } from "../zustand";
import { usePersistStore } from "../zustandPersist";
type ObjectNum = {
  id: number;
  value: number | string;
  selected: boolean;
  result: boolean;
};
type OperationType = {
  currentAttempt: (string | number)[];
  setCurrentAttempt: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  isBackSpacePossible: boolean;
  setNumberObj: React.Dispatch<React.SetStateAction<ObjectNum[]>>;
  numbers: number[];
  setCompleteAttempt: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
};
const Operation = ({
  setCurrentAttempt,
  currentAttempt,
  isBackSpacePossible,
  setNumberObj,
  numbers,
  setCompleteAttempt,
}: OperationType) => {
  const { setLives, lives } = useStateStore();
  const { isDarkMode, achievedTargetNum } = usePersistStore();

  const handleClick = (value: string) => {
    if (value === "<-" && currentAttempt.length === 2) {
      setCurrentAttempt((prev) => prev.slice(0, -1));
    }
    if (value === "<-" && currentAttempt.length === 1) {
      setNumberObj((prev) =>
        prev.map((item) => {
          if (item.selected === true && item.value === currentAttempt[0]) {
            return { ...item, selected: false };
          } else {
            return item;
          }
        })
      );
      setCurrentAttempt((prev) => prev.slice(0, -1));
    }
    if (currentAttempt.length === 1 && value !== "<-" && value !== "redo") {
      setCurrentAttempt((prev) => [...prev, value]);
    }
    if (value === "redo") {
      setLives(lives - 1);
      setCurrentAttempt([]);
      setCompleteAttempt([]);
      setNumberObj(() => {
        let newObj: any[] = [];
        numbers.forEach((value, index) => {
          newObj[index] = { id: index + 1, value, selected: false, result: false };
        });
        return newObj;
      });
    }
  };

  return (
    <div
      className={` grid grid-cols-2 gap-1 ${
        isDarkMode ? "bg-[#19C9C8] bg-opacity-5" : "bg-[#ffffff] bg-opacity-20"
      }   rounded-xl`}
    >
      <button
        disabled={achievedTargetNum}
        onClick={() => handleClick("+")}
        className=" w-[55px] h-[45px]   max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[18px] shadow-md font-bold flex justify-center items-center text-xl rounded-tl-xl bg-[#3a8f99] bg-opacity-70"
      >
        +
      </button>
      <button
        disabled={achievedTargetNum}
        onClick={() => handleClick("-")}
        className=" w-[55px] h-[45px]   max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[18px] shadow-md font-bold  flex justify-center items-center text-xl rounded-tr-xl bg-[#3a8f99] bg-opacity-70 "
      >
        -
      </button>
      <button
        disabled={achievedTargetNum}
        onClick={() => handleClick("x")}
        className=" w-[55px] h-[45px]   max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[18px] shadow-md font-bold  flex justify-center items-center text-xl  bg-[#3a8f99] bg-opacity-70 "
      >
        x
      </button>
      <button
        disabled={achievedTargetNum}
        onClick={() => handleClick("÷")}
        className=" w-[55px] h-[45px]   max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[18px] shadow-md font-bold  flex justify-center items-center text-xl  bg-[#3a8f99] bg-opacity-70 "
      >
        ÷
      </button>
      <button
        disabled={achievedTargetNum}
        onClick={() => handleClick("<-")}
        className={` w-[55px] h-[45px]   max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[18px] shadow-md font-bold  flex justify-center items-center text-xl rounded-bl-xl bg-[#3a8f99] ${
          isBackSpacePossible ? "bg-opacity-70" : "bg-opacity-30"
        }  `}
      >
        {"<-"}
      </button>
      <button
        disabled={achievedTargetNum || lives === 1}
        onClick={() => handleClick("redo")}
        className={`  w-[55px] h-[45px]   max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[18px] shadow-md  font-bold  flex justify-center items-center  rounded-br-xl bg-[#3a8f99]  ${
          lives === 1 ? "bg-opacity-30" : "bg-opacity-70"
        }  `}
      >
        <FaRedo style={{ fontSize: "16px", margin: "0", padding: "0" }} />
      </button>
    </div>
  );
};

export default Operation;
