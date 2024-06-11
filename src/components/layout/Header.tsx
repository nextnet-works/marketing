import { Link } from "@tanstack/react-router";
import { MountainIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-50">
      <Link href="#" className="flex items-center justify-center">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">NextNet Protocol</span>
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
