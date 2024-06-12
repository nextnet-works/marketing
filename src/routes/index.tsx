import { Layout } from "@/components/home/Layout";
import { Section1 } from "@/components/home/Section1";
import { Section2 } from "@/components/home/Section2";
import { Section3 } from "@/components/home/Section3";
import { Section4 } from "@/components/home/Section4";
import { Section5 } from "@/components/home/Section5";
import { useHeaderController } from "@/components/layout/HeaderControllerContext";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { setShowConnectWallet } = useHeaderController();

  useEffect(() => {
    setShowConnectWallet(false);
  }, [setShowConnectWallet]);

  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout>
  );
}
