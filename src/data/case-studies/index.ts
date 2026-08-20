import { capstone } from "./capstone";
import { meta } from "./meta";
import { uber } from "./uber";
import { learneo } from "./learneo";
import { zynga } from "./zynga";
import { upstart } from "./upstart";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [capstone, meta, uber, learneo, zynga, upstart];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
