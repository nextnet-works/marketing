import { SectionWrapper } from "./SectionWrapper";
import StartCloudDAO from "../../assets/start_clouddao_business.svg?react";
import AbstractedCloudOperations from "../../assets/abstracted_cloud_operations.svg?react";
import ThePowerOfDAOCommunity from "../../assets/power_of_dao.svg?react";

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
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="mx-auto grid items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {sectionsData.map((section, index) => (
            <div
              className="grid gap-1 text-center justify-items-center"
              key={index}
            >
              {index === 0 && (
                <StartCloudDAO
                  className="w-48 h-48 fill-current text-white"
                  fill="currrentColor"
                />
              )}
              {index === 1 && (
                <AbstractedCloudOperations
                  className="w-48 h-48 fill-current text-white"
                  fill="currentColor"
                />
              )}
              {index === 2 && (
                <ThePowerOfDAOCommunity
                  className="w-48 h-48 fill-current text-white"
                  fill="currentColor"
                />
              )}

              <h3 className="text-2xl font-bold">{section.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
