type TypographyLeadProps = {
  children: React.ReactNode;
};
export function TypographyLead({ children }: TypographyLeadProps) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}
