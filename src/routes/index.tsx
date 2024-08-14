import { createFileRoute } from "@tanstack/react-router";

import { useRef } from "react";
import { EmailForm } from "@/components/home/EmailForm";
import { Projects } from "@/components/home/Projects";
import { Cards } from "@/components/home/Cards";
import { Hero } from "@/components/home/Hero";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  const scrollToContact = () => {
    fullNameInputRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => fullNameInputRef.current?.focus(), 1000); // Delay focus to ensure scroll is complete
  };

  return (
    <div className="flex flex-col gap-64 mx-auto py-12 max-w-7xl">
      <Hero />
      <Cards scrollToContact={scrollToContact} />
      <Projects />
      <EmailForm ref={fullNameInputRef} />
    </div>
  );
}
