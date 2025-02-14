import { FaFileImport } from "react-icons/fa6";
import { readJsonFile } from "../../api/functions/read-json-file";
import { useNavigate } from "react-router";

function UploadFileSection() {
  const navigate = useNavigate();

  async function handleUploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files ? e.target.files[0] : null;

    const data = await readJsonFile(file);

    sessionStorage.setItem("quizData", JSON.stringify(data));

    navigate("/quiz");
  }

  return (
    <div className="flex flex-col gap-4 border border-orange-400 bg-orange-400/5 p-6 rounded-2xl">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <FaFileImport className="text-orange-100 lg:size-12" size={32} />
          <span className="text-sm text-neutral-400 lg:text-base xl:text-lg">
            Only JSON files are supported!
          </span>
        </div>
        <p className="font-semibold text-base text-orange-100 lg:text-xl xl:text-2xl">
          Upload your file
        </p>
      </div>
      <label>
        <input
          type="file"
          className="z-10"
          accept=".json"
          onChange={async (e) => handleUploadFile(e)}
          hidden
        />
        <div className="shadow-sm cursor-pointer bg-orange-400 hover:bg-orange-500 flex gap-2 items-center justify-center rounded-md py-1 font-semibold lg:text-xl xl:text-2xl">
          Choose a file
        </div>
      </label>
    </div>
  );
}

export default UploadFileSection;
