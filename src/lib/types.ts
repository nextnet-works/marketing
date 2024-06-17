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
    treasury: {
      eth: number;
      dai: number;
      usdc: number;
    };
  };
  code: {
    contributors: number;
    proposals: number;
    pushes: number;
  };
  applicationsAndServices: ApplicationOrService[];
  changeManagementProposals: ChangeManagementProposal[];
};

type ApplicationOrService = {
  name: string;
  description: string;
  appLink: string;
  repositoryLink: string;
  docsLink: string;
  communityLink: string;
};

type ChangeManagementProposal = {
  id: string;
  title: string;
  version: string;
  type: "DAO Vote" | "DAO Proposal" | "DAO Change";
  status: "pending" | "approved" | "rejected";
  approvedBy: string[];
  changeSetLink: string;
  discussionLink: string;
  transactionId: string;
  date: string;
  votes: {
    yes: number;
    no: number;
  };
};
