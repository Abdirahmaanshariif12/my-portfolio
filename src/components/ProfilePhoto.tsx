"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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

export function ProfilePhoto() {
  const src = profile.photoSrc.trim();
  const [showPhoto, setShowPhoto] = useState(src.length > 0);

  return (
    <figure className="mx-auto w-full max-w-sm">
      <div className="rounded-[2rem] border border-line bg-primary-soft p-3 shadow-[0_20px_50px_-32px_rgba(37,99,235,0.9)]">
        {showPhoto ? (
          <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-white">
            <Image
              src={src}
              alt={profile.photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 80vw"
              className="object-cover"
              onError={() => setShowPhoto(false)}
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
              Add your photo as public/profile.jpg.
            </p>
          </div>
        )}
      </div>
      <figcaption className="sr-only">
        {showPhoto ? profile.photoAlt : "Profile photo placeholder"}
      </figcaption>
    </figure>
  );
}
