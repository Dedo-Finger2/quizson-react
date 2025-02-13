import { LuFileJson2 } from "react-icons/lu";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { LuImport } from "react-icons/lu";
import UploadFileSection from "../components/UploadFile";
import Navbar from "../components/Navbar";

function UploadFilePage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex flex-col justify-center h-full w-full px-6 sm:px-24 md:px-48 lg:px-56">
        <div className="flex flex-col gap-6 text-orange-50">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl font-bold flex flex-col gap-2 items-center sm:items-start lg:text-3xl lg:flex-row lg:items-center lg:gap-4">
              <LuImport className="lg:size-14" size={38} />
              Import a quiz
            </h1>
            <p className="text-sm text-neutral-400 w-full text-center sm:text-start lg:text-lg">
              Import your quiz by uploading a .json file, or paste the json code
              and start your quiz right way!
            </p>
          </div>

          <div className="flex text-center gap-4 justify-between">
            <div className="hover:cursor-pointer bg-orange-400/20 border border-orange-400/50 py-1 w-full font-semibold">
              <h1 className="flex gap-2 items-center justify-center lg:text-xl">
                <LuFileJson2 />
                File
              </h1>
            </div>
            <div className="hover:cursor-not-allowed text-neutral-400 border border-neutral-500/50 py-1 w-full font-semibold">
              <h1 className="flex gap-2 items-center justify-center lg:text-xl">
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
