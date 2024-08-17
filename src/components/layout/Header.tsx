import Logo from "@/assets/logos/logo.svg?react";

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 mx-auto p-4 max-w-7xl h-[64px]">
        <Logo className="w-[133px] max-w-[50%] h-full" />
      </nav>
    </header>
  );
};
