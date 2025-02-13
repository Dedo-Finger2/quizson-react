import Navbar from "../components/Navbar";
import Alternative from "../components/Quiz/Alternative";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ProgressBar from "../components/Quiz/ProgressBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { JSONFormat } from "../api/functions/read-json-file";

type UserAnswer = {
  questionId: number;
  userGuessIndex: number;
  correctGuessIndex: number;
};

function QuizPage() {
  const [quizData, setQuizData] = useState<JSONFormat>({ questions: [] });
  const [quizProgressPercentage, setQuizProgressPercentage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer>();

  function handleNextQuestion() {
    const newPercentage =
      ((currentQuestionIndex + 1) / quizData.questions.length) * 100;

    setQuizProgressPercentage(newPercentage);

    setCurrentQuestionIndex((prev) => (prev += 1));
  }

  const navigate = useNavigate();

  useEffect(() => {}, [currentQuestionIndex]);

  useEffect(() => {
    const data = sessionStorage.getItem("quizData");

    if (!data) {
      navigate("/upload-file");
      return;
    }

    const jsonData = JSON.parse(data);

    const dto: JSONFormat = {
      questions: jsonData.questions,
    };

    setQuizData(dto);
  }, [navigate]);

  useEffect(() => {
    const quizData = sessionStorage.getItem("quizData");

    if (!quizData) navigate("/upload-file");
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-12 pb-12">
        <div className="text-orange-50 flex flex-col gap-8 h-full w-full px-6">
          {/* Header */}
          <ProgressBar
            title={`Question ${currentQuestionIndex + 1}/${
              quizData.questions.length
            }`}
            percentage={quizProgressPercentage}
            description={
              <span className="text-sm text-orange-100/80">
                <span>04:00</span> left
              </span>
            }
          />
          {/* Question */}
          <div className="flex flex-col gap-4 select-none">
            <div className="py-2 px-3 bg-orange-300/20 rounded-xl flex items-center justify-center shadow-md">
              <span className="border-2 font-semibold text-base border-orange-50 rounded-full px-2 flex items-center justify-center">
                {currentQuestionIndex + 1}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="font-bold text-base/relaxed">
                {quizData.questions[currentQuestionIndex]
                  ? quizData.questions[currentQuestionIndex].title
                  : "Loading..."}
              </h1>
              <span className="font-medium text-sm text-orange-100/80">
                {currentQuestionIndex + 1}.{" "}
                {quizData.questions[currentQuestionIndex]
                  ? quizData.questions[currentQuestionIndex].topic
                  : "Loading..."}
              </span>
            </div>
          </div>
          {/* Alternatives */}
          <div className="grid grid-cols-1 gap-4">
            {quizData.questions[currentQuestionIndex]
              ? quizData.questions[currentQuestionIndex].alternatives.map(
                  (alternative, index) => (
                    <Alternative
                      content={alternative.text}
                      id={index}
                      key={index}
                    />
                  )
                )
              : "Loading..."}
          </div>
          {/* Question controls */}
          <div className="flex justify-between select-none">
            <button className="flex flex-row gap-2 items-center bg-orange-400/20 text-neutral-400 py-1.5 px-6 rounded-sm hover:cursor-not-allowed font-semibold text-base">
              <FaArrowLeft />
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              className="flex flex-row gap-2 items-center bg-orange-400 py-1.5 px-6 rounded-sm hover:bg-orange-500 hover:cursor-pointer font-semibold text-base"
            >
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
