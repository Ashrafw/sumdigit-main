import React from "react";
import TargetNumber from "./TargetNumber";
import LivesAttempted from "./LivesAttempted";
import GenNumbers from "./GenNumbers";
import DisplayOutput from "./DisplayOutput";
import DisplayNone from "./DisplayNone";
import ConfettiExplosion from "react-confetti-explosion";
import { useStateStore } from "../zustand";
import { usePersistStore } from "../zustandPersist";

const MainComponent = ({
  livesArray,
  setLivesArray,
  currentAttempt,
  completeAttempt,
  numbers,
  setCurrentAttempt,
  setCompleteAttempt,
  numberObj,
  setNumberObj,
  setIsLivesRemainingModal,
}) => {
  const { isStatsModal, isHowToPlayModal } = useStateStore();
  const { achievedTargetNum } = usePersistStore();
  return (
    <div
      className={` flex flex-col justify-center items-center py-2 px-4 gap-4 ${
        isStatsModal || isHowToPlayModal ? "blur-sm" : "blur-none"
      } ">}`}
    >
      <div className="flex flex-col items-center gap-3 mt-2 ">
        <TargetNumber />
        <LivesAttempted livesArray={livesArray} setLivesArray={setLivesArray} />
      </div>
      {/* {!achievedTargetNum && <StatsModal />} */}
      <div>
        {achievedTargetNum && (
          <ConfettiExplosion
            force={0.9}
            duration={2500}
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
          setCompleteAttempt={setCompleteAttempt}
          numberObj={numberObj}
          setNumberObj={setNumberObj}
          // targetNumber={targetNumber}
          completeAttempt={completeAttempt}
          setIsLivesRemainingModal={setIsLivesRemainingModal}
        />
      </div>
    </div>
  );
};

export default MainComponent;
