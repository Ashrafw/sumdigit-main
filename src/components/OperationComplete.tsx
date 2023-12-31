import { FaRedo } from "react-icons/fa";
import { usePersistStore } from "../zustandPersist";

const OperationComplete = () => {
  const { isDarkMode } = usePersistStore();

  return (
    <div
      className={` grid grid-cols-2 gap-1 ${
        isDarkMode ? "bg-[#19C9C8] bg-opacity-5" : "bg-[#ffffff] bg-opacity-20"
      }   rounded-xl`}
    >
      <button
        disabled={true}
        className=" w-[55px] h-[45px]  shadow-md font-bold flex justify-center items-center text-xl rounded-tl-xl bg-[#3a8f99] bg-opacity-70"
      >
        +
      </button>
      <button
        disabled={true}
        className=" w-[55px] h-[45px]  shadow-md font-bold  flex justify-center items-center text-xl rounded-tr-xl bg-[#3a8f99] bg-opacity-70 "
      >
        -
      </button>
      <button
        disabled={true}
        className=" w-[55px] h-[45px]  shadow-md font-bold  flex justify-center items-center text-xl  bg-[#3a8f99] bg-opacity-70 "
      >
        x
      </button>
      <button
        disabled={true}
        className=" w-[55px] h-[45px]  shadow-md font-bold  flex justify-center items-center text-xl  bg-[#3a8f99] bg-opacity-70 "
      >
        ÷
      </button>
      <button
        disabled={true}
        className={` w-[55px] h-[45px]  shadow-md font-bold  flex justify-center items-center text-xl rounded-bl-xl bg-[#3a8f99] ${
          true ? "bg-opacity-70" : "bg-opacity-30"
        }  `}
      >
        {"<-"}
      </button>
      <button
        disabled={true}
        className={`  w-[55px] h-[45px]  shadow-md  font-bold  flex justify-center items-center  rounded-br-xl bg-[#3a8f99] bg-opacity-70 ${
          false ? "bg-opacity-5" : "bg-opacity-20"
        }  `}
      >
        <FaRedo style={{ fontSize: "16px", margin: "0", padding: "0" }} />
      </button>
    </div>
  );
};

export default OperationComplete;
