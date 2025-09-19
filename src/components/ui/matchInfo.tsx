"use client";
import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";
import EPLLogo from "../../../public/assets/images/logo.png";
import Image, { StaticImageData } from "next/image";
import { LiveBadgeProps } from "../../models/match";
import { clsx } from "clsx";

interface BetCardProps {
  classColor?: string;
  market?: string;
  typeGame?: string;
  league?: string;
  homeTeam?: string;
  awayTeam?: string;
  homeLogo?: string | StaticImageData;
  awayLogo?: string | StaticImageData;
  odds?: { home: number; draw: number; away: number };
  initialVotes?: number;
  isLive?: boolean;
  initialMinute?: number;
  scoreHome?: number;
  scoreAway?: number;
}

function LiveBadge({ minute, isLive }: LiveBadgeProps) {
  if (!isLive) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] md:text-xs font-semibold ring-1 ring-white/10">
      <span className="h-2 w-2 md:h-3 md:w-2.5 rounded-full bg-white animate-pulse" />
      <span className="font-semibold">LIVE {minute}'</span>
    </span>
  );
}

function BetCard({
  classColor = "bg-gradient-to-r from-[#2E3192] to-[#662D91]",
  market = "1x2",
  typeGame = "full",
  league = "UCL",
  homeTeam = "RMA",
  awayTeam = "MCI",
  homeLogo = "/rma.png",
  awayLogo = "/mci.png",
  odds = { home: 2.1, draw: 3.4, away: 2.6 },
  initialVotes = 0,
  isLive = true,
  initialMinute = 12,
  scoreHome = 0,
  scoreAway = 1,
}: BetCardProps) {
  const [votes, setVotes] = useState<number>(initialVotes);
  const [selected, setSelected] = useState<string | null>(null);
  const [type, setType] = useState<string>(typeGame);

  const lower = String(market).toLowerCase();
  const is1x2 = lower === "1x2";
  const isOU =
    lower.includes("over") ||
    lower.includes("under") ||
    lower.includes("tài") ||
    lower.includes("xỉu");

  const renderOdds = () => {
    return (
      <div className="flex justify-center mt-3">
        <button
          onClick={() => setSelected("ARSENAL")}
          className={clsx(
            "rounded-xl px-6 md:px-8 py-2.5 md:py-3 ring-1 transition-all duration-300 ease-in-out",
            selected === "ARSENAL"
              ? "bg-white text-black ring-white/20 scale-105 shadow-lg"
              : "bg-white/10 text-white ring-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-md"
          )}
        >
          <div className="font-semibold text-xl md:text-2xl tracking-tight">0.86</div>
        </button>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center px-3 sm:px-4">
      <div
        className={clsx(
          // container
          "w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl",
          // card
          "rounded-2xl ring-1 ring-white/15 text-white shadow-xl overflow-hidden",
          classColor
        )}
      >
        {/* Header */}
        <div className="relative p-3 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            {/* League / Logo */}
            <div className="flex items-center gap-2">
              <div className="relative w-[40px] h-[24px] sm:w-[50px] sm:h-[40px]">
                <Image
                  className="rounded-md object-cover"
                  fill
                  src={EPLLogo}
                  alt="EPL Logo"
                />
              </div>
         
            </div>

            {/* Market badge (no fixed width/height, responsive padding) */}
            <span className="relative block w-[120px] md:w-[120px] h-[40px]  md:h-[45px] lg:ml-[-15px] 
          bg-red-500  shadow-lg
          translate-x-[20px] -translate-y-[20px]  rounded-b-2xl
          
        ">
              <p className="text-center mt-2 text-white text-lg md:text-xl font-bold font_title">
                {market}
              </p>
            </span>

            {/* Type switch */}
            <span className="text-[10px] sm:text-xs rounded-full bg-white/10 px-2 py-0.5 ring-1 ring-white/15">
              <select
                className="text-white bg-transparent focus:outline-none"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option className="bg-gray-700" value="full">Toàn trận</option>
                <option className="bg-gray-700" value="h1">H1</option>
                <option className="bg-gray-700" value="h2">H2</option>
              </select>
            </span>
          </div>

          {/* Teams / Score */}
          <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Image
                src={homeLogo}
                alt={homeTeam}
                width={40}
                height={40}
                className="rounded-full shrink-0"
              />
              <span className="font-semibold text-lg sm:text-xl tracking-tight truncate">
                {homeTeam}
              </span>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-[28px] leading-none font-bold">
                {scoreHome} <span className="opacity-80">-</span> {scoreAway}
              </div>
              {!isLive && <div className="text-[10px] sm:text-[11px] text-white/70 mt-0.5">FT</div>}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 justify-end min-w-0">
              <span className="font-semibold text-lg sm:text-xl tracking-tight truncate text-right">
                {awayTeam}
              </span>
              <Image
                src={awayLogo}
                alt={awayTeam}
                width={40}
                height={40}
                className="rounded-full shrink-0"
              />
            </div>
          </div>

          {renderOdds()}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-2 sm:px-3 py-3 bg-black/20">
          <span className="text-sm text-white/80">
            {votes.toLocaleString()} đang bình chọn
          </span>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <LiveBadge minute={initialMinute} isLive={isLive} />
            <button
              onClick={() => selected && setVotes((v) => v + 1)}
              disabled={!selected}
              className={clsx(
                "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ring-1 transition",
                selected
                  ? "bg-white text-blue-700 ring-white/20 hover:-translate-y-0.5"
                  : "bg-white/10 text-white/60 ring-white/15 cursor-not-allowed"
              )}
              aria-label="Upvote"
            >
              <ThumbsUp className="h-4 w-4" /> Chọn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { BetCard, LiveBadge };
