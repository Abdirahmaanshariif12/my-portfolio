import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)]">
        <div className="space-y-4 rounded-3xl border border-line p-6 sm:p-8">
          {profile.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="grid gap-3">
          {profile.about.facts.map((fact) => (
            <li key={fact.label} className="rounded-2xl border border-line p-5">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                {fact.label}
              </p>
              <p className="mt-2 text-base leading-6 text-foreground">{fact.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
