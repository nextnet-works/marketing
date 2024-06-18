import { Route } from "@/routes/market/index";
import { DaoItem } from "./DaoItem";
import { daos } from "@/lib/mock";
import { TypographyH2 } from "../typography/h2";

// const LOGO_TOKEN = "pk_LIVAP5iSTZa72Y5Iqm7PEQ";

export const DaoList = () => {
  const { section } = Route.useSearch();

  if (section === "home") {
    return (
      <div className="space-y-4 p-8">
        <TypographyH2>Top 3 DAOs</TypographyH2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daos.slice(0, 3).map((dao, index) => (
            <DaoItem key={index} dao={dao} />
          ))}
        </div>
        {daos.length > 5 && (
          <>
            <TypographyH2>New DAOs</TypographyH2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {daos.slice(3, 6).map((dao, index) => (
                <DaoItem key={index} dao={dao} />
              ))}
            </div>
          </>
        )}
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
