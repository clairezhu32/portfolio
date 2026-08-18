import { upstart } from "./upstart";
import { meta } from "./meta";
import { uber } from "./uber";
import { learneo } from "./learneo";
import { zynga } from "./zynga";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [upstart, meta, uber, learneo, zynga];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
