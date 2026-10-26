import { Container } from "@/components/Container";
import { GitHubIcon } from "@/components/GitHubIcon";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} at {profile.university}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-foreground underline decoration-primary/30 underline-offset-4"
          >
            {profile.email}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-primary/30 underline-offset-4"
          >
            <GitHubIcon />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
