import { createContext, useContext } from 'react';

interface HeaderControllerContextProps {
  showConnectWallet: boolean;
  setShowConnectWallet: (show: boolean) => void;
}

export const HeaderControllerContext = createContext<HeaderControllerContextProps | undefined>(undefined);

export function useHeaderController() {
  const context = useContext(HeaderControllerContext);
  if (!context) {
    throw new Error('useHeaderController must be used within a HeaderControllerProvider');
  }
  return context;
}