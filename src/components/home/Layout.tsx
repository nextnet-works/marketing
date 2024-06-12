type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <div className="p-4 mx-auto">{children}</div>;
};
