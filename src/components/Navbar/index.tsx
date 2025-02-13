import { MdQuiz } from "react-icons/md";

function Navbar() {
  return (
    <div className="border-b-1 border-[#432B18] flex justify-center pb-5 pt-5 px-12 items-center text-white">
      <div className="flex flex-col items-center gap-2">
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
