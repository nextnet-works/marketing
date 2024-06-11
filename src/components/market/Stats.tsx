import { DollarSignIcon, GitCommitVerticalIcon, UsersIcon } from "lucide-react";
import { Card } from "../ui/card";

const statsData = [
  {
    title: "Revenues",
    icon: DollarSignIcon,
    value: "$1.2M",
  },
  {
    title: "Expenses",
    icon: DollarSignIcon,
    value: "$800K",
  },
  {
    title: "DAOs",
    icon: UsersIcon,
    value: "124",
  },
  {
    title: "Contributors",
    icon: UsersIcon,
    value: "3,450",
  },
  {
    title: "Commits",
    icon: GitCommitVerticalIcon,
    value: "12,345",
  },
] as const;

export const Stats = () => (
  <Card className="bg-gray-100 dark:bg-gray-800 py-8 px-4 lg:px-6 ">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">DAO Marketplace</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore and discover the latest decentralized autonomous
          organizations.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md"
          >
            <stat.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{stat.title}</div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  </Card>
);
