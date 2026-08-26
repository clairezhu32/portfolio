import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AboutApproachSection } from "@/components/about/approach-section";
import { AboutBuildingSection } from "@/components/about/building-section";
import { AboutImpactSection } from "@/components/about/impact-section";

export const metadata: Metadata = {
  title: "About Claire Zhu",
  description:
    "Staff Data Scientist turned AI PM — 10+ years bridging analytics, experimentation, and product strategy across ads, AI/ML products, marketplace, and consumer tech.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-line py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Hi, I&apos;m Claire 👋</h1>
            <p className="mt-4 text-lg text-muted">
              Data-Drawn Product Builder · Staff Data Scientist → AI PM · Ex-Meta, Uber, Upstart
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              I turn data into products that matter. With 10+ years bridging analytics,
              experimentation, and product strategy across ads, AI/ML products, marketplace,
              and consumer tech, I&apos;m now channeling that into building AI-powered products
              that solve real problems for real people. My edge is the full arc — from raw data
              and causal inference to product strategy, cross-functional execution, and
              measurable business impact. I analyze systems; I diagnose them,
              redesign them, and drive the decisions that make them better.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#impact"
                className="rounded-full bg-amber px-6 py-3 font-medium text-white transition hover:bg-amber2"
              >
                See my work ↓
              </Link>
              <Link
                href="/#connect"
                className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-muted"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </header>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-16 px-6">
            <AboutApproachSection />
            <AboutBuildingSection />
            <AboutImpactSection />

            <blockquote className="border-l-2 border-amber/40 pl-6 font-display text-2xl italic text-muted">
              &quot;Turn data into products that matter.&quot;
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
