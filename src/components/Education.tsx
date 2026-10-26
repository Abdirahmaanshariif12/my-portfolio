import { GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <ol className="space-y-4">
        {profile.education.map((item) => (
          <li
            key={`${item.school}-${item.program}`}
            className="rounded-3xl border border-line p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                {item.period ? (
                  <p className="text-sm font-semibold text-primary">{item.period}</p>
                ) : null}
                <h3
                  className={`text-xl font-semibold text-foreground ${item.period ? "mt-2" : ""}`}
                >
                  {item.school}
                </h3>
                <p className="mt-1 text-base text-muted">{item.program}</p>
                {item.summary ? (
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                    {item.summary}
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
