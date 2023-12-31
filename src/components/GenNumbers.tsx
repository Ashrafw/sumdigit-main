import React, { useEffect, useState } from "react";
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
};
const GenNumbers = ({
  numbers,
  currentAttempt,
  setCurrentAttempt,
  completeAttempt,
  setCompleteAttempt,
  numberObj,
  setNumberObj,
}: GenNumbersType) => {
  const [isBackSpacePossible, setIsBackSpacePossible] = useState(false);
  const calculate = (num1: number | string, op: any, num2: number | string): number => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if (op === "+") {
      return number1 + number2;
    } else if (op === "-") {
      return number1 - number2;
    } else if (op === "x") {
      return number1 * number2;
    } else if (op === "÷") {
      return number1 / number2;
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
    setIsIncomplete,
    //
    setCurrentArr,
    //
    setCompleteArr,
    //
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
    setLastGameDate,
    setMySolution,
    setLastLife,
    setIsSolved,
    setIsConfetti,
    setHasFailedShowSolution,
    isDarkMode,
    setNumberObjPersist,
  } = usePersistStore();
  //
  const [showSolutionBtn, setShowSolutionBtn] = useState(false);
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

  useEffect(() => {
    if (lives === 1) {
      setShowSolutionBtn(true);
    }
  }, [lives]);

  // calculations
  useEffect(() => {
    if (currentAttempt.length === 5 && typeof currentAttempt[4] === "number") {
      setNumberObj([
        ...numberObj,
        {
          id: numberObj.length + 1,
          value: currentAttempt[4],
          selected: false,
          result: true,
        },
      ]);
      const date = new Date();
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
      const timeNow: any = new Date();
      const actualStartTime: any = new Date(startTime);

      setAchievedTargetNum(true);
      setEndTime((timeNow - actualStartTime) / 1000);
      setGamesPlayed(gamesPlayed + 1);

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
      setNumberObjPersist([]);
      //

      if (longestStreak < currentStreak + 1) {
        currentStreak;
        setLongestStreak(currentStreak + 1);
      }
      setCurrentStreak(currentStreak + 1);
      if (fastestTime === 0 || fastestTime > (timeNow - actualStartTime) / 1000) {
        setFastestTime((timeNow - actualStartTime) / 1000);
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
      // setIsLivesRemainingModal(true);
      setTimeout(() => {
        setLives(lives - 1);
        setCurrentAttempt([]);
        setCompleteAttempt([]);
        const handleChange = () => {
          let newObj: any[] = [];
          numbers.forEach((value, index) => {
            newObj[index] = { id: index + 1, value, selected: false, result: false };
          });
          return newObj;
        };
        setNumberObj(handleChange());
        // setIsLivesRemainingModal(false);
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

  useEffect(() => {
    setTimeout(() => {
      setShowSolutionBtn(true);
    }, 40000);
  }, [lives]);

  const handleGameOver = () => {
    setHasFailedShowSolution(true);
    setGamesPlayed(gamesPlayed + 1);
    setCurrentStreak(0);
    setIsSolved(false);
    const date = new Date();
    const newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    setLastGameDate(newDate);
  };

  return (
    <div className=" text-white">
      <div className=" flex gap-2 pt-1 pb-4 min-w-[200px] justify-center">
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
                className={` text-lg  w-[55px] h-[45px]  max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[16px] shadow-md flex justify-center items-center font-bold rounded-md bg-black bg-opacity-50  ${
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
                  className={` 
                  text-lg  w-[55px] h-[45px] shadow-md  max-sm:w-[50px]  max-sm:h-[35px] max-sm:text-[16px] flex justify-center items-center font-bold ${
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
      {showSolutionBtn && (
        <div className=" flex justify-center">
          <button
            className={` mt-6 ${
              isDarkMode
                ? "bg-black bg-opacity-30 text-slate-200"
                : " bg-slate-400 bg-opacity-100 text-neutral-100"
            } p-[6px] px-4 rounded-md max- text-md font-bold hover:bg-slate-600 hover:text-white max-sm:text-sm max-sm:py-1`}
            onClick={() => handleGameOver()}
          >
            Show solution
          </button>
          {/* const [showSolutionBtn, setShowSolutionBtn] = useState(false); */}
        </div>
      )}
    </div>
  );
};

export default GenNumbers;
