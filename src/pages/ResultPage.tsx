import Navbar from "../components/Navbar";
import Card from "../components/Result/Card";
import ProgressBar from "../components/Quiz/ProgressBar";

import { FaCheck } from "react-icons/fa6";
import { TbConfetti } from "react-icons/tb";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function ResultPage() {
  const { width, height } = useWindowSize();

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Confetti
        width={width}
        height={height}
        gravity={0.15}
        colors={[
          "#FFA500",
          "#FF7F32",
          "#FF6A13",
          "#FF8C00",
          "#FF4500",
          "#FD7E14",
          "#F57C00",
          "#FF9F00",
          "#FFB84D",
        ]}
        recycle={false}
        numberOfPieces={400}
      />
      <div className="text-orange-50 flex flex-col gap-16 items-center mt-16">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-6 font-bold text-3xl">
            <TbConfetti size={36} style={{ transform: "scaleX(-1)" }} />
            <h1>
              You got <span>10</span> of <span>10</span> right!
            </h1>
            <TbConfetti id="rewardId" size={36} />
          </div>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className="flex flex-col gap-12 items-center">
          {/* Question bar */}
          <div className="w-200">
            <ProgressBar
              title={"07/10 Questions"}
              percentage={70}
              description="70%"
            />
          </div>
          {/* Questions results */}
          <div className="grid grid-cols-3 gap-12">
            <Card
              icon={<FaCheck size={20} />}
              title={"1. What is 2 + 2?"}
              userAnswer={"1. Alternativa 01"}
              correctAnswer={"2. Alternativa 02"}
            />
            <Card
              icon={<FaCheck size={20} />}
              title={"1. What is 2 + 2?"}
              userAnswer={"1. Alternativa 01"}
              correctAnswer={"2. Alternativa 02"}
            />
            <Card
              icon={<FaCheck size={20} />}
              title={"1. What is 2 + 2?"}
              userAnswer={"1. Alternativa 01"}
              correctAnswer={"2. Alternativa 02"}
            />
            <Card
              icon={<FaCheck size={20} />}
              title={"1. What is 2 + 2?"}
              userAnswer={"1. Alternativa 01"}
              correctAnswer={"2. Alternativa 02"}
            />
            <Card
              icon={<FaCheck size={20} />}
              title={"1. What is 2 + 2?"}
              userAnswer={"1. Alternativa 01"}
              correctAnswer={"2. Alternativa 02"}
            />
            <Card
              icon={<FaCheck size={20} />}
              title={"1. What is 2 + 2?"}
              userAnswer={"1. Alternativa 01"}
              correctAnswer={"2. Alternativa 02"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
