type AlternativeProps = {
  id: number;
  content: string;
  onChange: React.Dispatch<React.SetStateAction<number>>;
};

function Alternative({ content, id, onChange }: AlternativeProps) {
  return (
    <label
      htmlFor={`user-answer-${id}`}
      className="flex flex-row items-center gap-4 border-2 border-orange-300/20 p-4 rounded-lg transition-transform ease-in-out hover:scale-105 hover:border-orange-400/90 appearance-none"
    >
      <input
        className="appearance-none size-5 rounded-full border-2 border-orange-400
               checked:before:content-[''] checked:before:block checked:before:size-2
               checked:before:bg-orange-400 checked:before:rounded-full
               checked:before:absolute checked:before:top-1/2 checked:before:left-1/2
               checked:before:-translate-x-1/2 checked:before:-translate-y-1/2
               relative outline-orange-400"
        type="radio"
        name="userAnswer"
        value={id}
        onChange={(e) => onChange(Number(e.target.value))}
        id={`user-answer-${id}`}
      />
      <span className="font-semibold w-full select-none text-sm/relaxed">
        {content}
      </span>
    </label>
  );
}

export default Alternative;
