import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_46%)]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:py-28">
        <div className="animate-rise">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            Portfolio
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="block">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-2 text-base font-medium text-foreground">
            {profile.university}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <ProfilePhoto />
        </div>
      </Container>
    </section>
  );
}
