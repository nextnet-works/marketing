import { Section1 } from "@/components/home/Section1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <Section1 />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Start CloudDAO business</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create your permissionless open cloud businesses in minutes.
                  Offer full transparency and alignment of interests by simply
                  incorporating in a decentralized way.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Abstracted Cloud Operations
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Codify and automate every aspect of your cloud business,
                  utilizing the era of cloud-native, open-source economy and
                  decentralized infrastructure.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  The Power Of DAO Community
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Promote project funding, product development, and business
                  sustainability through a genuinely democratic, collaborative,
                  and incentive-based approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
