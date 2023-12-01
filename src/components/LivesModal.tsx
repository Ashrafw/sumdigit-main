import React from "react";

const LivesModal = ({ lives }: { lives: number }) => {
  return (
    <div className="absolute  bg-black bg-opacity-5 w-screen h-screen top-0 left-0 flex justify-center items-center">
      <div
        className=" max-w-[480px] bg-[#2b7373] z-40 p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="modal-container">
            <h2 className=" text-xl font-bold">You have {lives - 1} remaining</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivesModal;
