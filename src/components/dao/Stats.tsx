import { Link } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { URLS } from "@/lib/const";
import { daos } from "@/lib/mock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

type StatsProps = {
  daoId: string;
};

export const Stats = ({ daoId }: StatsProps) => {
  const dao = daos.find((dao) => dao.id === daoId)!;
  return (
    <Card className="container grid gap-4 lg:grid-cols-2 p-4 bg-inherit">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          {dao.name}
        </CardTitle>
        <CardDescription className="md:text-xl/relaxed ">
          {dao.description}
        </CardDescription>
        <div className=" flex flex-wrap gap-2">
          {dao.category.map((category) => (
            <Badge key={category}>{category} DAO</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button asChild variant={"ghost"}>
            <Link href={URLS.TWITTER}>
              <TwitterLogoIcon className="h-5 w-5 mr-2" />
              Twitter
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={URLS.DISCORD}>
              <DiscordLogoIcon className="h-5 w-5 mr-2" />
              Discord
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={URLS.GITHUB}>
              <GitHubLogoIcon className="h-5 w-5 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </CardHeader>
      <div>
        <img
          src={dao.avatarUrl}
          width="550"
          height="550"
          alt={dao.name}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
      <CardContent>
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="flex items-center justify-between gap-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Revenues:
            </div>
            <div className="font-semibold text-gray-900 dark:text-gray-100">
              ${dao.financial.revenues}
            </div>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Expenses:
            </div>
            <div className="font-semibold text-gray-900 dark:text-gray-100">
              ${dao.financial.expenses}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="flex items-center justify-between gap-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Code Commits:
            </div>
            <div className="font-semibold text-gray-900 dark:text-gray-100">
              {dao.code.pushes}
            </div>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Community:
            </div>
            <div className="font-semibold text-gray-900 dark:text-gray-100">
              {dao.code.contributors}
            </div>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Proposals:
            </div>
            <div className="font-semibold text-gray-900 dark:text-gray-100">
              {dao.governance}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
