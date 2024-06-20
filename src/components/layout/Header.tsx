import { Link } from "@tanstack/react-router";
import Logo from "../../assets/logo.png";
import ConnectWalletButton from "../wallet/connect-wallet";
import { useHeaderController } from "./HeaderControllerContext";
import { Button } from "../ui/button";

export const buttonLinkClass = "-500";

export const Header = () => {
  const { showConnectWallet } = useHeaderController();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky gap-24">
      <Link to="/" className="flex items-center justify-center">
        <img src={Logo} className="h-12 w-auto" />
      </Link>

      <nav className=" flex gap-4 sm:gap-6">
        <Button variant="ghost" asChild>
          <Link to="/team">Team</Link>
        </Button>
        {showConnectWallet && <ConnectWalletButton className="ml-auto" />}
      </nav>
    </header>
  );
};
