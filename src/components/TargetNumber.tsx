import React from "react";

const TargetNumber = ({ targetNumber }: { targetNumber: number }) => {
  return (
    <div>
      <div className=" border  border-white border-opacity-30 p-6 font-extrabold text-5xl flex justify-center items-center">
        {targetNumber}
      </div>
    </div>
  );
};

export default TargetNumber;
