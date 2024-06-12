import React, { useState } from 'react'
import { Wallet } from 'lucide-react'

const ConnectWalletButton = () => {
    const [connected, setConnected] = useState(false)
    const walletAddress = '0x1234...abcd'

    const toggleConnection = () => {
        setConnected(!connected);
    };

    return (
        <button
            onClick={toggleConnection}
            className={`
                px-6 
                py-2 
                text-lg 
                font-medium 
                text-white 
                bg-blue-600 
                rounded-lg 
                transition-all 
                duration-150
                hover:shadow-md 
                hover:shadow-blue-500/50
                flex
                items-center
            `}>
            <Wallet className="w-6 h-6 mr-2" />
            {connected ? walletAddress : 'Connect Wallet'}
        </button>
    );
};

export default ConnectWalletButton;
