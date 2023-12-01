import React, { useCallback, useEffect, useState } from "react";
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
  completeAttempt: (string | number)[][];
  setCompleteAttempt: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
  numberObj: ObjectNum[];
  setNumberObj: React.Dispatch<React.SetStateAction<ObjectNum[]>>;
  targetNumber: number;
  achievedTargetNum: boolean;
  setAchievedTargetNum: React.Dispatch<React.SetStateAction<boolean>>;
  setLives: React.Dispatch<React.SetStateAction<number>>;
  lives: number;
  setIsLivesRemainingModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};
const GenNumbers = ({
  numbers,
  currentAttempt,
  setCurrentAttempt,
  setResultNumbers,
  resultNumbers,
  completeAttempt,
  setCompleteAttempt,
  numberObj,
  setNumberObj,
  targetNumber,
  achievedTargetNum,
  setAchievedTargetNum,
  setLives,
  lives,
  setIsLivesRemainingModal,
  isDarkMode,
}: GenNumbersType) => {
  const [isBackSpacePossible, setIsBackSpacePossible] = useState(false);
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

  const handleClick = (num: number | string, id: number) => {
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
    if (currentAttempt.length === 1 || currentAttempt.length === 2) {
      setIsBackSpacePossible(true);
    } else {
      setIsBackSpacePossible(false);
    }
  }, [currentAttempt]);
  useEffect(() => {
    if (
      numberObj
        .filter((obj) => obj.result === true)
        .some((obj) => obj.value === targetNumber)
    ) {
      setAchievedTargetNum(true);
    }
  }, [numberObj]);
  useEffect(() => {
    if (completeAttempt.length === 5 && !achievedTargetNum && lives > 1) {
      setIsLivesRemainingModal(true);
      setTimeout(() => {
        setLives((prev) => prev - 1);
        setCurrentAttempt([]);
        setCompleteAttempt([]);
        setNumberObj(() => {
          let newObj: any[] = [];
          numbers.forEach((value, index) => {
            newObj[index] = { id: index + 1, value, selected: false, result: false };
          });
          return newObj;
        });
        setIsLivesRemainingModal(false);
      }, 1500);
    }
  }, [completeAttempt]);

  // console.log("currentAttempt", currentAttempt);
  // console.log("currentAttempt.length", currentAttempt.length);
  // console.log("numberObj", numberObj);
  // console.log("numberObj.length", numberObj.length);
  // console.log("completeAttempt?.length === 5", completeAttempt);

  return (
    <div className=" text-white">
      <div className=" flex gap-2  min-h-[60px] min-w-[200px] justify-center mb-4">
        {numberObj.map((item, i) => (
          <>
            {item.result && (
              <button
                disabled={completeAttempt.length === 5}
                onClick={() =>
                  !item.selected && !achievedTargetNum
                    ? handleClick(item.value, item.id)
                    : null
                }
                className={` w-[55px] h-[45px] shadow-md flex justify-center items-center text-lg font-bold rounded-md bg-black bg-opacity-50  ${
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
                  // key={i}
                  // onClick={() => handleClick(num.value, num.id)}
                  onClick={() =>
                    !num.selected && !achievedTargetNum
                      ? handleClick(num.value, num.id)
                      : null
                  }
                  disabled={num.selected}
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
        <Operation
          setCurrentAttempt={setCurrentAttempt}
          currentAttempt={currentAttempt}
          isBackSpacePossible={isBackSpacePossible}
          achievedTargetNum={achievedTargetNum}
          setLives={setLives}
          setNumberObj={setNumberObj}
          numbers={numbers}
          setCompleteAttempt={setCompleteAttempt}
          lives={lives}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default GenNumbers;
