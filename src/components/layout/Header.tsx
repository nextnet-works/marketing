import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Logo from "../../assets/logo.svg?react";

const buttons = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
] as const;

export const Header = () => {
  const buttonClass = "text-white-500";

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="#" className="flex items-center justify-center">
        <Logo className="h-36 w-auto" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {buttons.map((button) => (
          <Button
            key={button.label}
            variant="link"
            asChild
            className={buttonClass}
          >
            <Link href={button.href}>{button.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
};
