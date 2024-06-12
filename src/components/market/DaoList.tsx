import { Route } from "@/routes/market/index";
import { Dao, DaoItem } from "./DaoItem";

const LOGO_TOKEN = "pk_LIVAP5iSTZa72Y5Iqm7PEQ";

export const daos: Dao[] = [
  {
    id: "1",
    name: "DeFi Protocol DAO",
    description: "A decentralized finance protocol DAO",
    category: ["DeFi"],
    governance: "decentralized",
    revenues: 3500000,
    expenses: 1000000,
    contributors: 450,
    proposals: 200,
    gitPushes: 1500,
    avatarUrl: `https://img.logo.dev/nvidia.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "2",
    name: "NFT Marketplace DAO",
    category: ["NFT"],
    description: "A decentralized NFT marketplace DAO",
    governance: "decentralized",
    revenues: 1200000,
    expenses: 600000,
    contributors: 200,
    proposals: 80,
    gitPushes: 600,
    avatarUrl: `https://img.logo.dev/ethereum.org?token=${LOGO_TOKEN}`,
  },
  {
    id: "3",
    name: "Social Media DAO",
    category: ["Social"],
    description: "A social media DAO",
    governance: "hybrid",
    revenues: 750000,
    expenses: 300000,
    contributors: 320,
    proposals: 150,
    gitPushes: 900,
    avatarUrl: `https://img.logo.dev/facebook.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "4",
    name: "Gaming Guild DAO",
    category: ["Gaming"],
    description: "A decentralized gaming guild DAO",
    governance: "decentralized",
    revenues: 5000000,
    expenses: 2500000,
    contributors: 520,
    proposals: 350,
    gitPushes: 2200,
    avatarUrl: `https://img.logo.dev/sony.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "5",
    name: "Web3 Development DAO",
    description: "A web3 development DAO",
    category: ["Web3"],
    governance: "centralized",
    revenues: 950000,
    expenses: 450000,
    contributors: 150,
    proposals: 90,
    gitPushes: 800,
    avatarUrl: `https://img.logo.dev/google.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "6",
    name: "Metaverse DAO",
    category: ["Gaming", "NFT"],
    description: "A decentralized metaverse DAO",
    governance: "hybrid",
    revenues: 2800000,
    expenses: 1500000,
    contributors: 400,
    proposals: 220,
    gitPushes: 1700,
    avatarUrl: `https://img.logo.dev/microsoft.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "7",
    name: "Decentralized Finance DAO",
    category: ["DeFi"],
    description: "A decentralized finance DAO",
    governance: "decentralized",
    revenues: 4200000,
    expenses: 2100000,
    contributors: 340,
    proposals: 190,
    gitPushes: 1200,
    avatarUrl: `https://img.logo.dev/apple.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "8",
    name: "Content Creation DAO",
    category: ["Social"],
    description: "A content creation DAO",
    governance: "hybrid",
    revenues: 600000,
    expenses: 300000,
    contributors: 180,
    proposals: 70,
    gitPushes: 500,
    avatarUrl: `https://img.logo.dev/amazon.com?token=${LOGO_TOKEN}`,
  },
  {
    id: "9",
    name: "Insurance DAO",
    category: ["DeFi"],
    description: "An insurance DAO",
    governance: "centralized",
    revenues: 1800000,
    expenses: 900000,
    contributors: 250,
    proposals: 120,
    gitPushes: 1000,
    avatarUrl: `https://img.logo.dev/netflix.com?token=${LOGO_TOKEN}`,
  },
];

export const DaoList = () => {
  const { section } = Route.useSearch();

  if (section === "home") {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Top 3 DAOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daos.slice(0, 3).map((dao, index) => (
            <DaoItem key={index} dao={dao} />
          ))}
        </div>
        <h2 className="text-2xl font-bold"> New DAOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daos.slice(3, 6).map((dao, index) => (
            <DaoItem key={index} dao={dao} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {daos.map((dao, index) => (
          <DaoItem key={index} dao={dao} />
        ))}
      </div>
    </div>
  );
};
