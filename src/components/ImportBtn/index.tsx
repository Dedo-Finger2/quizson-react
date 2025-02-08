import { FaFileImport } from "react-icons/fa6";

function ImportBtn() {
  return (
    <button className="transition-colors ease-in-out text-orange-950 bg-orange-400 px-5 py-1.5 font-bold flex items-center gap-2 rounded-md hover:bg-orange-600 hover:cursor-pointer">
      <FaFileImport />
      Import
    </button>
  );
}

export default ImportBtn;
