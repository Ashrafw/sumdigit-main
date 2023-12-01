import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

type LiveTypes = {
  livesArray: string[];
  setLivesArray: React.Dispatch<React.SetStateAction<string[]>>;
  lives: number;
  setLives: React.Dispatch<React.SetStateAction<number>>;
};
const LivesAttempted = ({ livesArray, setLivesArray, lives, setLives }: LiveTypes) => {
  useEffect(() => {
    if (lives === 3) {
      setLivesArray(["true", "true", "true"]);
    } else if (lives === 2) {
      setLivesArray(["false", "true", "true"]);
    } else if (lives === 1) {
      setLivesArray(["false", "false", "true"]);
    } else if (lives === 0) {
      setLivesArray(["false", "false", "false"]);
    }
  }, [lives]);
  return (
    <div className=" flex gap-3">
      {" "}
      {livesArray.map((item, index) => (
        <FaHeart
          key={`key-${index}`}
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

export default LivesAttempted;
