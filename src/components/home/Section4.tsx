import { CheckIcon } from "lucide-react";
import { Section } from "./Section";

export const Section4 = () => {
  return (
    <Section>
      <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
        <img
          src="https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/612e29f939931e7abcbde11b_saas%20Preview-p-800.png"
          width="550"
          height="310"
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Vision & Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Allowing developers to change the cloud market with code
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our vision is to democratize the cloud and open-source ecosystems, creating a more equitable, accessible, and efficient infrastructure for all. <br/>
              Our mission is to empower developers and businesses with the tools and platform they need to create,
              manage, and grow their own decentralized, cloud-native organizations.<br/> Our decentralized model fosters collaboration,
              innovation, and fair revenue distribution, ensuring the growth and sustainability of the open-source community.
            </p>
          </div>
          <ul className="grid gap-2 py-4">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Decentralised R&D: Reward contributors, Increased decentralization
              and democratization (with the extent determined by the project).
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Offloaded services (testing, support, contribution of
              efforts/activities).
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Food Chain optimization (shark picture): Codified cloud spend &
              budgets with business input and DAO service consumption, Resources
              steering (budget & features prioritization).
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
