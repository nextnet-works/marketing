import { useState } from 'react';
import { HeaderControllerContext } from './HeaderControllerContext';

type HeaderControllerProviderProps = {
  children: React.ReactNode
};

export function HeaderControllerProvider({ children }: HeaderControllerProviderProps) {
  const [showConnectWallet, setShowConnectWallet] = useState(true);

  return (
    <HeaderControllerContext.Provider value={{ showConnectWallet, setShowConnectWallet }}>
      {children}
    </HeaderControllerContext.Provider>
  );
}