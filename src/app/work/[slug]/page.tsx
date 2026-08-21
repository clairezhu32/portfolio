import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudyHeader } from "@/components/case-study/header";
import { CaseStudyMetrics } from "@/components/case-study/metrics";
import { CaseStudyJourney } from "@/components/case-study/journey-map";
import { CaseStudyNarrative } from "@/components/case-study/narrative";
import { CaseStudyPersonas } from "@/components/case-study/personas";
import { CaseStudyUserStories } from "@/components/case-study/user-stories";
import { CaseStudyRisks } from "@/components/case-study/risks";
import { CaseStudyPricingStrategy } from "@/components/case-study/pricing-strategy";
import { CaseStudyLeanCanvas } from "@/components/case-study/lean-canvas";
import { CaseStudyReference } from "@/components/case-study/reference-link";
import { MoreWork } from "@/components/case-study/more-work";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.company} — ${study.productName} | Claire Zhu`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Nav />
      <main>
        <CaseStudyHeader study={study} />
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <CaseStudyMetrics study={study} />
          </div>
          <div className="mx-auto mt-12 max-w-5xl px-6">
            <CaseStudyJourney study={study} />
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-12 px-6">
            <CaseStudyNarrative study={study} />
          </div>
          <div className="mx-auto mt-12 max-w-5xl px-6">
            <CaseStudyPersonas study={study} />
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-12 px-6">
            <CaseStudyUserStories study={study} />
            <CaseStudyRisks study={study} />
            <CaseStudyPricingStrategy study={study} />
          </div>
          <div className="mx-auto mt-12 max-w-5xl px-6">
            <CaseStudyLeanCanvas study={study} />
          </div>
          <div className="mx-auto mt-12 max-w-3xl px-6">
            <CaseStudyReference study={study} />
          </div>
        </section>
        <MoreWork currentSlug={study.slug} />
      </main>
      <Footer />
    </>
  );
}
