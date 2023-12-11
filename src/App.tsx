import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DisplayNone from "./components/DisplayNone";
import Operation from "./components/Operation";
import GenNumbers from "./components/GenNumbers";
import TargetNumber from "./components/TargetNumber";
import LivesAttempted from "./components/LivesAttempted";
import ResultNumber from "./components/ResultNumber";
import DisplayOutput from "./components/DisplayOutput";
import HowToPlayModal from "./components/HowToPlayModal";
import LivesModal from "./components/LivesModal";
import ConfettiExplosion from "react-confetti-explosion";
import { useStateStore } from "./zustand";
import StatsModal from "./components/StatsModal";
import { usePersistIncompleteStore, usePersistStore } from "./zustandPersist";
import GenNumbersComplete from "./components/GenNumbersComplete";
import LivesAttemptedComplete from "./components/LivesAttemptedComplete";
import MainComponent from "./components/MainComponent";
import db from "./data/db.json";
import AnswerModal from "./components/AnswerModal";
const getDateFormat = () => {
  const date = new Date();

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
const getDateFormatStart = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
type ObjectNum = {
  id: number;
  value: number | string;
  selected: boolean;
  result: boolean;
};
function App() {
  const {
    isDarkMode,
    lastGameDate,
    mySolution,
    lastLife,
    isSolved,
    setIsSolved,
    achievedTargetNum,
    setAchievedTargetNum,
    isStartGame,
    setIsStartGame,
    isConfetti,
    setStartTime,
    setIsConfetti,
    setCurrentStreak,
    hasFailedShowSolution,
    setHasFailedShowSolution,
    answer,
    setAnswer,
    numberObjPersist,
    setNumberObjPersist,
    setId,
  } = usePersistStore();
  const { isIncomplete, objectArr, currentArr, completeArr, setIsIncomplete } =
    usePersistIncompleteStore();
  const {
    isHowToPlayModal,
    lives,
    targetNumber,
    isStatsModal,
    setIsStatsModal,
    setTargetNumber,
  } = useStateStore();
  const [isLivesRemainingModal, setIsLivesRemainingModal] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [data, setData] = useState(db[0]);
  const [currentAttempt, setCurrentAttempt] = useState<(string | number)[]>(() => {
    if (isIncomplete && getDateFormat() === lastGameDate) {
      return currentArr;
    } else {
      return [];
    }
  });
  const [completeAttempt, setCompleteAttempt] = useState<(string | number)[][]>(() => {
    if (isIncomplete && getDateFormat() === lastGameDate) {
      return completeArr;
    } else {
      return [];
    }
  });
  // console.log("getDateFormat()", getDateFormat());
  // console.log("data", data);
  // console.log("data[getDateFormat()]", data[getDateFormat()]);

  useEffect(() => {
    if (getDateFormat() !== lastGameDate) {
      if (!isSolved) {
        setCurrentStreak(0);
      }
      setHasFailedShowSolution(false);

      setIsSolved(false);
      setAchievedTargetNum(false);
      setIsStartGame(false);
      setIsIncomplete(false);
      setIsConfetti(false);
    } else if (isSolved) {
      setIsStatsModal(true);
    }
    setTargetNumber(data[getDateFormat()].targetNumber);
    setAnswer(data[getDateFormat()].answer);
    setNumbers(data[getDateFormat()].number);
    setId(data[getDateFormat()].id);
    // setIsSolved(false);
  }, []);
  // console.log("lastGameDate", lastGameDate);
  // console.log("targetNumber", targetNumber);
  // console.log("numbers", numbers);
  // console.log("answer", answer);
  //
  const [livesArray, setLivesArray] = useState<string[]>([]);
  const [numberObj, setNumberObj] = useState<ObjectNum[]>([]);

  useEffect(() => {
    setNumberObj((): any | ObjectNum => {
      if (isIncomplete && getDateFormat() === lastGameDate) {
        return objectArr;
      } else {
        const newObj: any[] = [];
        numbers.forEach((value, index) => {
          newObj[index] = { id: index + 1, value, selected: false, result: false };
        });
        return newObj;
      }
    });
  }, [numbers]);

  useEffect(() => {
    if (numberObj.length !== 0 && isIncomplete) {
      setNumberObjPersist(numberObj);
    }
    if (numberObj.length === 0 && isIncomplete && numberObjPersist.length > 0) {
      setNumberObj(numberObjPersist);
    }
  }, [numberObj]);

  // useEffect(() => {
  //   if (numberObj.length === 0 && isIncomplete && numberObjPersist.length > 0) {
  //     setNumberObj(numberObjPersist);
  //   }
  // }, []);

  // console.log("numberObj.length", numberObj.length);
  // console.log("numberObjPersist.length", numberObjPersist.length);
  // console.log("isIncomplete", isIncomplete);
  // console.log("numberObjPersist", numberObjPersist);
  // console.log("numberObjPersist", numberObjPersist);
  //
  const handleClick = () => {
    const time = new Date();
    setStartTime(time);
    setIsStartGame(true);
    setAchievedTargetNum(false);
  };
  // console.log("getDateFormat()", getDateFormat());
  console.log("achievedTargetNum", achievedTargetNum);
  console.log("isStartGame", isStartGame);
  console.log("isIncomplete", isIncomplete);
  console.log("isSolved", isSolved);
  console.log("hasFailedShowSolution", hasFailedShowSolution);
  // console.log("numbers", numbers);
  console.log("isStatsModal", isStatsModal);
  return (
    <div
      className={`w-screen h-screen relative  ${
        isDarkMode
          ? "bg-[#131e26] text-[rgba(238, 238, 238, 0.87)]"
          : " bg-[#dce4e6] text-gray-950"
      }`}
    >
      <Navbar />
      {isStatsModal && <StatsModal />}
      {isHowToPlayModal && <HowToPlayModal />}
      {!isStartGame && !isIncomplete && !isSolved && !hasFailedShowSolution ? (
        <div
          className={` max-w-[970px] w-[90%] m-auto h-[calc(100%_-_120px)] rounded-lg shadow-lg text-white  bg-slate-600 bg-opacity-80 flex  justify-center items-center flex-col gap-6 ${
            isStatsModal || isHowToPlayModal ? "blur-lg" : "blur-none"
          } `}
        >
          <div className=" text-center">
            <h1 className=" text-center text-2xl max-sm:text-xl font-semibold ">
              Today's Target Number is{" "}
              <span className=" font-extrabold shadow p-1 bg-slate-400 rounded-md">
                {targetNumber}
              </span>{" "}
            </h1>
            <div className=" font-semibold text-lg max-sm:text-sm mt-2">
              {getDateFormatStart()}
            </div>
          </div>

          <button
            className=" px-16 py-2 bg-slate-800 rounded-lg shadow-lg font-semibold text-xl max-sm:px-12 max-sm:text-lg"
            onClick={() => handleClick()}
          >
            Start
          </button>

          {/* <button className=" px-8 py-2 bg-slate-300 text-slate-700 rounded-lg shadow-lg font-semibold text-xl">
            How to play
          </button> */}
        </div>
      ) : hasFailedShowSolution ? (
        <div className={`${isStatsModal || isHowToPlayModal ? "blur-lg" : "blur-none"} `}>
          <AnswerModal numbers={numbers} />
        </div>
      ) : (
        // <MainComponent
        //   livesArray={livesArray}
        //   setLivesArray={setLivesArray}
        //   currentAttempt={currentAttempt}
        //   completeAttempt={completeAttempt}
        //   numbers={numbers}
        //   setCurrentAttempt={setCurrentAttempt}
        //   setCompleteAttempt={setCompleteAttempt}
        //   numberObj={numberObj}
        //   setNumberObj={setNumberObj}
        //   setIsLivesRemainingModal={setIsLivesRemainingModal}
        // />
        <div className={`${isStatsModal || isHowToPlayModal ? "blur-lg" : "blur-none"} `}>
          <div className=" font-semibold text-md text-center mt-2 max-sm:text-sm max-sm:mt-1">
            {getDateFormatStart()}
          </div>

          <div
            className={` flex flex-col justify-center items-center py-2 px-4 gap-2 max-sm:gap-1 ${
              isStatsModal || isHowToPlayModal ? "blur-lg" : "blur-none"
            } `}
          >
            <div className="flex flex-col items-center gap-2 mt-2 max-sm:gap-1 max-sm:mt-0">
              <TargetNumber />
              {isSolved ? (
                <LivesAttemptedComplete lastLife={lastLife} />
              ) : (
                <LivesAttempted livesArray={livesArray} setLivesArray={setLivesArray} />
              )}
            </div>
            {/* {!achievedTargetNum && <StatsModal />} */}
            <div>
              {achievedTargetNum && !isConfetti && (
                <ConfettiExplosion
                  force={0.9}
                  duration={3450}
                  particleCount={550}
                  width={900}
                />
              )}
            </div>
            {/* {isLivesRemainingModal && <LivesModal lives={lives} />} */}
            <div className=" relative">
              <DisplayNone />
              <div className="absolute top-0 left-0">
                <DisplayOutput
                  currentAttempt={currentAttempt}
                  completeAttempt={isSolved ? mySolution : completeAttempt}
                />
              </div>
            </div>
            {isSolved ? (
              <div className=" text-2xl font-bold my-2 "> Congrats!</div>
            ) : (
              <div className="max-sm:mt-1  ">
                <GenNumbers
                  numbers={numbers}
                  currentAttempt={currentAttempt}
                  setCurrentAttempt={setCurrentAttempt}
                  setCompleteAttempt={setCompleteAttempt}
                  numberObj={numberObj}
                  setNumberObj={setNumberObj}
                  // targetNumber={targetNumber}
                  completeAttempt={completeAttempt}
                  setIsLivesRemainingModal={setIsLivesRemainingModal}
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={`w-full absolute bottom-0 flex items-center  ${
          !isDarkMode
            ? "bg-[#131e2611] text-[rgba(255, 255, 255, 0.171)]"
            : " bg-[#dce4e616] text-[rgb(255, 255, 255)]"
        }`}
      >
        <a
          href="https://www.ashrafmedia.com"
          className=" text-center m-auto p-2  font-semibold max-sm:text-md  max-sm:text-sm"
        >
          {" "}
          created by @ashrafmedia
        </a>
      </div>
    </div>
  );
}

export default App;
