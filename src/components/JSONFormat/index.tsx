import JSONFormatImage from "./../../assets/json-format-example-no-bg.png";

import { FaQuestion } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";

const jsonFormat = {
  questions: [
    {
      title: "",
      topic: "",
      correctAnswerIndex: 0,
      alternatives: [
        {
          text: "",
        },
        {
          text: "",
        },
        {
          text: "",
        },
        {
          text: "",
        },
        {
          text: "",
        },
      ],
    },
  ],
};

function JSONFormat() {
  const [copyJsonFormatButtonContent, setCopyJsonFormatButtonContent] =
    useState("Copy to clipboard");

  function copyJsonFormatToClipboard() {
    const stringfyJsonFormat = JSON.stringify(jsonFormat);
    setCopyJsonFormatButtonContent("Copied!");
    navigator.clipboard.writeText(stringfyJsonFormat);
    setTimeout(() => {
      setCopyJsonFormatButtonContent("Copy to clipboard");
    }, 2000);
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <h1
        className="text-orange-50 font-bold text-2xl md:text-3xl"
        id="JSONFormat"
      >
        JSON Format
      </h1>
      <div className="flex flex-col gap-12 text-orange-50 sm:flex-row">
        {/* Code Image */}
        <div className="flex flex-col gap-2">
          <div className="bg-orange-400/10 border border-orange-400 p-4 flex items-center justify-center rounded-xl">
            <img className="" src={JSONFormatImage} alt="code-example" />
          </div>
          <button
            onClick={copyJsonFormatToClipboard}
            className="flex items-center justify-center gap-2 bg-orange-400 p-2 rounded-lg hover:bg-orange-500 hover:cursor-pointer font-bold"
          >
            <FaCopy />
            {copyJsonFormatButtonContent}
          </button>
        </div>
        {/* About the format */}
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400 xl:text-xl">
              <FaQuestion />
              QUESTIONS
            </span>
            <span className="text-sm text-orange-100/80 xl:text-base">
              A list containing all questions your quiz will have.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400 xl:text-xl">
              <MdOutlineTextFields />
              TEXT
            </span>
            <span className="text-sm text-orange-100/80 xl:text-base">
              The text content in that question/alternative.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400 xl:text-xl">
              <GoGoal />
              TOPIC
            </span>
            <span className="text-sm text-orange-100/80 xl:text-base">
              Main topic that quetsion talks about.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400 xl:text-xl">
              <FaCheck />
              CORRECT ANSWER INDEX
            </span>
            <span className="text-sm text-orange-100/80 xl:text-base">
              Index is the alternative number, aka 1 to 5. This field tell the
              system which of those alternatives is the correct one.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center font-bold text-orange-400 xl:text-xl">
              <FaLayerGroup />
              ALTERNATIVES
            </span>
            <span className="text-sm text-orange-100/80 xl:text-base">
              A list containing all alternatives to that question.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JSONFormat;
