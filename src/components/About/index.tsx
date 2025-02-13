import Button from "../Button";
import svg from "./../../assets/girl-siting-hero.svg";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <div className="text-white flex flex-col gap-12 w-full">
      <img
        className="size-80 w-full h-auto rounded-2xl shadow-lg"
        src={svg}
        alt="girl-looking-to-giant-question-mark"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold" id="About">
          About
        </h1>
        <span className="text-sm">
          Quizson is designed to be both flexible and powerful, making it easy
          for you to engage with quizzes and enhance your learning. Start
          quizzing yourself today and take the first step toward improving your
          knowledge with Quizson!
        </span>
        <Button
          content={"Contact Me"}
          size={"default"}
          textColor={"text-orange-900"}
          bgColor={"bg-orange-400"}
          bgColorHover={"hover:bg-orange-500"}
          icon={<MdEmail />}
        />
      </div>
    </div>
  );
}

export default About;
