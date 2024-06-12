import { Button } from "../ui/button";
import { HomeIcon, SearchIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

const sidebarSections = [
  {
    section: "home",
    icon: <HomeIcon />,
  },
  { section: "explore", icon: <SearchIcon /> },
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
                    <span>{s.section}</span>
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
