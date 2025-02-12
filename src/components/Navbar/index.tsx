import { MdQuiz } from "react-icons/md";

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
    </div>
  );
}

export default Navbar;
