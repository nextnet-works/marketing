import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Section1 = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 min-h-[calc(100vh-126x)]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              SaaS Your CloudDAO
            </h1>
            <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The Open governance cloud protocol provides a declarative
              specification for business modeling, multicloud operations and
              decentralized governance using a unified permisionless ledger
            </h2>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="w-72">
              <Link href="#">Go To App</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
