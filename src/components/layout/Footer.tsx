import Logo from "@/assets/logos/logo.svg?react";
import {
  // DiscordLogoIcon,
  GitHubLogoIcon,
  // NotionLogoIcon,
} from "@radix-ui/react-icons";
import XLogoIcon from "@/assets/companies/x.svg?react";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

const socialLinks = [
  // {
  //   icon: <NotionLogoIcon className="w-6 h-6" color="#000" />,
  //   href: "#",
  //   ariaLabel: "Notion",
  // },
  {
    icon: <XLogoIcon className="w-6 h-6" />,
    href: "https://x.com/nextnet_works?s=21&t=1xBtmNSuUOq-DmX0qkYNdA",
    ariaLabel: "X (formerly Twitter)",
  },
  {
    icon: <GitHubLogoIcon className="w-6 h-6" color="#5c6bc0" />,
    href: "https://github.com/nextnet-works/marketing",
    ariaLabel: "GitHub",
  },
  // {
  //   icon: <DiscordLogoIcon className="w-6 h-6" color="#7289da" />,
  //   href: "#",
  //   ariaLabel: "Discord",
  // },
  {
    icon: <MailIcon className="w-6 h-6" />,
    href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=contact@nextnet.works",
    ariaLabel: "Email",
  },
];

export const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-4 mx-auto p-4 max-w-7xl h-[64px] space-between">
      <div className="flex flex-1 justify-start items-center">
        <Logo className="w-auto h-6" />
      </div>
      <nav className="flex flex-1 justify-center items-center gap-4">
        <div>
          {socialLinks.map((link) => (
            <Button size="icon" variant="ghost" key={link.ariaLabel} asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </nav>
      <span className="flex flex-1 justify-end items-center">
        © 2024 NextNet. All rights reserved.
      </span>
    </footer>
  );
};
