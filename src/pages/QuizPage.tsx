import Navbar from "../components/Navbar";
import Alternative from "../components/Quiz/Alternative";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ProgressBar from "../components/Quiz/ProgressBar";

function QuizPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center mt-16">
        <div className="text-orange-50 flex flex-col gap-8 h-full w-250">
          {/* Header */}
          <ProgressBar
            title={"Question 1/6"}
            percentage={10}
            description={
              <span className="text-sm text-orange-100/80">
                <span>04:00</span> left
              </span>
            }
          />
          {/* Question */}
          <div className="flex gap-4 select-none">
            <div className="p-4 bg-orange-300/20 rounded-xl flex items-center justify-center">
              <span className="border-2 font-bold border-orange-50 rounded-full px-2 flex items-center justify-center">
                5
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="font-bold text-xl">5. Paris</h1>
              <span className="font-medium text-sm text-orange-100/80">
                What is the capital of France?
              </span>
            </div>
          </div>
          {/* Alternatives */}
          <div className="grid grid-cols-2 gap-4">
            <Alternative content="Alternative 01" id={1} />
            <Alternative content="Alternative 02" id={2} />
            <Alternative content="Alternative 03" id={3} />
            <Alternative content="Alternative 04" id={4} />
            <Alternative content="Alternative 05" id={5} />
          </div>
          {/* Question controls */}
          <div className="flex justify-between select-none">
            <button className="flex flex-row gap-2 items-center bg-orange-400/20 text-neutral-400 py-1.5 px-6 rounded-sm hover:cursor-not-allowed font-semibold text-base">
              <FaArrowLeft />
              Previous
            </button>
            <button className="flex flex-row gap-2 items-center bg-orange-400 py-1.5 px-6 rounded-sm hover:bg-orange-500 hover:cursor-pointer font-semibold text-base">
              Next
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
