import { TypographyH1 } from "@/components/typography/h1";
import { TypographyLead } from "@/components/typography/lead";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createFileRoute } from "@tanstack/react-router";

const TEAM = [
  {
    name: "Ron Hill",
    role: "Co-Founder & CEO",
    bio: "Jane has over 15 years of experience in the tech industry, with a focus on building successful startups.",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "John Smith",
    role: "Co-Founder & CTO",
    bio: "John has a deep technical background and has led engineering teams at several successful startups.",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Co-Founder & COO",
    bio: "Sarah has a strong background in operations and has helped scale several companies to success.",
    avatar: "/placeholder-user.jpg",
  },
] as const;

export const Route = createFileRoute("/team")({
  component: Team,
});

function Team() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen gap-24">
      <div className="space-y-2 text-center">
        <TypographyH1>Meet the Founding Team</TypographyH1>
        <TypographyLead>
          Our founding team has decades of experience in the industry and is
          dedicated to building the best product for our customers.
        </TypographyLead>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-3">
            <Avatar className="h-24 w-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
