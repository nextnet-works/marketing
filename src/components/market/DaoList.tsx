import { Dao, DaoItem } from "./DaoItem";

const daos: Dao[] = [
  {
    name: "DeFi Protocol DAO",
    description: "A decentralized finance protocol DAO",
    governance: "decentralized",
    revenues: 3500000,
    expenses: 1000000,
    contributors: 450,
    proposals: 200,
    gitPushes: 1500,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    name: "NFT Marketplace DAO",
    description: "A decentralized NFT marketplace DAO",
    governance: "decentralized",
    revenues: 1200000,
    expenses: 600000,
    contributors: 200,
    proposals: 80,
    gitPushes: 600,
    avatarUrl: "https://i.pravatar.cc/301",
  },
  {
    name: "Social Media DAO",
    description: "A social media DAO",
    governance: "hybrid",
    revenues: 750000,
    expenses: 300000,
    contributors: 320,
    proposals: 150,
    gitPushes: 900,
    avatarUrl: "https://i.pravatar.cc/302",
  },
  {
    name: "Gaming Guild DAO",
    description: "A decentralized gaming guild DAO",
    governance: "decentralized",
    revenues: 5000000,
    expenses: 2500000,
    contributors: 520,
    proposals: 350,
    gitPushes: 2200,
    avatarUrl: "https://i.pravatar.cc/303",
  },
  {
    name: "Web3 Development DAO",
    description: "A web3 development DAO",
    governance: "centralized",
    revenues: 950000,
    expenses: 450000,
    contributors: 150,
    proposals: 90,
    gitPushes: 800,
    avatarUrl: "https://i.pravatar.cc/304",
  },
  {
    name: "Metaverse DAO",
    description: "A decentralized metaverse DAO",
    governance: "hybrid",
    revenues: 2800000,
    expenses: 1500000,
    contributors: 400,
    proposals: 220,
    gitPushes: 1700,
    avatarUrl: "https://i.pravatar.cc/305",
  },
  {
    name: "Decentralized Finance DAO",
    description: "A decentralized finance DAO",
    governance: "decentralized",
    revenues: 4200000,
    expenses: 2100000,
    contributors: 340,
    proposals: 190,
    gitPushes: 1200,
    avatarUrl: "https://i.pravatar.cc/306",
  },
  {
    name: "Content Creation DAO",
    description: "A content creation DAO",
    governance: "hybrid",
    revenues: 600000,
    expenses: 300000,
    contributors: 180,
    proposals: 70,
    gitPushes: 500,
    avatarUrl: "https://i.pravatar.cc/307",
  },
  {
    name: "Insurance DAO",
    description: "An insurance DAO",
    governance: "centralized",
    revenues: 1800000,
    expenses: 900000,
    contributors: 250,
    proposals: 120,
    gitPushes: 1000,
    avatarUrl: "https://i.pravatar.cc/308",
  },
];

export const DaoList = () => {
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
