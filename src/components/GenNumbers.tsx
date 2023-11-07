import React, { useCallback, useEffect } from "react";
import Operation from "./Operation";

type ObjectNum = {
  id: number;
  value: number | string;
  selected: boolean;
  result: boolean;
};
type GenNumbersType = {
  numbers: number[];
  currentAttempt: (string | number)[];
  setCurrentAttempt: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  setResultNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  resultNumbers: number[];
  setCompleteAttempt: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
  numberObj: ObjectNum[];
  setNumberObj: React.Dispatch<React.SetStateAction<ObjectNum[]>>;
};
const GenNumbers = ({
  numbers,
  currentAttempt,
  setCurrentAttempt,
  setResultNumbers,
  resultNumbers,
  setCompleteAttempt,
  numberObj,
  setNumberObj,
}: GenNumbersType) => {
  const calculate = (num1: number, op: string, num2: number): number => {
    if (op === "+") {
      return num1 + num2;
    } else if (op === "-") {
      return num1 - num2;
    } else if (op === "x") {
      return num1 * num2;
    } else if (op === "÷") {
      return num1 / num2;
    } else {
      return 0;
    }
  };
  console.log("typeof 8", typeof 8);
  const handleClick = (num: number, id: number) => {
    if (currentAttempt.length === 0) {
      setNumberObj(
        numberObj.map((item) => (item.id === id ? { ...item, selected: true } : item))
      );
      setCurrentAttempt((prev) => [...prev, num]);
    } else if (currentAttempt.length === 2) {
      setNumberObj(
        numberObj.map((item) => (item.id === id ? { ...item, selected: true } : item))
      );
      setCurrentAttempt((prev) => [...prev, num, "=", calculate(prev[0], prev[1], num)]);
    }
  };
  useEffect(() => {
    if (currentAttempt.length === 5 && typeof currentAttempt[4] === "number") {
      // setResultNumbers((prev) => [...prev, currentAttempt[4]]);
      setNumberObj((prev) => [
        ...prev,
        { id: prev.length + 1, value: currentAttempt[4], selected: false, result: true },
      ]);
      setCompleteAttempt((prev) => [...prev, currentAttempt]);
      setCurrentAttempt([]);
    }
  }, [currentAttempt]);

  console.log("currentAttempt", currentAttempt);
  console.log("currentAttempt.length", currentAttempt.length);

  return (
    <div className="">
      <div className=" flex gap-2  min-h-[60px] min-w-[200px] justify-center mb-4">
        {numberObj.map((item, i) => (
          <>
            {item.result && (
              <button
                onClick={() => (!item.selected ? handleClick(item.value, item.id) : null)}
                className={` w-[60px] h-[60px] flex justify-center items-center text-xl font-bold rounded-md bg-black bg-opacity-50  ${
                  item.selected ? " cursor-not-allowed opacity-10 " : "bg-opacity-80"
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
                {item.value}
              </button>
            )}
          </>
        ))}
      </div>
      <div className=" flex gap-4">
        {/* <div className=" grid grid-cols-2 gap-1">
          {numbers.map((num, i) => (
            <button
              // key={i}
              onClick={() => handleClick(num)}
              className={` w-[60px] h-[60px] flex justify-center items-center text-xl font-bold  bg-black bg-opacity-25 ${
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
              {num}
            </button>
          ))}
        </div> */}
        <div className=" grid grid-cols-2 gap-1">
          {numberObj.map((num, i) => (
            <>
              {!num.result && (
                <button
                  // key={i}
                  // onClick={() => handleClick(num.value, num.id)}
                  onClick={() => (!num.selected ? handleClick(num.value, num.id) : null)}
                  disabled={num.selected}
                  className={` w-[60px] h-[60px] flex justify-center items-center text-xl font-bold ${
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
        <Operation
          setCurrentAttempt={setCurrentAttempt}
          currentAttempt={currentAttempt}
        />
      </div>
    </div>
  );
};

export default GenNumbers;
