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
function App() {
  const [numbers, setNumbers] = useState([25, 50, 4, 6, 75, 2]);
  const [currentAttempt, setCurrentAttempt] = useState<(string | number)[]>([]);
  const [completeAttempt, setCompleteAttempt] = useState<(string | number)[][]>([]);
  const [resultNumbers, setResultNumbers] = useState<number[]>([]);
  const [isLivesRemainingModal, setIsLivesRemainingModal] = useState(false);
  const [isStartGame, setIsStartGame] = useState(false);
  const [endTime, setEndTime] = useState(null);

  const {
    isDarkMode,
    setIsDarkMode,
    isHowToPlayModal,
    lives,
    achievedTargetNum,
    targetNumber,
    setStartTime,
  } = useStateStore();

  //
  const [livesArray, setLivesArray] = useState<string[]>([]);
  const initialValue = 0;
  const [numberObj, setNumberObj] = useState(() => {
    const newObj: any[] = [];
    numbers.forEach((value, index) => {
      newObj[index] = { id: index + 1, value, selected: false, result: false };
    });
    return newObj;
  });

  const handleClick = () => {
    const time = new Date();
    console.log("time", time);
    console.log("typeof time", typeof time);
    setStartTime(time);
    setIsStartGame(true);
  };

  return (
    <div
      className={`w-screen h-screen relative  ${
        isDarkMode
          ? "bg-[#242424] text-[rgba(238, 238, 238, 0.87)]"
          : " bg-[#dce4e6] text-gray-950"
      }`}
    >
      <Navbar />
      {isHowToPlayModal && <HowToPlayModal />}
      {!isStartGame ? (
        <div className=" max-w-[90%] w-600px m-auto h-[90%] rounded-lg shadow-lg text-white  bg-slate-600 bg-opacity-80 flex  justify-center items-center flex-col gap-6">
          <h1 className=" text-3xl font-semibold ">
            Today's Target Number is{" "}
            <strong className=" font-extrabold shadow p-2 bg-slate-400 rounded-md">
              {targetNumber}
            </strong>{" "}
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
        <div className=" flex flex-col justify-center items-center py-2 px-4 gap-4">
          <div className="flex flex-col items-center gap-3 mt-2 ">
            <TargetNumber />
            <LivesAttempted livesArray={livesArray} setLivesArray={setLivesArray} />
          </div>

          <div>
            {achievedTargetNum && (
              <ConfettiExplosion
                force={0.9}
                duration={5000}
                particleCount={650}
                width={1600}
              />
            )}
          </div>
          {/* {isLivesRemainingModal && <LivesModal lives={lives} />} */}
          <div className=" relative">
            <DisplayNone />
            <div className="absolute top-0 left-0">
              <DisplayOutput
                currentAttempt={currentAttempt}
                completeAttempt={completeAttempt}
              />
            </div>
          </div>
          <div className="  ">
            <GenNumbers
              numbers={numbers}
              currentAttempt={currentAttempt}
              setCurrentAttempt={setCurrentAttempt}
              setResultNumbers={setResultNumbers}
              resultNumbers={resultNumbers}
              setCompleteAttempt={setCompleteAttempt}
              numberObj={numberObj}
              setNumberObj={setNumberObj}
              // targetNumber={targetNumber}
              completeAttempt={completeAttempt}
              setIsLivesRemainingModal={setIsLivesRemainingModal}
            />
          </div>
        </div>
      )}
      <p className=" w-full text-center mb-auto p-2 absolute bottom-0 ">
        {" "}
        created by @ashrafmedia
      </p>
    </div>
  );
}

export default App;
