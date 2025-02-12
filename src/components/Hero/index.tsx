import { FaFileImport } from "react-icons/fa";
import heroBackground from "./../../assets/hero-background.jpg";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="relative w-full flex items-center justify-center mt-8">
      <div className="flex flex-col gap-6 items-center text-white absolute z-2">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-semibold text-5xl">
            Import your{" "}
            <span className="font-bold underline underline-offset-4 text-orange-300">
              quizzes
            </span>{" "}
            in seconds
          </h1>
          <p className="font-semibold text-sm text-stone-100">
            Use{" "}
            <span className="font-bold underline underline-offset-4 text-orange-300">
              JSON
            </span>{" "}
            to import your quizzes and test your knowledge
          </p>
        </div>
        <Link
          className="bg-orange-400 text-xl px-8 py-2 transition-colors ease-in-out font-bold flex items-center gap-2 rounded-md hover:cursor-pointer text-orange-800 hover:bg-orange-500"
          to="/upload-file"
        >
          <FaFileImport />
          Import
        </Link>
      </div>
      <div className="relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-1 before:h-full before:w-full before:bg-gradient-to-t before:from-stone-900 before:to-transparent">
        <img
          className="rounded-xl"
          src={heroBackground}
          alt="hero-background"
        />
      </div>
    </div>
  );
}

export default Hero;
