import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { MailIcon } from "lucide-react";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="flex gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; 2024 NextNet Protocol. All rights reserved.
      </p>
      <div className="flex gap-4 sm:gap-6">
        <Button size="icon" variant="ghost">
          <GitHubLogoIcon className="h-6 w-6" />
        </Button>
        <Button size="icon" variant="ghost">
          <TwitterLogoIcon className="h-6 w-6" />
        </Button>
        <Button size="icon" variant="ghost">
          <DiscordLogoIcon className="h-6 w-6" />
        </Button>
        <Button size="icon" variant="ghost">
          <MailIcon className="h-6 w-6" />
        </Button>
      </div>
      <nav className="flex gap-4 sm:gap-6">
        <Button variant="link" asChild>
          <Link href="#"> Terms of Service</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">Privacy</Link>
        </Button>
      </nav>
    </footer>
  );
};
