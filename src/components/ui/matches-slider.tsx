"use client";
import React from "react";
import { MatchCardProps } from "@/models/carousel";
import { BetCard } from "@/components/ui/matchInfo";

// --- Types

export type CarouselProps = {
  items: MatchCardProps[];
  interval?: number;
  itemsPerPage?: number;
  autoPlay?: boolean;
  className?: string;
  selectedItem: (items: MatchCardProps[]) => void;
};

function useAutoAdvance(enabled: boolean, delay: number, callback: () => void) {
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [enabled, delay]);
}
const MatchesSlider: React.FC<CarouselProps> = ({
  items,
  interval = 3000,
  itemsPerPage = 3,
  autoPlay = true,
  className = "",
}) => {
  const [page, setPage] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  if (!items || items.length === 0) return null;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useAutoAdvance(autoPlay && !paused && totalPages > 1, interval, () => {
    setPage((p) => (p + 1) % totalPages);
  });

  const start = page * itemsPerPage;
  const currentItems = items.slice(start, start + itemsPerPage);

  return (
    <div
      className={`group relative w-full select-none ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Items shown */}
      <div className={`flex gap-3 cursor-pointer`}>
        {currentItems.map((item, idx) => (
          <BetCard
            classColor={
              idx % 2 === 0
                ? `bg-gradient-to-r from-[#2e0d5e] to-[#4a1f8a]`
                : `bg-gradient-to-r from-[#2a3e8f] to-[#31326F]`
            }
            market="OVER 2"
            league={item.league}
            typeGame="full"
            homeTeam={item.homeTeam?.name}
            awayTeam={item.awayTeam?.name}
            homeLogo={item.homeTeam?.logo}
            awayLogo={item.awayTeam?.logo}
            odds={{ home: 2.1, draw: 3.3, away: 3.5 }}
            initialVotes={128}
            initialMinute={12}
            scoreHome={0}
            scoreAway={1}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all ${
                i === page
                  ? "scale-110 ring-2 ring-offset-2"
                  : "opacity-50 hover:opacity-80"
              } bg-current`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === page}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { MatchesSlider };
