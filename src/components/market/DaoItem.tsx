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
import { Dao } from "@/lib/types";

type DaoItemProps = {
  dao: Dao;
};

const daoDetails = (dao: Dao) => [
  {
    icon: <BriefcaseIcon className="w-4 h-4" />,
    label: "Governance",
    value: dao.governance,
  },
  {
    icon: <DollarSignIcon className="w-4 h-4" />,
    label: "Revenues",
    value: `$${dao.financial.revenues}`,
  },
  {
    icon: <DollarSignIcon className="w-4 h-4" />,
    label: "Expenses",
    value: `$${dao.financial.expenses}`,
  },
  {
    icon: <UsersIcon className="w-4 h-4" />,
    label: "Contributors",
    value: dao.code.contributors,
  },
  {
    icon: <ClipboardListIcon className="w-4 h-4" />,
    label: "Proposals",
    value: dao.code.proposals,
  },
  {
    icon: <GitCommitVerticalIcon className="w-4 h-4" />,
    label: "Code-pushes",
    value: dao.code.pushes,
  },
];

export const DaoItem = ({ dao }: DaoItemProps) => {
  return (
    <Link to={`/market/${dao.id}`}>
      <Card className="cursor-pointer p-4 shadow-md">
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
          {daoDetails(dao).map((detail, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2 flex-1">
                {detail.icon}
                <span>
                  {detail.label}: {detail.value}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
};
