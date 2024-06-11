import { DaoList } from "@/components/market/DaoList";
import { SideBar } from "@/components/market/SideBar";
import { Stats } from "@/components/market/Stats";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
const MarketPageSchema = z.object({
  section: z.string().optional().default("home"),
});
export type MarketPageSchema = z.infer<typeof MarketPageSchema>;

export const Route = createFileRoute("/market")({
  component: Market,
  validateSearch: MarketPageSchema,
});

function Market() {
  return (
    <div className="flex gap-8 max-w-[100dvw] w-[99dvw] p-4">
      <SideBar />
      <div className="flex-1 flex flex-col gap-4">
        <Stats />
        <DaoList />
      </div>
    </div>
  );
}
