import { Layout } from "@/components/home/Layout";
import { Section1 } from "@/components/home/Section1";
import { Section2 } from "@/components/home/Section2";
import { Section3 } from "@/components/home/Section3";
import { Section4 } from "@/components/home/Section4";
import { Section5 } from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import { useHeaderController } from "@/components/layout/HeaderControllerContext";
import { TypographyH1 } from "@/components/typography/h1";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { setShowConnectWallet } = useHeaderController();
  const [pin, setPin] = useState("");

  useEffect(() => {
    setShowConnectWallet(false);
  }, [setShowConnectWallet]);

  if (pin === "142578") {
    return (
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen gap-12">
        <TypographyH1>Enter your secret 6-digit code</TypographyH1>
        <InputOTP maxLength={6} value={pin} onChange={setPin}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </Layout>
  );
}
