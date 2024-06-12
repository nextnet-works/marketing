import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  GlobeIcon,
  ExpandIcon,
  Home,
} from "lucide-react";
import { HomeSection } from "./Home";

type TabsProps = {
  daoId: string;
};

export const Sections = ({ daoId }: TabsProps) => {
  return (
    <div className="container px-4 md:px-6">
      <Tabs defaultValue="home">
        <TabsList className="flex w-full justify-center gap-4">
          <TabsTrigger value="home" className="flex items-center gap-2">
            <HomeIcon className="h-5 w-5" />
            Home
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="members" className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5" />
            Members
          </TabsTrigger>
          <TabsTrigger value="governance" className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            Governance
          </TabsTrigger>
          <TabsTrigger value="more" className="flex items-center gap-2">
            <ExpandIcon className="h-5 w-5" />
            More
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <HomeSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};
