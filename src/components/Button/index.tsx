type ButtonProps = {
  content: string;
  size: "default" | "big";
  textColor: string;
  bgColor: string;
  bgColorHover: string;
  icon?: React.ReactNode;
};

function Button({
  content,
  textColor,
  bgColor,
  bgColorHover,
  size,
  icon,
}: ButtonProps) {
  return (
    <button
      className={`${
        size === "big" ? "text-xl px-8 py-2" : "text-md px-5 py-1.5"
      } transition-colors ease-in-out ${textColor} ${bgColor} font-bold flex items-center gap-2 rounded-md ${bgColorHover} hover:cursor-pointer`}
    >
      {icon ? icon : ""}
      {content}
    </button>
  );
}

export default Button;
