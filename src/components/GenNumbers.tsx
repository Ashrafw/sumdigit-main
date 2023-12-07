import React, { useCallback, useEffect, useState } from "react";
import Operation from "./Operation";
import { useStateStore } from "../zustand";
import { usePersistIncompleteStore, usePersistStore } from "../zustandPersist";

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
  completeAttempt: (string | number)[][];
  setCompleteAttempt: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
  numberObj: ObjectNum[];
  setNumberObj: React.Dispatch<React.SetStateAction<ObjectNum[]>>;
  setIsLivesRemainingModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const GenNumbers = ({
  numbers,
  currentAttempt,
  setCurrentAttempt,
  completeAttempt,
  setCompleteAttempt,
  numberObj,
  setNumberObj,
  setIsLivesRemainingModal,
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

  const {
    setLives,
    lives,

    targetNumber,

    setIsStatsModal,
  } = useStateStore();

  const { achievedTargetNum, setAchievedTargetNum, setEndTime, startTime } =
    usePersistStore();

  const {
    isIncomplete,
    setIsIncomplete,
    //
    currentArr,
    setCurrentArr,
    //
    completeArr,
    setCompleteArr,
    //
    objectArr,
    setObjectArr,
    setLivesIncomplete,
  } = usePersistIncompleteStore();
  //
  const {
    gamesPlayed,
    setGamesPlayed,
    currentStreak,
    setCurrentStreak,
    longestStreak,
    setLongestStreak,
    fastestTime,
    setFastestTime,
    solvedFirst,
    setSolvedFirst,
    solvedSecond,
    setSolvedSecond,
    solvedThird,
    setSolvedThird,
    lastGameDate,
    setLastGameDate,
    setMySolution,
    setLastLife,
    setIsSolved,
    setIsConfetti,
  } = usePersistStore();
  //

  const handleClick = (num: number | string, id: number) => {
    setIsIncomplete(true);

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
  // calculations
  useEffect(() => {
    if (currentAttempt.length === 5 && typeof currentAttempt[4] === "number") {
      // setResultNumbers((prev) => [...prev, currentAttempt[4]]);
      setNumberObj((prev) => [
        ...prev,
        { id: prev.length + 1, value: currentAttempt[4], selected: false, result: true },
      ]);
      const date = new Date();
      console.log("date", date);
      const newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      setLastGameDate(newDate);

      setCompleteAttempt((prev) => [...prev, currentAttempt]);
      setCurrentAttempt([]);
    }
    if (currentAttempt.length === 1 || currentAttempt.length === 2) {
      setIsBackSpacePossible(true);
    } else {
      setIsBackSpacePossible(false);
    }
  }, [currentAttempt]);

  // check if the target number is achieved
  useEffect(() => {
    if (
      numberObj
        .filter((obj) => obj.result === true)
        .some((obj) => obj.value === targetNumber)
    ) {
      setAchievedTargetNum(true);
      setEndTime((new Date() - startTime) / 1000);
      setGamesPlayed(gamesPlayed + 1);
      // const date = new Date();
      // const newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      // setLastGameDate(newDate);
      setMySolution(completeAttempt);
      setLastLife(lives);
      setIsSolved(true);

      setTimeout(() => {
        setIsConfetti(true);
      }, 3500);
      setIsStatsModal(true);
      // clear temp results for incomplete play
      setIsIncomplete(false);
      setCompleteArr([]);
      setCurrentArr([]);
      setObjectArr([]);
      //

      if (longestStreak < currentStreak + 1) {
        currentStreak;
        setLongestStreak(currentStreak + 1);
      }
      setCurrentStreak(currentStreak + 1);
      if (fastestTime === 0 || fastestTime > (new Date() - startTime) / 1000) {
        setFastestTime((new Date() - startTime) / 1000);
      }
      if (lives === 1) {
        setSolvedFirst(solvedFirst + 1);
      } else if (lives === 2) {
        setSolvedSecond(solvedSecond + 1);
      } else if (lives === 3) {
        setSolvedThird(solvedThird + 1);
      }
    }
  }, [numberObj]);
  // reset when exhausted 5 operations
  useEffect(() => {
    if (completeAttempt.length === 5 && !achievedTargetNum && lives > 1) {
      setIsLivesRemainingModal(true);
      setTimeout(() => {
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
        setIsLivesRemainingModal(false);
      }, 1000);
    }
  }, [completeAttempt]);

  useEffect(() => {
    setCompleteArr(completeAttempt);
  }, [completeAttempt]);
  //
  useEffect(() => {
    setCurrentArr(currentAttempt);
  }, [currentAttempt]);
  //
  useEffect(() => {
    setObjectArr(numberObj);
  }, [numberObj]);
  //
  useEffect(() => {
    setLivesIncomplete(lives);
  }, [lives]);

  console.log("completeAttempt", completeAttempt);
  console.log("numberObj", numberObj);

  return (
    <div className=" text-white">
      <div className=" flex gap-2  min-h-[60px] min-w-[200px] justify-center mb-4">
        {numberObj.map((item, i) => (
          <>
            {item.result && (
              <button
                key={`btn-new-${i}`}
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
                  key={`btn-act-${i}`}
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
          setNumberObj={setNumberObj}
          numbers={numbers}
          setCompleteAttempt={setCompleteAttempt}
        />
      </div>
    </div>
  );
};

export default GenNumbers;
