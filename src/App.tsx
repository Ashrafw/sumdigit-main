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
const getDateFormat = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
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
  } = usePersistStore();
  const { isIncomplete, objectArr, currentArr, completeArr, setIsIncomplete } =
    usePersistIncompleteStore();
  const { isHowToPlayModal, lives, targetNumber, setStartTime, isStatsModal } =
    useStateStore();
  const [isLivesRemainingModal, setIsLivesRemainingModal] = useState(false);
  const [numbers, setNumbers] = useState([25, 50, 4, 6, 75, 2]);
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

  // const [checkIfSolved, setCheckIfSolved] = useState(() => {
  //   const date = new Date();
  //   const newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  //   if (newDate !== lastGameDate) {
  //     return false;
  //   } else {
  //     return false;
  //   }
  // });

  useEffect(() => {
    if (getDateFormat() !== lastGameDate) {
      // if (newDate !== "lastGameDate") {
      setIsSolved(false);
      setAchievedTargetNum(false);
      setIsStartGame(false);
      setIsIncomplete(false);
    }
    // setIsSolved(false);
  }, []);
  console.log("lastGameDate", lastGameDate);
  //
  const [livesArray, setLivesArray] = useState<string[]>([]);
  const [numberObj, setNumberObj] = useState(() => {
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
  //
  const handleClick = () => {
    const time = new Date();
    setStartTime(time);
    setIsStartGame(true);
    setAchievedTargetNum(false);
  };
  console.log("getDateFormat()", getDateFormat());
  console.log("achievedTargetNum", achievedTargetNum);
  console.log("isStartGame", isStartGame);
  console.log("isIncomplete", isIncomplete);
  console.log("isSolved", isSolved);
  return (
    <div
      className={`w-screen h-screen relative  ${
        isDarkMode
          ? "bg-[#242424] text-[rgba(238, 238, 238, 0.87)]"
          : " bg-[#dce4e6] text-gray-950"
      }`}
    >
      <Navbar />
      {isStatsModal && <StatsModal />}
      {isHowToPlayModal && <HowToPlayModal />}
      {isSolved ? (
        <div
          className={` flex flex-col justify-center items-center py-2 px-4 gap-4 ${
            isStatsModal || isHowToPlayModal ? "blur-sm" : "blur-none"
          } ">}`}
        >
          <div className="flex flex-col items-center gap-3 mt-2 ">
            <TargetNumber />
            <LivesAttemptedComplete lastLife={lastLife} />
          </div>
          <div className=" relative">
            <DisplayNone />
            <div className="absolute top-0 left-0">
              <DisplayOutput
                currentAttempt={currentAttempt}
                completeAttempt={mySolution}
              />
            </div>
          </div>
          <div className=" text-2xl font-bold my-4"> Congrats!</div>
          {/* <div className=" "><GenNumbersComplete numberObj={numberObj} /></div> */}
        </div>
      ) : !isStartGame && !isIncomplete && !isSolved ? (
        <div className=" max-w-[970px] w-[90%] m-auto h-[90%] rounded-lg shadow-lg text-white  bg-slate-600 bg-opacity-80 flex  justify-center items-center flex-col gap-6">
          <h1 className=" text-center space-y-2 text-2xl p-2 font-semibold ">
            Today's Target Number is{" "}
            <span className=" font-extrabold shadow p-1 bg-slate-400 rounded-md">
              {targetNumber}
            </span>{" "}
          </h1>
          <button
            className=" px-16 py-2 bg-slate-800 rounded-lg shadow-lg font-semibold text-xl"
            onClick={() => handleClick()}
          >
            Start
          </button>

          {/* <button className=" px-8 py-2 bg-slate-300 text-slate-700 rounded-lg shadow-lg font-semibold text-xl">
            How to play
          </button> */}
        </div>
      ) : (
        <MainComponent
          livesArray={livesArray}
          setLivesArray={setLivesArray}
          currentAttempt={currentAttempt}
          completeAttempt={completeAttempt}
          numbers={numbers}
          setCurrentAttempt={setCurrentAttempt}
          setCompleteAttempt={setCompleteAttempt}
          numberObj={numberObj}
          setNumberObj={setNumberObj}
          setIsLivesRemainingModal={setIsLivesRemainingModal}
        />

        // <div
        //   className={` flex flex-col justify-center items-center py-2 px-4 gap-4 ${
        //     isStatsModal || isHowToPlayModal ? "blur-sm" : "blur-none"
        //   } ">}`}
        // >
        //   <div className="flex flex-col items-center gap-3 mt-2 ">
        //     <TargetNumber />
        //     <LivesAttempted livesArray={livesArray} setLivesArray={setLivesArray} />
        //   </div>
        //   {/* {!achievedTargetNum && <StatsModal />} */}
        //   <div>
        //     {achievedTargetNum && (
        //       <ConfettiExplosion
        //         force={0.9}
        //         duration={6000}
        //         particleCount={650}
        //         width={1600}
        //       />
        //     )}
        //   </div>
        //   {/* {isLivesRemainingModal && <LivesModal lives={lives} />} */}
        //   <div className=" relative">
        //     <DisplayNone />
        //     <div className="absolute top-0 left-0">
        //       <DisplayOutput
        //         currentAttempt={currentAttempt}
        //         completeAttempt={completeAttempt}
        //       />
        //     </div>
        //   </div>
        //   <div className="  ">
        //     <GenNumbers
        //       numbers={numbers}
        //       currentAttempt={currentAttempt}
        //       setCurrentAttempt={setCurrentAttempt}
        //       setCompleteAttempt={setCompleteAttempt}
        //       numberObj={numberObj}
        //       setNumberObj={setNumberObj}
        //       // targetNumber={targetNumber}
        //       completeAttempt={completeAttempt}
        //       setIsLivesRemainingModal={setIsLivesRemainingModal}
        //     />
        //   </div>
        // </div>
      )}
      <p className=" w-full text-center mb-auto p-2 absolute bottom-0 ">
        {" "}
        created by @ashrafmedia
      </p>
    </div>
  );
}

export default App;
