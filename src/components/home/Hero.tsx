import SantaCloudsLogo from "@/assets/logos/clouds.svg?react";

export const Hero = () => {
  return (
    <div className="flex justify-center text-center lg:text-left">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 lg:gap-16">
        <h1 className="max-w-3xl px-4">
          Developing infrastructure technologies for the{" "}
          <span className="text-orange-500">
            next generation abstracted clouds
          </span>
        </h1>
        <SantaCloudsLogo className="w-64 lg:w-96 max-w-[90dvw] h-auto lg:h-96" />
      </div>
    </div>
  );
};
