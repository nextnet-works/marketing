import {
  BriefcaseIcon,
  ClipboardListIcon,
  DollarSignIcon,
  GitCommitVerticalIcon,
  UsersIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "@tanstack/react-router";

export type Dao = {
  id: string;
  name: string;
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
  revenues: number;
  expenses: number;
  contributors: number;
  proposals: number;
  gitPushes: number;
  avatarUrl: string;
};

type DaoItemProps = {
  dao: Dao;
};

export const DaoItem = ({ dao }: DaoItemProps) => {
  const itemClass = "flex items-center space-x-2 text-sm text-gray-500";
  const subItem = "flex items-center space-x-2 flex-1";

  return (
    <Link to={`/market/${dao.id}`}>
      <Card className="cursor-pointer bg-white dark:bg-gray-950 p-4 shadow-md">
        <CardHeader className="flex flex-row gap-4 items-center">
          <Avatar className="w-16 h-16">
            <AvatarImage src={dao.avatarUrl} alt={dao.name} />
            <AvatarFallback>{dao.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle>{dao.name}</CardTitle>
            <CardDescription>
              {dao.description.slice(0, 120)}
              {dao.description.length > 120 && "..."}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className={itemClass}>
            <div className={subItem}>
              <BriefcaseIcon className="w-4 h-4" />
              <span> {dao.governance} </span>
            </div>
            <div className={subItem}>
              <DollarSignIcon className="w-4 h-4" />
              <span>Revenues: ${dao.revenues}</span>
            </div>
          </div>
          <div className={itemClass}>
            <div className={subItem}>
              <DollarSignIcon className="w-4 h-4" />
              <span> Expenses: ${dao.expenses}</span>
            </div>
            <div className={subItem}>
              <UsersIcon className="w-4 h-4" />
              <span>Contributors: {dao.contributors}</span>
            </div>
          </div>
          <div className={itemClass}>
            <div className={subItem}>
              <ClipboardListIcon className="w-4 h-4" />
              <span>Proposals: {dao.proposals}</span>
            </div>
            <div className={subItem}>
              <GitCommitVerticalIcon className="w-4 h-4" />
              <span>Git-pushes: {dao.gitPushes}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
