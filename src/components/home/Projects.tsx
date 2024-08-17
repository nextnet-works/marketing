import SantaIcon from "@/assets/companies/santa.svg?react";
import AkashIcon from "@/assets/companies/akash.svg?react";
import BlocksIcon from "@/assets/icons/blocks.svg?react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projectData = [
  {
    icon: SantaIcon,
    title: "Santa Cloud",
    description: "Our flagship cloud computing platform",
  },
  {
    icon: AkashIcon,
    title: "Akash Validator",
    description:
      "An Akash Network Validator plays a pivotal role in the decentralized cloud computing platform, Akash Network."  
  },
  {
    icon: BlocksIcon,
    title: "Cloud & Blockchain Services",
    description:
      "Integrated solutions combining cloud and blockchain technologies",
  },
] as const;

export const Projects = () => {
  return (
    <section className="flex flex-col gap-24 text-center">
      <div>
        <h2 className="text-orange-500">Our Projects</h2>
        <h4>
          Constantly working on new projects to bring you the best technology
        </h4>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        {projectData.map((project) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  key={project.title}
                  className="flex flex-col flex-1 justify-between items-center gap-4 min-w-[200px] max-w-[300px]"
                >
                  <project.icon
                    className={`w-12 lg:w-24 h-auto ${project.title === "Santa Cloud" ? "ml-4" : undefined}`}
                  />
                  <h5>{project.title}</h5>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{project.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};
