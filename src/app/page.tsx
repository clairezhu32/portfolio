import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ApproachSection } from "@/components/approach-section";
import { ImpactGrid } from "@/components/impact-grid";
import { StackSection } from "@/components/stack-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ApproachSection />
        <ImpactGrid />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
