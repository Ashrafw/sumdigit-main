import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DisplayNone from "./components/DisplayNone";
import Operation from "./components/Operation";
import GenNumbers from "./components/GenNumbers";
import TargetNumber from "./components/TargetNumber";
import LivesAttempted from "./components/LivesAttempted";
import ResultNumber from "./components/ResultNumber";
import DisplayOutput from "./components/DisplayOutput";

function App() {
  const [count, setCount] = useState(0);
  const [targetNumber, setTargetNumber] = useState(45);
  const [numbers, setNumbers] = useState([4, 5, 8, 20, 4, 10]);
  const [currentAttempt, setCurrentAttempt] = useState<(string | number)[]>([]);
  const [completeAttempt, setCompleteAttempt] = useState<(string | number)[][]>([]);
  const [resultNumbers, setResultNumbers] = useState<number[]>([]);
  const initialValue = 0;
  const [numberObj, setNumberObj] = useState(() => {
    const newObj = [];
    numbers.forEach((value, index) => {
      newObj[index] = { id: index + 1, value, selected: false, result: false };
    });
    return newObj;
  });
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
    <div className="w-screen">
      <Navbar />
      <div className=" flex flex-col justify-center items-center py-2 px-4 gap-10">
        <div className="flex flex-col items-center gap-4 mt-2">
          <TargetNumber targetNumber={targetNumber} />
          <LivesAttempted />
        </div>
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;
