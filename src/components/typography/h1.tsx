type TypographyH1Props = {
  children: React.ReactNode;
  [x: string]: any;
};

export function TypographyH1({ children, ...rest }: TypographyH1Props) {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight"
      {...rest}
    >
      {children}
    </h1>
  );
}
