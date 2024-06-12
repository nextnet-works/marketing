import { Card } from "../ui/card";
import { SideBar } from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex gap-4 min-h-[calc(100dvh-56px)] p-4">
      <SideBar />
      <Card className="flex-1 bg-gray-100 dark:bg-gray-800 w-full py-12 flex flex-col gap-24 p-4">
        {children}
      </Card>
    </div>
  );
};
