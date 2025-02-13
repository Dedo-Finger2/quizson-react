import { FaFileImport } from "react-icons/fa";
import heroBackground from "./../../assets/hero-background.jpg";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="relative w-full flex items-center justify-center mt-8">
      <div className="flex flex-col gap-6 items-center text-white absolute z-2">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-semibold text-xl text-center sm:text-3xl md:text-4xl">
            Import your{" "}
            <span className="font-bold underline underline-offset-4 text-orange-300">
              quizzes
            </span>{" "}
            in seconds
          </h1>
          <p className="text-xs text-stone-100 text-center sm:text-sm md:text-base">
            Use{" "}
            <span className="font-bold underline underline-offset-4 text-orange-300">
              JSON
            </span>{" "}
            to import your quizzes and test your knowledge
          </p>
        </div>
        <Link
          className="bg-orange-400 text-sm mb-2 px-2 py-1 transition-colors ease-in-out font-bold flex items-center gap-2 rounded-md hover:cursor-pointer text-orange-800 hover:bg-orange-500 sm:px-4 sm:py-2 sm:text-base"
          to="/upload-file"
        >
          <FaFileImport />
          Import
        </Link>
      </div>
      <div className="relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-1 before:h-full before:w-full before:bg-gradient-to-t before:from-stone-900 before:to-transparent">
        <img
          className="rounded-xl h-auto w-full"
          src={heroBackground}
          alt="hero-background"
        />
      </div>
    </div>
  );
}

export default Hero;
