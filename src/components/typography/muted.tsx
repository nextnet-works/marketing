type TypographyMutedProps = {
  children: React.ReactNode;
};
export function TypographyMuted({ children }: TypographyMutedProps) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
