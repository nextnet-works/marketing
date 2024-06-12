import { Button } from "../ui/button";
import { HomeIcon, PlusIcon, SearchIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

const sidebarSections = [
  {
    section: "home",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    section: "explore",
    title: "Explore",
    icon: <SearchIcon />,
  },
  {
    section: "create_dao",
    title: "Create DAO",
    icon: <PlusIcon />,
  },
] as const;

export const SideBar = () => {
  return (
    <aside className="w-64 bg-gray-800 rounded-sm p-2">
      <ul className="flex flex-col gap-2">
        {sidebarSections.map((s) => (
          <li key={s.section} className="w-full">
            <Link
              className="w-full flex gap-2 items-center"
              search={{
                section: s.section,
              }}
              to="/market"
            >
              {({ isActive }) => {
                return (
                  <Button
                    variant={isActive ? "default" : "secondary"}
                    className="w-full flex gap-2 justify-start"
                  >
                    {s.icon}
                    <span>{s.title}</span>
                  </Button>
                );
              }}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
