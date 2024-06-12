import { Layout } from "@/components/market/Layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market/$daoId")({
  component: Dao,
});

function Dao() {
  const { daoId } = Route.useParams();
  return (
    <Layout>
      Hello Dao!
      <div>Dao ID: {daoId}</div>
    </Layout>
  );
}
