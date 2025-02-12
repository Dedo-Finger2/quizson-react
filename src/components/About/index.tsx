import Button from "../Button";
import svg from "./../../assets/girl-siting-hero.svg";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <div className="text-white flex gap-12">
      <img
        className="size-80 rounded-2xl shadow-lg"
        src={svg}
        alt="girl-looking-to-giant-question-mark"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold" id="About">
          About
        </h1>
        <span className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          omnis velit et commodi doloribus quia, quaerat soluta voluptatem
          doloremque in aut veritatis explicabo animi! Error, repellat quaerat!
          Necessitatibus, est ea!
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
