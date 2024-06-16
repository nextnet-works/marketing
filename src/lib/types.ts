export type Dao = {
  id: string;
  name: string;
  avatarUrl: string;
  description: string;
  category: (
    | "DeFi"
    | "NFT"
    | "Social"
    | "Gaming"
    | "Web3"
    | "Cloud Services"
    | "DePin"
  )[];
  governance:
    | "decentralized"
    | "centralized"
    | "hybrid"
    | "NFT Based"
    | "Multi-Sig"
    | "Token Based";
  financial: {
    revenues: number;
    expenses: number;
    infrastructure: number;
  };
  code: {
    contributors: number;
    proposals: number;
    pushes: number;
  };
};
