import { Section1 } from "@/components/home/Section1";
import { Section2 } from "@/components/home/Section2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
}
