import { LuFileJson2 } from "react-icons/lu";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { LuImport } from "react-icons/lu";
import UploadFileSection from "../components/UploadFile";
import Navbar from "../components/Navbar";

function UploadFilePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 text-orange-50">
          <div className="flex flex-col gap-2 w-100">
            <h1 className="text-3xl font-bold flex gap-2 items-center">
              <LuImport />
              Import a quiz
            </h1>
            <span className="text-sm text-neutral-400">
              Import your quiz by uploading a .json file, or paste the json code
              and start your quiz right way!
            </span>
          </div>

          <div className="flex text-center gap-4 justify-between">
            <div className="hover:cursor-pointer bg-orange-400/20 border border-orange-400/50 py-1 w-full font-semibold">
              <h1 className="flex gap-2 items-center justify-center">
                <LuFileJson2 />
                File
              </h1>
            </div>
            <div className="hover:cursor-not-allowed text-neutral-400 border border-neutral-500/50 py-1 w-full font-semibold">
              <h1 className="flex gap-2 items-center justify-center">
                <HiMiniPencilSquare />
                Text
              </h1>
            </div>
          </div>

          {/* Upload file section */}
          <UploadFileSection />
        </div>
      </div>
    </div>
  );
}

export default UploadFilePage;
