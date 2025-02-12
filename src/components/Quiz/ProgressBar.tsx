type ProgressBarProps = {
  title: string;
  description?: string | React.ReactNode;
  percentage: number;
};

function ProgressBar({ title, description, percentage }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-4 justify-center select-none">
      <span className="font-semibold text-lg">{title}</span>
      <div className="relative">
        <div
          style={{ width: percentage + "%" }}
          className="transition-all ease-in-out h-2 rounded-full bg-orange-400 absolute"
        ></div>
        <div className="w-full h-2 rounded-full bg-orange-300/30"></div>
      </div>
      {description ? (
        <span className="text-sm text-orange-100/80">{description}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProgressBar;
