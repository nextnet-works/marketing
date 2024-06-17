type TypographyH3Props = {
  children: React.ReactNode;
};

export function TypographyH3({ children }: TypographyH3Props) {
  return (
    <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h3>
  );
}
