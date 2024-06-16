import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { MailIcon } from "lucide-react";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { URLS } from "@/lib/const";
import { buttonLinkClass } from "./Header";

const SOCIAL_LINKS = [
  {
    href: URLS.GITHUB,
    icon: <GitHubLogoIcon className="h-6 w-6" />,
    label: "GitHub",
  },
  {
    href: URLS.TWITTER,
    icon: <TwitterLogoIcon className="h-6 w-6" />,
    label: "Twitter",
  },
  {
    href: URLS.DISCORD,
    icon: <DiscordLogoIcon className="h-6 w-6" />,
    label: "Discord",
  },
  {
    href: URLS.EMAIL,
    icon: <MailIcon className="h-6 w-6" />,
    label: "Email",
  },
] as const;

export const Footer = () => {
  return (
    <footer className="flex gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; 2024 NextNet Protocol. All rights reserved.
      </p>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map((link, index) => (
          <Button key={index} size="icon" variant="ghost" asChild>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
      <nav className="flex gap-4 sm:gap-6">
        <Button variant="link" asChild className={buttonLinkClass}>
          <Link href={`${URLS.GITHUB}/tree/main#readme}`}>
            Terms of Service
          </Link>
        </Button>
        <Button variant="link" asChild className={buttonLinkClass}>
          <Link href={`${URLS.GITHUB}/tree/main#readme}`}>Privacy</Link>
        </Button>
      </nav>
    </footer>
  );
};
