import { useStateStore } from "../zustand";
import { usePersistStore } from "../zustandPersist";

const TargetNumber = () => {
  const { targetNumber } = useStateStore();
  const { isDarkMode } = usePersistStore();

  return (
    <div
      className={` border flex flex-col gap-1 shadow-md rounded ${
        isDarkMode ? "border-white border-opacity-40" : "border-black border-opacity-40"
      }   p-3 font-extrabold text-3xl flex justify-center items-center  min-w-[80px] max-sm:text-md max-sm:p-2  max-sm:min-w-[10px]`}
    >
      {targetNumber}

      <p
        className={` text-xs font-semibold ${
          isDarkMode ? "text-slate-300" : "text-gray-500"
        }`}
      >
        Target Number
      </p>
    </div>
  );
};

export default TargetNumber;
