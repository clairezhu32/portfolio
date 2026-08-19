import { SectionLabel } from "./section-label";

// LinkedIn link pending — add to this array once provided.
const links: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/clairezhu32" },
];

export function ContactSection() {
  return (
    <section id="connect" className="border-t border-line py-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <SectionLabel>let&apos;s connect</SectionLabel>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Let&apos;s build something
          <br />
          that matters.
        </h2>
        <p className="mt-4 text-muted">
          I&apos;m always interested in connecting with fellow builders, PMs, data scientists,
          and anyone passionate about using data to create products that improve people&apos;s
          lives.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:clairehzhu@gmail.com"
            className="rounded-full bg-amber px-6 py-3 font-medium text-white transition hover:bg-amber2"
          >
            ✉ Send me an email
          </a>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-muted"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
