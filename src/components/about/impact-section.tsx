import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export function AboutImpactSection() {
  const impactStudies = caseStudies.filter((study) => study.slug !== "capstone");

  return (
    <div>
      <h2 className="font-mono text-xs tracking-wider text-amber/80">selected impact</h2>
      <ul className="mt-6 space-y-4">
        {impactStudies.map((study) => (
          <li key={study.slug}>
            <Link href={`/work/${study.slug}`} className="group inline">
              <span className="font-display font-semibold">{study.company}</span>
              <span className="text-muted"> — {study.tagline}</span>
              <span className="ml-2 font-mono text-xs text-dim group-hover:text-fg">
                Read case study →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
