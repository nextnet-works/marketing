import { SectionWrapper } from "./SectionWrapper";
import HeroCloudImage from "../../assets/hero_cloud_image.jpeg"

export const Section3 = () => {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Why Now?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The era of open-source software and cloud-native businesses
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Cloud-native businesses are shifting toward code-based operations  while driving demand for more flexible & abstracted multi-cloud architecture to avoid vendor lock-in and the rising demand driven by AI for alternative & cheaper infrastructure offers.
            <br /><br />This underscores the need for decentralized cloud solutions and superior business models that align with Web3's promises and the open-source economy ethos to enable sustainable and democratized product development.
            Our platform provides a revolutionary environment for creating secure, transparent, immutable cloud-native businesses today.
            </p>
          </div>
        </div>
        <img
          src={HeroCloudImage}
          width="550"
          height="310"
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
      </div>
    </SectionWrapper>
  );
};
