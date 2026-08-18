export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="font-mono text-xs tracking-wider text-amber/80 mb-3">
      {"// "}
      {children}
    </div>
  );
}
