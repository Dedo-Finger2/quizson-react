import { FaUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  userAnswer: string;
  correctAnswer: string;
};

function Card({ icon, title, userAnswer, correctAnswer }: CardProps) {
  return (
    <div className="flex flex-col gap-4 select-none items-start border-b border-b-orange-400/40 pb-6 lg:border-none">
      <div className="p-4 bg-orange-300/20 rounded-xl flex items-center justify-center w-full">
        {icon}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-base lg:text-lg">{title}</h1>
        <div className="flex gap-4 flex-col">
          <span className="flex gap-2 items-center font-medium text-sm text-orange-100/80 lg:text-base">
            <FaCheck className="text-orange-200 w-auto h-auto" />
            <div className="flex w-full">{correctAnswer}</div>
          </span>
          <span className="flex gap-2 items-center font-medium text-sm text-orange-100/80 lg:text-base">
            <FaUser className="text-orange-200" />
            <div className="flex w-full">{userAnswer}</div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
