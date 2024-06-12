import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { HomeIcon, SettingsIcon, UsersIcon, GlobeIcon } from "lucide-react";
import { HomeSection } from "./Home";
import { Infrastructure } from "./Infrastructure";
import { Financials } from "./Financials";
import { Governance } from "./Governance";
import { Analytics } from "./Analytics";
import { Contributors } from "./Contributors";

type TabsProps = {
  daoId: string;
};

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

export const Sections = ({ daoId }: TabsProps) => {
  console.log(daoId);
  return (
    <div className="container px-4 md:px-6">
      <Tabs defaultValue="home">
        <TabsList className="flex w-full justify-center gap-4">
          {sections.map((section) => (
            <TabsTrigger
              value={section.name}
              className="flex items-center gap-2"
            >
              <section.icon className="h-5 w-5" />
              {section.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent value={section.name}>
            <section.component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
