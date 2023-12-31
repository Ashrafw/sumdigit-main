import { usePersistStore } from "../zustandPersist";
import { useStateStore } from "../zustand";
import TargetNumber from "./TargetNumber";

const AnswerModal = ({ numbers }: { numbers: number[] }) => {
  const { isDarkMode, answer } = usePersistStore();
  const { targetNumber } = useStateStore();

  return (
    <div
      className={`  bg-opacity-20 w-full pt-6 flex justify-center items-center  max-sm:pt-1 `}
    >
      <div
        className={` flex flex-col justify-center items-center px-4 gap-4 max-sm:px- `}
      >
        <div
          className={` relative  blur-none shadow-xl  ${
            isDarkMode ? "bg-[#172934] text-slate-100" : " bg-slate-200 text-black"
          } p-6 rounded-lg`}
        >
          <h1 className=" text-xl font-bold mb-4  max-sm:text-md">Today's Solution</h1>
          <h1 className=" text-xl font-bold mb-4">
            <TargetNumber />
          </h1>
          <div className=" relative">
            <div className="">
              <div
                className={` grid grid-cols-5 gap-2 shadow-sm border ${
                  isDarkMode ? "border-white " : "border-black "
                } border-opacity-25 rounded-md p-2`}
              >
                {answer?.length > 0 &&
                  answer.map((row, j) => (
                    <>
                      {row.map((comValue, i) => (
                        <div
                          key={`complete-${i}-${j}`}
                          className={` w-[70px] h-[35px] max-sm:w-[50px]  border shadow-md ${
                            isDarkMode ? "border-white  " : "border-black "
                          }  border-opacity-10 ${
                            targetNumber === comValue
                              ? " bg-emerald-500 text-slate-100"
                              : i === 4
                              ? "bg-[#19C9C8] bg-opacity-50"
                              : !isDarkMode
                              ? "text-zinc-900 bg-gray-300 bg-opacity-20 "
                              : "bg-zinc-900 text-slate-100"
                          }   rounded-md flex items-center justify-center text-lg font-bold max-sm:text-md`}
                        >
                          {comValue}
                        </div>
                      ))}{" "}
                    </>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className=" text-md font-bold mt-4">The numbers</h1>

            <div className=" flex gap-2 justify-center flex-wrap mt-2">
              {numbers.map((num, i) => (
                <div
                  key={`btn-act-answer-${i}`}
                  className={` w-[55px] h-[45px] max-sm:w-[50px]  max-sm:h-[30px] max-sm:text- shadow-md flex justify-center items-center text-lg font-bold ${
                    false ? " cursor-not-allowed opacity-10 " : "bg-opacity-80"
                  } bg-black  ${
                    i === 0
                      ? "rounded-tl-lg"
                      : i === 2
                      ? "rounded-tr-lg"
                      : i === 3
                      ? "rounded-bl-lg"
                      : i === 5
                      ? "rounded-br-lg"
                      : ""
                  } rounded-lg ${isDarkMode ? " text-slate-100" : "  text-slate-100"}`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
          <div
            className={`flex items-end justify-center gap-2 p-2 rounded-md mt-4 shadow-md ${
              isDarkMode ? " bg-[rgba(117,202,231,0.22)] " : " "
            }`}
          >
            <h1 className=" text-md font-bold py-2">Good luck tomorrow !</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
