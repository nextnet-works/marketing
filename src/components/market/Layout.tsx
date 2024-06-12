import { SideBar } from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex gap-4 min-h-[calc(100dvh-56px)] p-4">
      <SideBar />
      {children}
    </div>
  );
};
