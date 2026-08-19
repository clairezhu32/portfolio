import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { accentClasses } from "@/lib/accent";
import { SectionLabel } from "./section-label";

export function ImpactGrid() {
  return (
    <section id="impact" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>selected impact</SectionLabel>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Work that moved the needle
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            I don&apos;t just analyze systems — I diagnose them, redesign them, and build the
            infrastructure that makes them better over time.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {caseStudies.map((study) => {
            const accent = accentClasses[study.accent];
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className={`group overflow-hidden rounded-xl border border-line bg-bg2 transition ${accent.hoverBorder}`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line">
                  <Image
                    src={study.image}
                    alt={`Screenshot of ${study.productName}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className={`font-mono text-xs ${accent.text}`}>{study.company}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold">
                    {study.productName}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{study.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.metrics.slice(0, 2).map((metric) => (
                      <span
                        key={metric.label}
                        className={`rounded-full px-3 py-1 font-mono text-xs ${
                          metric.highlight ? `${accent.bg} ${accent.text}` : "bg-bg3 text-muted"
                        }`}
                      >
                        {metric.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 font-mono text-xs text-dim group-hover:text-fg">
                    Read case study →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
