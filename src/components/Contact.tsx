"use client";

import { Mail, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { GitHubIcon } from "@/components/GitHubIcon";
import { Section } from "@/components/Section";
import { isPlaceholder, profile } from "@/content/profile";

export function Contact() {
  const [previewReady, setPreviewReady] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setPreviewReady(true);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact Me"
      description={profile.contactNote}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)]">
        <div className="grid content-start gap-3">
          <div className="rounded-2xl border border-line p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">Email</p>
                {isPlaceholder(profile.email) ? (
                  <p className="mt-1 text-base text-foreground">{profile.email}</p>
                ) : (
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 inline-block text-base break-all text-foreground underline decoration-primary/30 underline-offset-4"
                  >
                    {profile.email}
                  </a>
                )}
              </div>
            </div>
          </div>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <GitHubIcon />
            GitHub
            <span className="sr-only">
              {" "}
              profile for {profile.githubUsername} (opens in a new tab)
            </span>
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

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-line p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="contact-name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 min-h-11 w-full rounded-xl border border-line bg-white px-4 text-base text-foreground placeholder:text-slate-500"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 min-h-11 w-full rounded-xl border border-line bg-white px-4 text-base text-foreground placeholder:text-slate-500"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Write a short message"
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-foreground placeholder:text-slate-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Submit preview
          </button>

          {previewReady ? (
            <p
              role="status"
              className="mt-4 rounded-2xl bg-primary-soft px-4 py-3 text-sm leading-6 text-foreground"
            >
              Nothing was sent or saved. Use the email address, WhatsApp link,
              or GitHub link to get in touch.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
