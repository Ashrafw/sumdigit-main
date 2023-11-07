import { FaRegChartBar, FaQuestion, FaBars, FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-center mb-4 border-b-2">
      <div className=" max-w-[1000px] w-[100%] flex justify-between items-center py-2 px-4 ">
        <div className="nav-left min-w-[20%] text-2xl ">
          <FaBars />
        </div>
        <div className="  min-w-[60%] text-5xl text-center font-display ">
          Sum<span className=" text-[#19C9C8]">Digit</span>.com
        </div>
        <div className=" flex items-center justify-end text-2xl min-w-[20%] gap-5">
          <FaQuestion
            // onClick={() => setIsHowToPlayModal((prev) => !prev)}
            className="font-bold"
            style={{ cursor: "pointer" }}
          />
          <FaCog
            // onClick={() => setIsSettingModal((prev) => !prev)}
            style={{ cursor: "pointer" }}
          />
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
