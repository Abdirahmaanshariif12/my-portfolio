"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { GitHubIcon } from "@/components/GitHubIcon";
import { navLinks, profile } from "@/content/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="truncate text-base font-semibold tracking-tight text-foreground"
          >
            {profile.name}
          </a>

          <nav aria-label="Page sections" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-soft hover:text-primary"
            >
              <GitHubIcon />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id={menuId}
          aria-label="Page sections"
          className="border-t border-line bg-white md:hidden"
        >
          <Container className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-primary-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-primary-soft hover:text-primary"
            >
              <GitHubIcon />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
