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
function App() {
  const [count, setCount] = useState(0);
  const [targetNumber, setTargetNumber] = useState(9);
  const [numbers, setNumbers] = useState([4, 5, 8, 20, 4, 10]);
  const [currentAttempt, setCurrentAttempt] = useState<(string | number)[]>([]);
  const [completeAttempt, setCompleteAttempt] = useState<(string | number)[][]>([]);
  const [resultNumbers, setResultNumbers] = useState<number[]>([]);
  const [achievedTargetNum, setAchievedTargetNum] = useState(false);
  const [isHowToPlayModal, setIsHowToPlayModal] = useState(false);
  const [isLivesRemainingModal, setIsLivesRemainingModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  //
  //
  const [livesArray, setLivesArray] = useState<string[]>([]);
  const [lives, setLives] = useState<number>(3);
  //
  const initialValue = 0;
  const [numberObj, setNumberObj] = useState(() => {
    const newObj: any[] = [];
    numbers.forEach((value, index) => {
      newObj[index] = { id: index + 1, value, selected: false, result: false };
    });
    return newObj;
  });
  console.log("lives", lives);
  // const [numberObj, setNumberObj] = useState({
  //   1: { value: 4, selected: false },
  //   2: { value: 5, selected: false },
  //   3: { value: 8, selected: false },
  //   4: { value: 20, selected: false },
  //   5: { value: 15, selected: false },
  //   6: { value: 2, selected: false },
  // });
  console.log("numberObj", numberObj);
  console.log("currentAttempt", currentAttempt);
  console.log("completeAttempt", completeAttempt);
  return (
    <div
      className={`w-screen h-screen relative  ${
        isDarkMode
          ? "bg-[#242424] text-[rgba(238, 238, 238, 0.87)]"
          : " bg-[#dce4e6] text-gray-950"
      }`}
    >
      <Navbar
        setIsHowToPlayModal={setIsHowToPlayModal}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      {isHowToPlayModal && <HowToPlayModal setIsHowToPlayModal={setIsHowToPlayModal} />}
      <div className=" flex flex-col justify-center items-center py-2 px-4 gap-4">
        <div className="flex flex-col items-center gap-3 mt-2 ">
          <TargetNumber targetNumber={targetNumber} isDarkMode={isDarkMode} />
          <LivesAttempted
            livesArray={livesArray}
            setLivesArray={setLivesArray}
            lives={lives}
            setLives={setLives}
          />
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
        {isLivesRemainingModal && <LivesModal lives={lives} />}
        <div className=" relative">
          <DisplayNone isDarkMode={isDarkMode} />
          <div className="absolute top-0 left-0">
            <DisplayOutput
              currentAttempt={currentAttempt}
              completeAttempt={completeAttempt}
              targetNumber={targetNumber}
              isDarkMode={isDarkMode}
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
            targetNumber={targetNumber}
            achievedTargetNum={achievedTargetNum}
            setAchievedTargetNum={setAchievedTargetNum}
            setLives={setLives}
            completeAttempt={completeAttempt}
            lives={lives}
            setIsLivesRemainingModal={setIsLivesRemainingModal}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
