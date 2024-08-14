import BoxIcon from "@/assets/icons/box.svg?react";
import MountainIcon from "@/assets/icons/mountain.svg?react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = {
  scrollToContact: () => void;
};

export const Cards = ({ scrollToContact }: CardProps) => {
  return (
    <p className="flex flex-wrap gap-4">
      <Card className="flex gap-4 bg-blue-700 mx-auto p-4 max-w-xl">
        <div className="flex items-center h-full">
          <BoxIcon className="lg:block hidden w-24 h-24" />
        </div>
        <div className="bg-blue-70 border-transparent">
          <CardHeader>
            <CardTitle className="text-orange-500">Mission & Vision</CardTitle>
          </CardHeader>
          <CardContent className="h-full text-gray-200">
            <p>
              NextNet. Works is a team of open-source developers focused on
              building orchestration tools for truly decentralized clouds.
            </p>
            <p>
              We believe the networks of the future will need to overcome
              current cloud barriers with an open-source and decentralized
              structure.
            </p>
          </CardContent>
        </div>
      </Card>
      <Card className="flex gap-4 bg-red-50 mx-auto p-4 max-w-xl">
        <div className="bg-red-50 border-transparent">
          <CardHeader>
            <CardTitle className="text-red-500">Join Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">
              Are you ready to shape the future of cloud technology? Whether
              you're an innovator looking to join a dynamic team or an investor
              eager to support groundbreaking projects, we invite you to be part
              of our journey.
            </p>
            <p className="text-gray-800">
              Explore career opportunities, discover our cutting-edge solutions,
              and learn how you can contribute to our mission.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              size="lg"
              className="ml-auto w-full lg:w-36"
              onClick={scrollToContact}
            >
              Let's Go
            </Button>
          </CardFooter>
        </div>
        <div className="flex items-center h-full">
          <MountainIcon className="lg:block hidden w-24 h-24" />
        </div>
      </Card>
    </p>
  );
};
