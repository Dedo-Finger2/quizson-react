import Navbar from "../components/Navbar";
import Card from "../components/Result/Card";
import ProgressBar from "../components/Quiz/ProgressBar";

import { FaCheck, FaXmark } from "react-icons/fa6";
import { TbConfetti } from "react-icons/tb";
import { RiLoopLeftFill } from "react-icons/ri";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

type UserAnswer = {
  questionNumber: number;
  questionText: string;
  userGuessNumber: number;
  userGuessText: string;
  correctGuessNumber: number;
  correctGuessText: string;
};

function ResultPage() {
  const { width, height } = useWindowSize();

  const userAnswers = useRef<UserAnswer[]>([]);
  const [userCorrectGuesses, setUserCorrectGuesses] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [progressBarPercentage, setProgressBarPercentage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const sessionStorageUserAnswers = sessionStorage.getItem("userAnswers");

    if (!sessionStorageUserAnswers) {
      navigate("/");
      return;
    }

    const jsonData: UserAnswer[] = JSON.parse(sessionStorageUserAnswers);

    userAnswers.current = jsonData;

    setTotalQuestions(userAnswers.current.length);

    for (const result of userAnswers.current) {
      if (result.userGuessNumber === result.correctGuessNumber)
        setUserCorrectGuesses((prev) => (prev += 1));
    }
  }, [navigate]);

  useEffect(() => {
    setProgressBarPercentage((userCorrectGuesses / totalQuestions) * 100);
  }, [totalQuestions, userCorrectGuesses]);

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
      <div className="text-orange-50 flex flex-col w-full px-6 mt-12 gap-12 pb-12 sm:px-20 md:px-32">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-6 font-bold text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl">
            <TbConfetti
              className="lg:size-10"
              size={26}
              style={{ transform: "scaleX(-1)" }}
            />
            <h1>
              You got <span>{userCorrectGuesses}</span> of{" "}
              <span>{totalQuestions}</span> right!
            </h1>
            <TbConfetti className="lg:size-10" id="rewardId" size={26} />
          </div>
          <span className="text-sm text-center text-orange-100/80 md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className="flex flex-col gap-12">
          {/* Question bar */}
          <div className="w-full">
            <ProgressBar
              title={`${userCorrectGuesses}/${totalQuestions} Questions`}
              percentage={progressBarPercentage}
              description={`${progressBarPercentage}%`}
            />
          </div>
          <button
            onClick={() => navigate("/quiz")}
            className="bg-orange-400 hover:bg-orange-500 cursor-pointer p-1 rounded-lg font-semibold flex gap-2 items-center justify-center lg:text-2xl"
          >
            <RiLoopLeftFill size={20} />
            Do it again
          </button>
          {/* Questions results */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {userAnswers.current
              ? userAnswers.current.map((answer, index) => (
                  <Card
                    key={index}
                    icon={
                      answer.correctGuessNumber === answer.userGuessNumber ? (
                        <FaCheck size={20} />
                      ) : (
                        <FaXmark size={20} />
                      )
                    }
                    title={`${answer.questionNumber}. ${answer.questionText}`}
                    correctAnswer={`${answer.correctGuessNumber}. ${answer.correctGuessText}`}
                    userAnswer={`${answer.userGuessNumber}. ${answer.userGuessText}`}
                  />
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
