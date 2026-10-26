import { ArrowRight, User } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { profile } from "@/content/profile";

function photoInitials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "";
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function Hero() {
  const hasPhoto = profile.photoSrc.trim().length > 0;

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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>

        <figure className="animate-rise mx-auto w-full max-w-sm [animation-delay:120ms]">
          <div className="rounded-[2rem] border border-line bg-primary-soft p-3 shadow-[0_20px_50px_-32px_rgba(37,99,235,0.9)]">
            {hasPhoto ? (
              <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-white">
                <Image
                  src={profile.photoSrc}
                  alt={profile.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-square flex-col items-center justify-center rounded-[1.4rem] border border-dashed border-primary/35 bg-white px-6 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <User className="h-8 w-8" aria-hidden="true" />
                </span>
                <p className="mt-5 text-3xl font-semibold tracking-tight text-primary">
                  {photoInitials(profile.name)}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Profile photo
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Add public/profile.jpg, then set photoSrc to
                  &quot;/profile.jpg&quot;.
                </p>
              </div>
            )}
          </div>
          <figcaption className="sr-only">
            {hasPhoto ? profile.photoAlt : "Profile photo placeholder"}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
