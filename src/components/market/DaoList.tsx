import { Route } from "@/routes/market/index";
import { DaoItem } from "./DaoItem";
import { daos } from "@/lib/mock";

// const LOGO_TOKEN = "pk_LIVAP5iSTZa72Y5Iqm7PEQ";

export const DaoList = () => {
  const { section } = Route.useSearch();

  if (section === "home") {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Top 3 DAOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daos.slice(0, 3).map((dao, index) => (
            <DaoItem key={index} dao={dao} />
          ))}
        </div>
        <h2 className="text-2xl font-bold"> New DAOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daos.slice(3, 6).map((dao, index) => (
            <DaoItem key={index} dao={dao} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {daos.map((dao, index) => (
          <DaoItem key={index} dao={dao} />
        ))}
      </div>
    </div>
  );
};
