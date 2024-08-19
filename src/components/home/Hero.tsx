import SantaCloudsLogo from "@/assets/logos/clouds.svg?react";

export const Hero = () => {
  return (
    <div className="flex justify-center text-center lg:text-left">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-64 lg:gap-16">
        <h1 className="max-w-3xl">
          Developing infrastructure technologies for the <br />{" "}
          <span className="text-orange-500">
            next generation abstracted clouds
          </span>
        </h1>
        <SantaCloudsLogo className="w-96 max-w-[90dvw] h-96" />
      </div>
    </div>
  );
};
