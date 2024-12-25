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
    setTimeout(() => fullNameInputRef.current?.focus(), 1000);
  };

  return (
    <div className="flex flex-col gap-16 lg:gap-64 py-8">
      <Hero />
      <Cards scrollToContact={scrollToContact} />
      <Projects />
      <EmailForm ref={fullNameInputRef} />
    </div>
  );
}
