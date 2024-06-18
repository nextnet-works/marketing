import { Services } from "@/components/dao/Services";
import { Sections } from "@/components/dao/sections";
import { Stats } from "@/components/dao/Stats";
import { Layout } from "@/components/market/Layout";
import { createFileRoute } from "@tanstack/react-router";

type TabSearch = {
  tab:
    | "home"
    | "infrastructure"
    | "financials"
    | "governance"
    | "analytics"
    | "contributors";
};

export const Route = createFileRoute("/market/$daoId")({
  component: Dao,
  validateSearch: (search: Record<string, unknown>): TabSearch => {
    return {
      tab: (search.tab as TabSearch["tab"]) || "home",
    };
  },
});

function Dao() {
  const { daoId } = Route.useParams();
  return (
    <Layout>
      <Stats daoId={daoId} />
      <Services daoId={daoId} />
      <Sections daoId={daoId} />
    </Layout>
  );
}
