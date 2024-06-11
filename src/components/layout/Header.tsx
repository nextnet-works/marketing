import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import Logo from "../../assets/logo.svg?react";
export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-50">
      <Link href="#" className="flex items-center justify-center">
        <Logo className="h-36 w-auto" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button variant="link" asChild>
          <Link href="#">Features</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">Pricing</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">About</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">Contact</Link>
        </Button>
      </nav>
    </header>
  );
};
