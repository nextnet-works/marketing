import { CreateDAO } from "@/components/market/CreateDAO";
import { DaoList } from "@/components/market/DaoList";
import { Layout } from "@/components/market/Layout";
import { SideBar } from "@/components/market/SideBar";
import { Stats } from "@/components/market/Stats";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
const MarketPageSchema = z.object({
  section: z.string().optional().default("home"),
});
export type MarketPageSchema = z.infer<typeof MarketPageSchema>;

export const Route = createFileRoute("/market/")({
  component: Market,
  validateSearch: MarketPageSchema,
});

function Market() {
  const { section } = Route.useSearch();
  return (
    <Layout>
      <div className="flex-1 flex flex-col gap-4">
        {section === "home" && <Stats />}
        {section === "explore" && (
          <Input placeholder="Search..." className="w-full" />
        )}
        {section === "create_dao" && <CreateDAO />}
        {section !== "create_dao" && <DaoList />}
      </div>
    </Layout>
  );
}
