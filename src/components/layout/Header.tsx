import { Link } from "@tanstack/react-router";
import Logo from "../../assets/logo.svg?react";
import ConnectWalletButton from "../wallet/connect-wallet";

export const buttonLinkClass = "text-white-500";
export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky">
      <Link to="/" className="flex items-center justify-center">
        <Logo className="h-36 w-auto" />
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <ConnectWalletButton />
        {/*buttons.map((button) => (
          <Button
            key={button.label}
            variant="link"
            asChild
            className={buttonLinkClass}
          >
            <Link to={button.to}>{button.label}</Link>
          </Button>
        ))*/}
      </nav>
    </header>
  );
};
