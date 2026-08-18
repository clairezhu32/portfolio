import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudyHeader } from "@/components/case-study/header";
import { CaseStudyMetrics } from "@/components/case-study/metrics";
import { CaseStudyHighlights } from "@/components/case-study/highlights";
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
          <div className="mx-auto max-w-3xl space-y-12 px-6">
            <p className="text-lg leading-relaxed">{study.overview}</p>
            <CaseStudyMetrics study={study} />
            <div>
              <h2 className="font-display text-xl font-semibold">What I did</h2>
              <div className="mt-6">
                <CaseStudyHighlights study={study} />
              </div>
            </div>
          </div>
        </section>
        <MoreWork currentSlug={study.slug} />
      </main>
      <Footer />
    </>
  );
}
