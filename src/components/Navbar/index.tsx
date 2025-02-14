import { MdQuiz } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router";
import { FaFileImport, FaXmark } from "react-icons/fa6";

import { FaShapes } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="relative border-b-1 border-[#432B18] flex flex-col gap-4 justify-center pb-5 pt-5 px-12 items-center text-white md:items-center md:flex-row md:justify-between md:gap-6">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <MdQuiz size={28} className="text-white" />
        <span className="text-white font-bold text-2xl">
          <span className="text-orange-400">Quiz</span>
          son
        </span>
      </div>

      <div className="hidden flex gap-12 items-center md:flex md:gap-6 md:text-sm">
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

      {isCollapsed ? (
        <IoMenu
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="flex text-orange-50 md:hidden"
          size={24}
        />
      ) : (
        <FaXmark
          size={24}
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="flex text-orange-50 md:hidden"
        />
      )}

      <div
        className={`${
          isCollapsed ? "hidden" : "block"
        } bg-[#281c14]/95 p-4 rounded-2xl border-2 border-orange-300/40 absolute w-50 h-auto top-40 z-10`}
      >
        <div className="flex flex-col gap-8 text-center">
          <span className="font-semibold text-sm">
            <Link to="/" className="flex gap-2 items-center justify-center">
              <FaHouseChimney />
              Home
            </Link>
          </span>

          <span className="font-semibold text-sm">
            <a
              href="#Features"
              className="flex gap-2 items-center justify-center"
            >
              <FaShapes />
              Features
            </a>
          </span>

          <span className="font-semibold text-sm">
            <a
              href="#JSONFormat"
              className="flex gap-2 items-center justify-center"
            >
              <FaCode />
              JSON Format
            </a>
          </span>

          <span className="font-semibold text-sm">
            <a href="#About" className="flex gap-2 items-center justify-center">
              <IoDocumentText />
              About
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
