import {
  BriefcaseIcon,
  ClipboardListIcon,
  DollarSignIcon,
  GitCommitVerticalIcon,
  UsersIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type Dao = {
  name: string;
  governance: "decentralized" | "centralized" | "hybrid";
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
    <Card className="cursor-pointer bg-white dark:bg-gray-950 p-4  shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={dao.avatarUrl} alt={dao.name} />
            <AvatarFallback>{dao.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          {dao.name}
        </CardTitle>
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
  );
};
