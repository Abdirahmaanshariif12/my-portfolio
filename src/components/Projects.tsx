import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Sample project concepts"
      description={profile.projectsNote}
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((project, index) => (
          <li
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-primary/30"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-primary/20 bg-primary-soft px-2.5 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                Sample concept
              </span>
              <span className="text-sm font-semibold text-muted">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            <p className="mt-4 text-sm leading-6 text-foreground">{project.note}</p>
            <div className="mt-auto pt-6">
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                Sample topics
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
