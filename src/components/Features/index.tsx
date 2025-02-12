import { BsFiletypeJson } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaRegShareFromSquare } from "react-icons/fa6";
import FeatureCard from "../FeatureCard";

function Features() {
  return (
    <div className="text-white flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold" id="Features">
          Features
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FeatureCard
          title="Import from JSON"
          description="Import quizzes using our supported JSON format"
          icon={<BsFiletypeJson size={26} />}
        />
        <FeatureCard
          title="Easy to use"
          description="We provide a easy-to-use JSON template so you can create multiple quizzes"
          icon={<FaHeart size={26} />}
        />
        <FeatureCard
          title="Compatible with AI"
          description="With AI and our template, you can create Ai generated quizzes and import them here"
          icon={<HiOutlineSparkles size={26} />}
        />
        <FeatureCard
          title="Share with your friends"
          description="Share the template you've created with your friends and challenge them"
          icon={<FaRegShareFromSquare size={26} />}
        />
      </div>
    </div>
  );
}

export default Features;
