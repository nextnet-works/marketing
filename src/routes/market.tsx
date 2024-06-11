import { DaoList } from "@/components/market/DaoList";
import { Stats } from "@/components/market/Stats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: Market,
});

function Market() {
  return (
    <>
      <Stats />
      <DaoList />
    </>
  );
}
