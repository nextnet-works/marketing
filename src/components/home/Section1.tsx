import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";

export const Section1 = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            SaaS Your CloudDAO
          </h1>
          <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            An Open Governance Cloud Protocol "OGCP" /n
            Providing a declarative specification for business modeling, multicloud operations and
            decentralized governance using a unified permisionless ledger.
          </h2>
        </div>
        <Button asChild size="lg" className="w-72">
          <Link href="#">Go To App</Link>
        </Button>
      </div>
    </Section>
  );
};
