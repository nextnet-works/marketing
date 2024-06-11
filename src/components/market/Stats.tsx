import {
  DollarSignIcon,
  GitCommitVerticalIcon,
  LucideProps,
  UsersIcon,
} from "lucide-react";
import { Card } from "../ui/card";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Stat = {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  value: string | number;
};

const statsData: Stat[] = [
  {
    title: "DAOs",
    icon: UsersIcon,
    value: 345,
  },
  {
    title: "Contributors",
    icon: UsersIcon,
    value: 345,
  },
  {
    title: "Revenues",
    icon: DollarSignIcon,
    value: "1.2M",
  },
  {
    title: "Expenses",
    icon: DollarSignIcon,
    value: "0.5M",
  },
  {
    title: "Commits",
    icon: GitCommitVerticalIcon,
    value: 1234,
  },
] as const;

const statsTimeFrames = ["7 days", "30 days", "6 months", "1 year"] as const;

export const Stats = () => (
  <Card className="bg-gray-100 dark:bg-gray-800 py-8 px-4 lg:px-6 ">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore and discover the latest decentralized cloud businesses on the internet.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ToggleGroup type="single" className="w-fit ml-auto">
          {statsTimeFrames.map((timeFrame) => (
            <ToggleGroupItem key={timeFrame} value={timeFrame}>
              {timeFrame}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
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
      </div>{" "}
    </div>
  </Card>
);
