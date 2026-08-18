import type { Accent } from "@/lib/types";

export const accentClasses: Record<
  Accent,
  { text: string; border: string; bg: string; dot: string; hoverBorder: string }
> = {
  amber: {
    text: "text-amber",
    border: "border-amber/40",
    bg: "bg-amber/10",
    dot: "bg-amber",
    hoverBorder: "hover:border-amber/40",
  },
  green: {
    text: "text-green",
    border: "border-green/40",
    bg: "bg-green/10",
    dot: "bg-green",
    hoverBorder: "hover:border-green/40",
  },
  blue: {
    text: "text-blue",
    border: "border-blue/40",
    bg: "bg-blue/10",
    dot: "bg-blue",
    hoverBorder: "hover:border-blue/40",
  },
};
