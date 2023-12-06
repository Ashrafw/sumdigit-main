import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useStateStore } from "../zustand";

type LiveTypes = {
  lastLife: number;
};
const LivesAttemptedComplete = ({ lastLife }: LiveTypes) => {
  const [livesCompArray, setLivesCompArray] = useState<string[]>([]);
  useEffect(() => {
    if (lastLife === 3) {
      setLivesCompArray(["true", "true", "true"]);
    } else if (lastLife === 2) {
      setLivesCompArray(["false", "true", "true"]);
    } else if (lastLife === 1) {
      setLivesCompArray(["false", "false", "true"]);
    } else if (lastLife === 0) {
      setLivesCompArray(["false", "false", "false"]);
    }
  }, [lastLife]);
  return (
    <div className=" flex gap-3">
      {" "}
      {livesCompArray.map((item, index) => (
        <FaHeart
          key={`key-heart-complete-${index}`}
          className={
            item === "true"
              ? " text-[#19C9C8]  text-xl"
              : " text-[#19C9C8] text-opacity-10 text-xl"
          }
        />
      ))}
    </div>
  );
};

export default LivesAttemptedComplete;
