import { Link } from "@tanstack/react-router";
import { SectionWrapper } from "./SectionWrapper";
import { Button } from "../ui/button";

export const Section5 = () => {
  return (
    <SectionWrapper>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">
            About Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            NextNet Protocol: Decentralizing the Internet
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            NextNet Protocol is on a mission to create a decentralized,
            user-centric internet that empowers individuals and communities. By
            leveraging blockchain technology and decentralized infrastructure,
            we're building a platform that puts control back in the hands of
            users, ensuring privacy, security, and equitable access to
            information and opportunities.
          </p>
        </div>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">
            Get Involved
          </div>
          <h3 className="text-2xl font-bold tracking-tighter">
            Join the NextNet Community
          </h3>
          <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            Become a part of the NextNet movement and help shape the future of
            the decentralized internet. Explore the various ways you can get
            involved and contribute to our mission.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row w-full">
            <Button asChild variant="outline">
              <Link href="#">Join Community</Link>
            </Button>
            <Button>
              <Link href="#">Contribute to the Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
