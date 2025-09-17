"use client";

import Image, { StaticImageData } from "next/image";
import { Clock3 } from "lucide-react";
import clsx from "clsx";

type Team = {
  name: string;
  logo?: string | StaticImageData; // next/image friendly
};

type HotMatchProps = {
  league: string;
  time: string;              // "20:45"
  home: Team;
  away: Team;
  className?: string;
  onClick?: () => void;      // make the card clickable if needed
};

const  HotMatch = ({
  league,
  time,
  home,
  away,
  className,
  onClick,
}: HotMatchProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full text-left rounded-xl border border-white/10",
       "bg-[var(--background)]/20 text-[var(--color-input)]",
        "p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-white/20 transition",
        className
      )}
    >
      {/* Top row: League + time pill */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-[var(--color-input)]">{league}</span>
        <span className="inline-flex items-center gap-1 rounded-sm bg-red-600/90 text-white text-xs font-semibold px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse font-base" /> 
          Live
        </span>
      </div>

      {/* Teams row */}
      <div className="flex items-center justify-between gap-3">
        {/* Home */}
        <TeamCell team={home} align="left" />

        {/* VS */}
        <span className="mx-2 text-[var(--color-input)]/70 text-sm">vs</span>

        {/* Away */}
        <TeamCell team={away} align="right" />
      </div>
    </button>
  );
}

function TeamCell({
  team,
  align,
}: {
  team: Team;
  align: "left" | "right";
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 min-w-0",
        align === "right" && "justify-end flex-row-reverse"
      )}
    >
      <LogoSquare src={team.logo} alt={team.name} />
      <p
        className={clsx(
          "truncate font-bold font-base leading-tight",
          "text-white", // strong contrast like in screenshot
          align === "right" && "text-right"
        )}
      >
        {team.name}
      </p>
    </div>
  );
}

function LogoSquare({
  src,
  alt,
}: {
  src?: string | StaticImageData;
  alt: string;
}) {
  // If no logo passed, show initials fallback
  const initials =
    alt
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2) || "?";

  return src ? (
    <div className="relative size-8 rounded-md overflow-hidden bg-black/40 ring-1 ring-white/15">
      <Image src={src} alt={alt} fill className="object-contain p-1.5" />
    </div>
  ) : (
    <div className="size-8 rounded-md grid place-items-center bg-black/40 ring-1 ring-white/15">
      <span className="text-xs text-white/80">{initials}</span>
    </div>
  );
}

export {HotMatch}
