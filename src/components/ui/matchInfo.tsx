"use client";
import React, { useEffect, useState } from "react";
import { ThumbsUp } from "lucide-react";

import EPLLogo from "../../../public/assets/images/logo.png";
import Image, { StaticImageData } from "next/image";
import {LiveBadgeProps} from "../../models/match"
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
  odds?: {
    home: number;
    draw: number;
    away: number;
  };
  initialVotes?: number;
  isLive?: boolean;
  initialMinute?: number;
  scoreHome?: number;
  scoreAway?: number;
}

// ------------------ COMPONENTS ------------------
function LiveBadge({ minute, isLive }: LiveBadgeProps) {
  if (!isLive) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-semibold ring-1 ring-white/10 -ml-[35px]">
      <span className="h-3 w-3 rounded-full bg-white animate-pulse font-bold" />{" "}
      <span className="text-lg font-semibold">
        LIVE {minute}'
      </span>
    </span>
  );
}

function BetCard({
  classColor = "bg-gradient-to-r from-[#2E3192] to-[#662D91] p-6 rounded-xl",
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
  const [localOdds, setLocalOdds] = useState(odds);
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
          className={`rounded-xl px-8 py-3 ring-1 cursor-pointer 
    transition-all duration-300 ease-in-out transform
    ${
      selected === "ARSENAL"
        ? "bg-white text-black ring-white/20 scale-105 shadow-lg animate-pulse"
        : "bg-white/10 text-white ring-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-md"
    }`}
        >
          <div className="font-semibold text-2xl tracking-tight">0.86</div>
        </button>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "w-[400px] rounded-2xl  ring-1 ring-white/15 text-white shadow-xl overflow-hidden",
        classColor
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium tracking-wide uppercase text-white/80">
              <div className="relative ml-1 mb-2">
                <Image
                  className="rounded-md"
                  width={50}
                  height={30}
                  src={EPLLogo}
                  alt="EPL Logo"
                />
              </div>
            </span>
          </div>
          <span
            className="relative block w-[150px] h-[60px] 
          bg-red-500  shadow-lg
          translate-x-[20px] -translate-y-[16px]  rounded-b-2xl
          
        "
          >
            <p className="text-center text-white text-3xl font-bold font_title  pt-3">
              {market}
            </p>
          </span>

          <span className="text-xs ml-1 rounded-full bg-white/10 px-2 py-0.5 ring-1 ring-white/15">
            <select
              className="text-white bg-transparent"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
            >
              <option className="bg-gray-600" value="full">
                Toàn trận
              </option>
              <option className="bg-gray-600" value="h1">
                H1
              </option>
              <option className="bg-gray-600" value="h2">
                H2
              </option>
            </select>
          </span>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={homeLogo}
              alt={homeTeam}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-xl tracking-tight">
              {homeTeam}
            </span>
          </div>
          <div className="text-center">
            <div className="text-[28px] leading-none font-bold">
              {scoreHome} <span className="opacity-80">-</span> {scoreAway}
            </div>
            {!isLive && <div className="text-[11px] text-white/70">FT</div>}
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span className="font-semibold text-xl tracking-tight">
              {awayTeam}
            </span>
            <Image
              src={awayLogo}
              alt={awayTeam}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>

        {renderOdds()}
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-black/20">
        <span className="text-sm text-white/80">
          {votes.toLocaleString()} đang bình chọn
        </span>
        <LiveBadge minute={initialMinute} isLive={isLive} />

        <button
          onClick={() => selected && setVotes((v) => v + 1)}
          disabled={!selected}
          className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ring-1 hover:animate-bounce transition ${
            selected
              ? "bg-white text-blue-600 ring-white/20 hover:-translate-y-0.5"
              : "bg-white/10 text-white/60 ring-white/15 cursor-not-allowed"
          }`}
          aria-label="Upvote"
        >
          <ThumbsUp className="h-4 w-4 font-bold text-sm" /> Chọn
        </button>
      </div>
    </div>
  );
}


export {BetCard, LiveBadge}
