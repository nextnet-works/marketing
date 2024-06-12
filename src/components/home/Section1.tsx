import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { SectionWrapper } from "./SectionWrapper";

export const Section1 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            SaaS Your CloudDAO
          </h1>
          <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Enable a SaaS like experiance for building your cloud-native DAO business,<br />
            fully codified by the Open Governance Cloud Protocol "OGCP".
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
      </div>
    </SectionWrapper>
  );
};
