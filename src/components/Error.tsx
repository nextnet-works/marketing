import { ServerCrashIcon } from "lucide-react";

type ErrorUIProps = {
  message?: string;
};

export const ErrorUI = ({ message }: ErrorUIProps) => (
  <div className="flex flex-col justify-center items-center gap-8 m-auto">
    <h1 className="text-4xl">
      {message ?? "Something went wrong. Please try again later."}
    </h1>{" "}
    <ServerCrashIcon size={64} />{" "}
  </div>
);
