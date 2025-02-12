import { MdQuiz } from "react-icons/md";
import { FaFileImport } from "react-icons/fa";
import { Link } from "react-router";

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
          <span className="transition-colors ease-in-out font-semibold cursor-pointer hover:text-orange-400">
            <Link to="/">Home</Link>
          </span>
          <span className="transition-colors ease-in-out font-semibold cursor-pointer hover:text-orange-400">
            <a href="#Features">Features</a>
          </span>
          <span className="transition-colors ease-in-out font-semibold cursor-pointer hover:text-orange-400">
            <a href="#JSONFormat">JSON Format</a>
          </span>
          <span className="transition-colors ease-in-out font-semibold cursor-pointer hover:text-orange-400">
            <a href="#About">About</a>
          </span>
        </div>
        <Link
          className="bg-orange-400 text-md px-5 py-1.5 transition-colors ease-in-out font-bold flex items-center gap-2 rounded-md hover:cursor-pointer text-orange-800 hover:bg-orange-500"
          to="/upload-file"
        >
          <FaFileImport />
          Import
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
