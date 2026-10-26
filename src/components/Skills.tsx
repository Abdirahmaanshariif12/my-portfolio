import {
  BookOpen,
  Braces,
  Code2,
  Database,
  LifeBuoy,
  Network,
  Palette,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

const skillIcons: Record<string, LucideIcon> = {
  HTML: Code2,
  CSS: Palette,
  JavaScript: Braces,
  Python: Terminal,
  Networking: Network,
  Databases: Database,
  "IT Support": LifeBuoy,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I am learning"
      description={profile.skillsNote}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((skill) => {
          const Icon = skillIcons[skill.name] ?? BookOpen;

          return (
            <li
              key={skill.name}
              className="rounded-2xl border border-line p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_40px_-28px_rgba(37,99,235,0.85)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                  Learning
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{skill.summary}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
