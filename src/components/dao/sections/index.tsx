import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { HomeIcon, SettingsIcon, UsersIcon, GlobeIcon } from "lucide-react";
import { HomeSection } from "./home/index";
import { Infrastructure } from "./Infrastructure";
import { Financials } from "./Financials";
import { Governance } from "./Governance";
import { Analytics } from "./Analytics";
import { Contributors } from "./Contributors";
import { useNavigate } from "@tanstack/react-router";
import { Route } from "@/routes/market/$daoId";

const sections = [
  {
    name: "Home",
    icon: HomeIcon,
    component: HomeSection,
  },
  {
    name: "Infrastructure",
    icon: SettingsIcon,
    component: Infrastructure,
  },
  {
    name: "Financials",
    icon: UsersIcon,
    component: Financials,
  },
  {
    name: "Governance",
    icon: GlobeIcon,
    component: Governance,
  },
  {
    name: "Contributors",
    icon: UsersIcon,
    component: Contributors,
  },
  {
    name: "Analytics",
    icon: GlobeIcon,
    component: Analytics,
  },
] as const;

export const Sections = ({ daoId }: { daoId: string }) => {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <Tabs
      defaultValue={tab}
      onValueChange={(value) =>
        navigate({ search: { tab: value as typeof tab } })
      }
    >
      <TabsList className="flex w-full justify-center gap-4">
        {sections.map((section) => (
          <TabsTrigger value={section.name} className="flex items-center gap-2">
            <section.icon className="h-5 w-5" />
            {section.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {sections.map((section) => (
        <TabsContent value={section.name} key={section.name} className="mt-24">
          <section.component daoId={daoId} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
