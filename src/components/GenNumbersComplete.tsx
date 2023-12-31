import React from "react";
import { useStateStore } from "../zustand";
import OperationComplete from "./OperationComplete";

type ObjectNum = {
  id: number;
  value: number | string;
  selected: boolean;
  result: boolean;
};
type GenNumbersCompleteType = {
  numbers: number[];
  currentAttempt: (string | number)[];
  setCurrentAttempt: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  setResultNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  resultNumbers: number[];
  completeAttempt: (string | number)[][];
  setCompleteAttempt: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
  numberObj: ObjectNum[];
  setNumberObj: React.Dispatch<React.SetStateAction<ObjectNum[]>>;
  setIsLivesRemainingModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const GenNumbersComplete = ({ numberObj }: GenNumbersCompleteType) => {
  // const [isBackSpacePossible, setIsBackSpacePossible] = useState(false);
  // const calculate = (num1: number, op: string, num2: number): number => {
  //   if (op === "+") {
  //     return num1 + num2;
  //   } else if (op === "-") {
  //     return num1 - num2;
  //   } else if (op === "x") {
  //     return num1 * num2;
  //   } else if (op === "÷") {
  //     return num1 / num2;
  //   } else {
  //     return 0;
  //   }
  // };

  const { targetNumber } = useStateStore();

  return (
    <div className=" text-white">
      <div className=" flex gap-2  min-h-[60px] min-w-[200px] justify-center mb-4">
        {numberObj.map((item, i) => (
          <>
            {item.result && (
              <button
                key={`gen-numb-key-${i}`}
                disabled={true}
                className={` w-[55px] h-[45px] shadow-md  max-sm:w-[50px] max-sm:h-[28px]  flex justify-center items-center text-lg font-bold rounded-md bg-black bg-opacity-50  ${
                  item.selected ? " cursor-not-allowed opacity-10 " : "bg-opacity-80"
                } ${item.value === targetNumber ? " bg-emerald-500" : "bg-black"} `}
              >
                {item.value}
              </button>
            )}
          </>
        ))}
      </div>
      <div className=" flex gap-4 items-center justify-center">
        <div className=" grid grid-cols-2 gap-1">
          {numberObj.map((num, i) => (
            <>
              {!num.result && (
                <button
                  key={`gen-main-key-${i}`}
                  disabled={true}
                  className={` w-[55px] h-[45px] shadow-md flex justify-center items-center text-lg font-bold ${
                    num.selected ? " cursor-not-allowed opacity-10 " : "bg-opacity-80"
                  } bg-black  ${
                    i === 0
                      ? "rounded-tl-lg"
                      : i === 1
                      ? "rounded-tr-lg"
                      : i === 4
                      ? "rounded-bl-lg"
                      : i === 5
                      ? "rounded-br-lg"
                      : ""
                  }`}
                >
                  {num.value}
                </button>
              )}
            </>
          ))}
        </div>
        <OperationComplete />
      </div>
    </div>
  );
};

export default GenNumbersComplete;
