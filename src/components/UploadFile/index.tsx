import { FaFileImport } from "react-icons/fa6";

function UploadFileSection() {
  return (
    <div className="flex flex-col gap-4 border border-orange-400 bg-orange-400/5 p-6 rounded-2xl">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <FaFileImport className="text-orange-100" size={32} />
          <span className="text-sm text-neutral-400">
            Only JSON files are supported!
          </span>
        </div>
        <p className="font-semibold font-xl text-orange-100">
          Upload your file
        </p>
      </div>
      <label>
        <input type="file" className="z-10" accept=".json" hidden />
        <div className="shadow-sm cursor-pointer bg-orange-400 hover:bg-orange-500 flex gap-2 items-center justify-center rounded-md py-1 font-semibold">
          Choose a file
        </div>
      </label>
    </div>
  );
}

export default UploadFileSection;
