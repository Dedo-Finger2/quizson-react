import { LuFileJson2 } from "react-icons/lu";
import { HiMiniPencilSquare } from "react-icons/hi2";
import UploadFileSection from "../components/UploadFile";
import Navbar from "../components/Navbar";

function UploadFilePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col gap-6 text-orange-50">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Import a quiz</h1>
            <span className="text-sm text-neutral-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing
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
