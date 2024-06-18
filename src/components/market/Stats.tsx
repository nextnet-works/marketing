import {
  DollarSignIcon,
  GitCommitVerticalIcon,
  LucideProps,
  UsersIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { TypographyLarge } from "../typography/large";
import { TypographyLead } from "../typography/lead";

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
  <Card className="bg-inherit">
    <CardHeader>
      <CardTitle>Home</CardTitle>
      <CardDescription>
        Explore and discover the latest decentralized cloud businesses on the
        internet.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <ToggleGroup
        type="single"
        className="w-fit ml-auto bg-card p-2 rounded-2xl"
      >
        {statsTimeFrames.map((timeFrame) => (
          <ToggleGroupItem key={timeFrame} value={timeFrame}>
            {timeFrame}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="p-4 shadow rounded-lg flex flex-col items-center justify-center gap-1"
          >
            <stat.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <TypographyLarge>{stat.title}</TypographyLarge>
            <TypographyLead>{stat.value}</TypographyLead>
          </Card>
        ))}
      </div>
    </CardContent>{" "}
  </Card>
);
