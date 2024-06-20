import { Layout } from "@/components/home/Layout";
// import { Section1 } from "@/components/home/Section1";
// import { Section2 } from "@/components/home/Section2";
// import { Section3 } from "@/components/home/Section3";
// import { Section4 } from "@/components/home/Section4";
// import { Section5 } from "@/components/home/Section5";
// import Section6 from "@/components/home/Section6";
import { useHeaderController } from "@/components/layout/HeaderControllerContext";
import { TypographyH1 } from "@/components/typography/h1";
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
      <TypographyH1>Coming soon</TypographyH1>
    </Layout>
  );
}
