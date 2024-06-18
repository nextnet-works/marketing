import { BookIcon, GlobeIcon, PowerIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { daos } from "@/lib/mock";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { TypographyLead } from "@/components/typography/lead";
import { TypographyH1 } from "@/components/typography/h1";
export const Services = ({ daoId }: { daoId: string }) => {
  const dao = daos.find((dao) => dao.id === daoId)!;
  return (
    <section className="container grid gap-8 px-4 md:px-6">
      <div className="space-y-4">
        <TypographyH1>Applications & Services</TypographyH1>
        <TypographyLead>
          Explore the applications, services, and intellectual property owned by
          the Acme DAO.
        </TypographyLead>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {dao.applicationsAndServices.map((app) => (
          <Card key={app.name}>
            <CardHeader>
              <CardTitle>{app.name}</CardTitle>
              <CardDescription>{app.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <Button
                  variant="link"
                  asChild
                  className="flex items-center w-fit gap-2"
                >
                  <Link href={app.appLink}>
                    <GlobeIcon className="h-4 w-4" />
                    App
                  </Link>
                </Button>
                <Button
                  variant="link"
                  asChild
                  className="flex items-center w-fit gap-2"
                >
                  <Link href={app.repositoryLink}>
                    <GitHubLogoIcon className="h-4 w-4" />
                    Repo
                  </Link>
                </Button>
                <Button
                  variant="link"
                  asChild
                  className="flex items-center w-fit gap-2"
                >
                  <Link href={app.docsLink}>
                    <BookIcon className="h-4 w-4" />
                    Docs
                  </Link>
                </Button>
                <Button
                  variant="link"
                  asChild
                  className="flex items-center w-fit gap-2"
                >
                  <Link href={app.communityLink}>
                    <PowerIcon className="h-4 w-4" />
                    Community
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
