import JSONFormatImage from "./../../assets/json-format-example-no-bg.png";

import { FaQuestion } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";

function JSONFormat() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-orange-50 font-bold text-3xl" id="JSONFormat">
        JSON Format
      </h1>
      <div className="flex gap-12 text-orange-50">
        {/* Code Image */}
        <div className="bg-orange-400/10 border border-orange-400 p-4 flex items-center justify-center rounded-xl">
          <img className="" src={JSONFormatImage} alt="code-example" />
        </div>
        {/* About the format */}
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400">
              <FaQuestion />
              QUESTIONS
            </span>
            <span className="text-sm text-orange-100/80">
              A list containing all questions your quiz will have.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400">
              <MdOutlineTextFields />
              TEXT
            </span>
            <span className="text-sm text-orange-100/80">
              The text content in that question/alternative.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400">
              <GoGoal />
              TOPIC
            </span>
            <span className="text-sm text-orange-100/80">
              Main topic that quetsion talks about.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400">
              <FaCheck />
              CORRECT ANSWER INDEX
            </span>
            <span className="text-sm text-orange-100/80">
              Index is the alternative number, aka 1 to 5. This field tell the
              system which of those alternatives is the correct one.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400">
              <FaLayerGroup />
              ALTERNATIVES
            </span>
            <span className="text-sm text-orange-100/80">
              A list containing all alternatives to that question.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JSONFormat;
