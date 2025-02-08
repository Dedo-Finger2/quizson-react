import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full items-center text-orange-100/70 flex flex-col gap-8">
      <span>@A. Neto - antonioimportant@gmail.com</span>
      <div className="flex gap-4">
        <CiLinkedin
          className="transition-colors ease-in-out hover:text-orange-400 hover:cursor-pointer"
          size={18}
        />
        <FiGithub
          className="transition-colors ease-in-out hover:text-orange-400 hover:cursor-pointer"
          size={18}
        />
        <FaInstagram
          className="transition-colors ease-in-out hover:text-orange-400 hover:cursor-pointer"
          size={18}
        />
      </div>
      <span className="font-light">@2025 Quizson</span>
    </div>
  );
}

export default Footer;
