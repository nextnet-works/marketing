import { LoaderIcon } from "lucide-react";

export const Loader = () => (
  <div className="w-[100dvw] h-[100dvh] bg-[#020917] position fixed top-0 flex">
    <div
      className="m-auto flex flex-col items-center justify-center gap-8 
  position absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white
  "
    >
      <LoaderIcon size={64} className="animate-spin m-auto" />
      <h1 className="text-4xl">Loading...</h1>
    </div>
  </div>
);
