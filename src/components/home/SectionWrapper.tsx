import React from "react";

type SectionProps = {
  children: React.ReactNode;
};

export const SectionWrapper = ({ children }: SectionProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 min-h-[calc(100vh-126x)]">
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
};
