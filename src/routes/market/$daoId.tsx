import { Stats } from "@/components/dao/Stats";
import { Layout } from "@/components/market/Layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market/$daoId")({
  component: Dao,
});

function Dao() {
  const { daoId } = Route.useParams();
  return (
    <Layout>
      <Stats daoId={daoId} />
      <div>Dao ID: {daoId}</div>
    </Layout>
  );
}
