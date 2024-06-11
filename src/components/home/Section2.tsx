import { Section } from "./Section";

const sectionsData = [
  {
    title: "Start CloudDAO business",
    description:
      "Create your permissionless open cloud businesses in minutes. Offer full transparency and alignment of interests by simply incorporating in a decentralized way.",
  },
  {
    title: "Abstracted Cloud Operations",
    description:
      "Codify and automate every aspect of your cloud business, utilizing the era of cloud-native, open-source economy and decentralized infrastructure.",
  },
  {
    title: "The Power Of DAO Community",
    description:
      "Promote project funding, product development, and business sustainability through a genuinely democratic, collaborative, and incentive-based approach.",
  },
] as const;

export const Section2 = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {sectionsData.map((section, index) => (
            <div className="grid gap-1" key={index}>
              <h3 className="text-lg font-bold">{section.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
