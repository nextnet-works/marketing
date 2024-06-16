import { Link } from "@tanstack/react-router";
import Logo from "../../assets/logo.svg?react";
import ConnectWalletButton from "../wallet/connect-wallet";
import { useHeaderController } from "./HeaderControllerContext";

export const buttonLinkClass = "-500";

export const Header = () => {
  const { showConnectWallet } = useHeaderController();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky">
      <Link to="/" className="flex items-center justify-center">
        <Logo className="h-52 w-auto" />
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        {showConnectWallet && <ConnectWalletButton />}
      </nav>
    </header>
  );
};
