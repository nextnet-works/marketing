import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Logo from "../../assets/logo.svg?react";

const buttons = [
  { label: "Features", to: "/" },
  { label: "Pricing", to: "/" },
  { label: "About", to: "/" },
  { label: "Contact", to: "/" },
] as const;

export const buttonLinkClass = "text-white-500";
export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <Logo className="h-36 w-auto" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {buttons.map((button) => (
          <Button
            key={button.label}
            variant="link"
            asChild
            className={buttonLinkClass}
          >
            <Link to={button.to}>{button.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
};
