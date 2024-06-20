import { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "../ui/button";

const walletAddress = "0x1234...abcd";

type ConnectWalletButtonProps = {
  className?: string;
};
const ConnectWalletButton = ({ className }: ConnectWalletButtonProps) => {
  const [connected, setConnected] = useState(false);

  const toggleConnection = () => {
    setConnected(!connected);
  };

  return (
    <Button onClick={toggleConnection} size="lg" className={className}>
      <Wallet className="w-6 h-6 mr-2" />
      {connected ? walletAddress : "Connect Wallet"}
    </Button>
  );
};

export default ConnectWalletButton;
