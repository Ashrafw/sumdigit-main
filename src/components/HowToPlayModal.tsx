import React from "react";
import { FaTimes, FaHeart } from "react-icons/fa";

type HowToPlayModalType = {
  setIsHowToPlayModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HowToPlayModal = ({ setIsHowToPlayModal }: HowToPlayModalType) => {
  return (
    <div
      className="absolute bg-black bg-opacity-70 w-screen h-screen top-0 left-0 flex justify-center items-center"
      onClick={() => setIsHowToPlayModal((prev) => !prev)}
    >
      <div
        className=" max-w-[480px] bg-slate-600 z-40 p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="modal-container">
            <h2 className=" text-xl font-bold">How To Play</h2>
            <h3>Get the target Number in 3 tries</h3>
            <ul>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>Show how close your guess was to the word.</li>
              <li>The color of the tiles will change.</li>
            </ul>
            <div className=" flex">
              <FaHeart />
              <FaHeart />
              <FaHeart />
            </div>
            <hr />
            <p>
              A target Number is released daily at midnight. If you haven’t already, you
              can sign up for our daily reminder email.
            </p>
          </div>
          <button
            className="absolute top-0 right-0"
            onClick={() => setIsHowToPlayModal((prev) => !prev)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;
