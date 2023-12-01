import { FaRegChartBar, FaQuestion, FaBars, FaCog } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
type NavbarType = {
  setIsHowToPlayModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setIsHowToPlayModal, isDarkMode, setIsDarkMode }: NavbarType) => {
  return (
    <nav className=" flex items-center justify-center mb-4 border-b-2">
      <div className=" max-w-[1000px] w-[100%] flex justify-between items-center py-2 px-4 ">
        {/* <div className="nav-left min-w-[20%] text-2xl "><FaBars /></div> */}
        <div className=" px-4 py-1  text-3xl r font-display bg-slate-950 rounded-md bg-opacity-80 text-white">
          Sum<span className=" text-[#19C9C8]">Digit</span>.com
        </div>
        <div className=" flex items-center justify-end text-2xl min-w-[20%] gap-5">
          <FaQuestion
            onClick={() => setIsHowToPlayModal((prev) => !prev)}
            className="font-bold"
            style={{ cursor: "pointer" }}
          />
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {!isDarkMode ? (
              <FaSun
                // onClick={() => setIsSettingModal((prev) => !prev)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FaMoon
                // onClick={() => setIsSettingModal((prev) => !prev)}
                style={{ cursor: "pointer" }}
              />
            )}
          </button>

          <FaRegChartBar
            // onClick={() => setIsStatsModal((prev) => !prev)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
