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
    <div className="flex gap-4 select-none items-center">
      <div className="p-4 bg-orange-300/20 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="flex gap-6">
          <span className="flex gap-2 items-center font-medium text-sm text-orange-100/80">
            <FaCheck className="text-orange-200" />
            {correctAnswer}
          </span>
          <div className="bg-orange-300/30 h-full w-[1px] text-white/0">.</div>
          <span className="flex gap-2 items-center font-medium text-sm text-orange-100/80">
            <FaUser className="text-orange-200" />
            {userAnswer}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
