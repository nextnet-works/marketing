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
  financial: Financial;
  infrastructure: Infrastructure[];
  code: {
    contributors: number;
    proposals: number;
    pushes: number;
    pulls: number;
    govMembers: number;
  };
  contributors: Contributors[];
  applicationsAndServices: ApplicationOrService[];
  changeManagementProposals: ChangeManagementProposal[];
};

type Contributors = {
  name: string;
  avatarUrl: string;
  type: "Core" | "Community" | "Investor" | "Advisory" | "Funding";
  votes: number;
  role: string;
  govOwnership: number;
  income: number;
  wallet: string;
  keysAttached: number;
};

type Financial = {
  revenues: number;
  expenses: number;
  infrastructure: number;
  treasury: {
    eth: number;
    dai: number;
    usdc: number;
  };
  nodes: {
    active: number;
    totalActiveDuration: number;
    remainingActiveDuration: number;
    totalBalance: number;
    remainingBalance: number;
    totalSpending: number;
    spendingPerHour: number;
  };
  revenue: {
    sales: number;
    subscriptions: number;
    other: number;
  };
  expensesData: {
    costOfGoods: number;
    marketing: number;
    RnD: number;
    GnA: number;
  };
  tokens: Token[];
};

type Token = {
  name: string;
  totalSupply: number;
  usdValue: number;
};

type ApplicationOrService = {
  name: string;
  description: string;
  appLink: string;
  repositoryLink: string;
  docsLink: string;
  communityLink: string;
};

export type ChangeManagementProposal = {
  id: string;
  name: string;
  version: string;
  type:
    | "DAO Vote"
    | "DAO Proposal"
    | "DAO Change"
    | "Contract Upgrade"
    | "Parameter Change";
  approvalRequired?:
    | "DAO Vote"
    | "DAO Proposal"
    | "DAO Change"
    | "Contract Upgrade";
  status: "pending" | "approved" | "rejected";
  approvedBy: string[];
  changeSetLink: string;
  discussionLink: string;
  transactionId: string;
  date: string;
};

type Infrastructure = {
  provider:
    | "Cloud Hosting"
    | "Database"
    | "Email Service"
    | "Identity Provider"
    | "File Storage";
  type: "External" | "Internal";
  uptime: number;
  status: "Operational" | "Offline" | "Degraded";
  spendingPerMonth: number;
  lastIncident: Date;
  description: string;
};
