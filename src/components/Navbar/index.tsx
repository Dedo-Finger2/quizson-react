import { MdQuiz } from "react-icons/md";
import { FaFileImport } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="border-b-1 border-[#432B18] flex justify-between pb-5 pt-5 px-12 items-center text-white">
      <div className="flex items-center gap-4">
        <MdQuiz size={28} className="text-white" />
        <span className="text-white font-bold text-2xl">
          <span className="text-orange-400">Quiz</span>
          son
        </span>
      </div>
      <div className="flex gap-12 items-center">
        <div className="flex gap-8">
          <span className="transition-colors ease-in-out font-semibold text-orange-400 cursor-pointer">
            Home
          </span>
          <span className="transition-colors ease-in-out font-semibold cursor-pointer hover:text-orange-400">
            Features
          </span>
          <span className="transition-colors ease-in-out font-semibold cursor-pointer hover:text-orange-400">
            About
          </span>
        </div>
        <button className="transition-colors ease-in-out text-orange-950 bg-orange-400 px-5 py-1.5 font-bold flex items-center gap-2 rounded-md hover:bg-orange-600 hover:cursor-pointer">
          <FaFileImport />
          Import
        </button>
      </div>
    </div>
  );
}

export default Navbar;
