import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="w-full items-center text-orange-100/70 flex flex-col gap-8">
      <span className="text-sm xl:text-base">
        A. Neto - antonioimportant@gmail.com
      </span>
      <div className="grid grid-cols-2 text-center gap-8 sm:flex xl:text-lg">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <a href="#Features">Features</a>
        </span>
        <span>
          <a href="#JSONFormat">JSON Format</a>
        </span>
        <span>
          <a href="#About">About</a>
        </span>
      </div>
      <div className="flex gap-4">
        <CiLinkedin
          className="transition-colors ease-in-out hover:text-orange-400 hover:cursor-pointer xl:size-6"
          size={18}
        />
        <FiGithub
          className="transition-colors ease-in-out hover:text-orange-400 hover:cursor-pointer xl:size-6"
          size={18}
        />
        <FaInstagram
          className="transition-colors ease-in-out hover:text-orange-400 hover:cursor-pointer xl:size-6"
          size={18}
        />
      </div>
      <span className="font-light xl:font-base xl:text-xl">@2025 Quizson</span>
    </div>
  );
}

export default Footer;
