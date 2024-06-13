import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowDownIcon } from "lucide-react";

export const Section1 = () => {
  const handleScrollDown = () =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            SaaS Your CloudDAO
          </h1>
          <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Enable a SaaS-like experience for building your cloud-native DAO
            business, fully codified by the Open Governance Cloud Protocol
            (OGCP).
          </h2>
        </div>
        <Button asChild size="lg" className="w-72">
          <Link
            to="/market"
            search={{
              section: "home",
            }}
          >
            Go To App
          </Link>
        </Button>
        <Button
          onClick={handleScrollDown}
          aria-label="Scroll Down"
          className="mt-24"
          size="icon"
          variant="ghost"
        >
          <ArrowDownIcon className="h-12 w-12" />
        </Button>
      </div>
    </SectionWrapper>
  );
};
