import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const LivesAttempted = () => {
  const lives = 3;
  const [livesArray, setLivesArray] = useState<string[]>([]);
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
            item === "true "
              ? "alive text-[#19C9C8] text-opacity-30 text-2xl"
              : "dead text-[#19C9C8] text-2xl"
          }
        />
      ))}
    </div>
  );
};

export default LivesAttempted;
