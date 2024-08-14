import { LoaderIcon } from "lucide-react";

export const Loader = () => (
  <div className="top-1/2 left-1/2 absolute flex flex-col justify-center items-center gap-8 m-auto transform -translate-x-1/2 -translate-y-1/2 position">
    <LoaderIcon size={64} className="m-auto animate-spin" />
    <h1 className="text-4xl">Loading...</h1>
  </div>
);
