import { Link } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Card } from "../ui/card";
import { daos } from "../market/DaoList";

type StatsProps = {
  daoId: string;
};

export const Stats = ({ daoId }: StatsProps) => {
  const dao = daos.find((dao) => dao.id === daoId);
  if (!dao) return null;
  return (
    <Card className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-100">
            {dao.name}
          </h1>
          <p className="mt-4 text-gray-600 md:text-xl/relaxed dark:text-gray-400">
            {dao.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {dao.category.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-indigo-600 text-white"
              >
                {category} DAO
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <TwitterLogoIcon className="h-5 w-5" />
              Twitter
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-indigo-500 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <DiscordLogoIcon className="h-5 w-5" />
              Discord
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <GitHubLogoIcon className="h-5 w-5" />
              GitHub
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <div className="flex items-center justify-between gap-1">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Revenues:
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                {dao.revenues}
              </div>
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Code Commits:
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                {dao.gitPushes}
              </div>
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Community:
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                {dao.contributors}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={dao.avatarUrl}
            width="550"
            height="550"
            alt={dao.name}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>
    </Card>
  );
};
