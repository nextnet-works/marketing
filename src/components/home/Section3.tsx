import { Section } from "./Section";

export const Section3 = () => {
  return (
    <Section>
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Why Now?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The era of open-source software and cloud native businesses
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The convergence of critical trends makes it an ideal time for DAO creation on our platform. Cloud-native businesses are shifting toward code-based operations, driving the demand for flexible, multi-cloud solutions. Avoiding vendor lock-in and reducing costs are paramount, leading to the adoption of abstracted cloud infrastructures. Web3 business models and the open-source economy enable sustainable and democratized product development. The increasing challenges in multi-cloud environments and rising demand driven by AI for alternatve  & cheaper infrastructure offers underscore the need for decentralized cloud infrastructure. Our platform offers an ideal environment for creating secure, transparent, and immutable cloud-native businesses today.
            </p>
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/612e29f939931e7abcbde11b_saas%20Preview-p-800.png"
          width="550"
          height="310"
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
      </div>
    </Section>
  );
};
