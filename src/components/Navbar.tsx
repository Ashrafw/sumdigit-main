import { FaRegChartBar } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useStateStore } from "../zustand";
import { usePersistStore } from "../zustandPersist";

const Navbar = () => {
  const { setIsHowToPlayModal, isHowToPlayModal, setIsStatsModal, isStatsModal } =
    useStateStore();
  const { isDarkMode, setIsDarkMode } = usePersistStore();

  return (
    <nav
      className={` flex items-center justify-center mb-4 border-b-2 ${
        isDarkMode ? "border-[#f1f1f1]" : "border-[#61616118]"
      }`}
    >
      <div className=" max-w-[1000px] w-[100%] flex justify-between items-center py-2 px-4 ">
        <div className=" px-4 py-1  text-3xl max-sm:text-xl font-display bg-slate-950 rounded-md bg-opacity-80 text-white">
          Sum<span className=" text-[#19C9C8]">Digit</span>.com
        </div>
        <div className=" flex items-center justify-end text-2xl  max-sm:text-xl  max-sm:gap-3 min-w-[20%] gap-5">
          <button
            onClick={() => setIsHowToPlayModal(!isHowToPlayModal)}
            className=" text-sm  py-2 px-4 bg-[#131e26] text-slate-200 rounded-full font-semibold border-2 border-slate-200"
          >
            Help ?
          </button>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {!isDarkMode ? (
              <FaSun style={{ cursor: "pointer" }} />
            ) : (
              <FaMoon style={{ cursor: "pointer" }} />
            )}
          </button>

          <FaRegChartBar
            onClick={() => setIsStatsModal(!isStatsModal)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
