import { daos } from "@/lib/mock";

type AnalyticsProps = {
  daoId: string;
};

export function Analytics({ daoId }: AnalyticsProps) {
  const dao = daos.find((dao) => dao.id === daoId)!;

  if (!dao) {
    return (
      <h1 className="text-4xl font-bold text-center m-32">DAO not found</h1>
    );
  }

  return <h1 className="text-4xl font-bold text-center m-32">Coming Soon..</h1>;
}
