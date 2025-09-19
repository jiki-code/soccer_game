"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import avatar1 from "../../../public/assets/images/5101221.png";
import avatar2 from "../../../public/assets/images/5103697.png";
import avatar3 from "../../../public/assets/images/5103797.png";
import golden_laurel_wreath from "../../../public/assets/images/wreath_gold_sparkle2.png";
import brozen_laurel_wreath from "../../../public/assets/images/brozen.png";
import StarIcon from "../../../public/assets/images/star.png";
import clsx from "clsx";
import styles from "./layouts.module.css";

type Player = {
  name: string;
  points: number;
  username: string;
  avatar?: any; // Replace with Next/Image static import in your app
  position: number;
  color?: string;
  icon?: any;
};

const players: Player[] = [
  {
    name: "Jackson",
    points: 1847,
    username: "@username",
    avatar: avatar2, // Replace with your image path
    position: 2,
    color: "blue-500",
    icon: brozen_laurel_wreath,
  },
  {
    name: "Eiden",
    points: 2430,
    username: "@username",
    avatar: avatar1, // Replace with your image path
    position: 1,
    color: "yellow-400",
    icon: golden_laurel_wreath,
  },
  {
    name: "Emma Aria",
    points: 1674,
    username: "@username",
    avatar: avatar3, // Replace with your image path
    position: 3,
    color: "green-500",
    icon: brozen_laurel_wreath,
  },
];

const getPositionColor = (pos: number) => {
  switch (pos) {
    case 1:
      return "border-yellow-500";
    case 2:
      return "border-blue-500";
    case 3:
      return "border-green-500";
    default:
      return "gray-400";
  }
};

export default function LeaderBoard() {
  const [celebrate, setCelebrate] = useState(true); // Fireworks when page loads

  // Example: retrigger fireworks when top score changes
  // (In a real app, call setCelebrate(true) whenever a winner is crowned.)
  useEffect(() => {
    if (!celebrate) return;
    const t = setTimeout(() => setCelebrate(false), 5500);
    return () => clearTimeout(t);
  }, [celebrate]);

  return (
    <div
      className={clsx(
        `${styles.bgFireWork}`,
        "flex items-center justify-center p-4"
      )}
    >
      <div className="flex w-full items-end mt-6 justify-center">
        {players.map((player) => (
          <div
            key={player.position}
            className={clsx(
              `relative bg-[#1a1a2e] rounded-t-2xl flex flex-col items-center text-center p-4 mx-0 my-2 ${
                player.position === 1 ? "h-60" : "h-48"
              } w-40 justify-end`,
              player.position === 1 ? "w-48 bg-[#32324e]" : ""
            )}
          >
            {
              <div
                className={`absolute -bottom-16  ${
                  player.position !== 1 ? "w-36 h-32" : "w-56 h-42"
                }  `}
              >
                <Image
                  src={player.icon!}
                  alt="Laurel Wreath"
                  fill
                  className={`object-cover, ${
                    player.position === 3
                      ? "opacity-35"
                      : player.position === 2
                      ? "opacity-70"
                      : "opacity-100"
                  }`}
                />
              </div>
            }

            <div className="absolute z-20 -top-8">
              <div
                className={`relative w-22 h-22 rounded-full shadow-md border-3 ${getPositionColor(
                  player.position
                )} overflow-hidden`}
              >
                <Image
                  src={player.avatar}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
              </div>

              {player.position === 1 && (
                <div
                  className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl text-${player.color}`}
                >
                  👑
                </div>
              )}
              <div
                className={`absolute z-10 bottom-[-8px] right-[34px] w-5 h-5 transform rotate-45 flex items-center justify-center bg-${player.color}`}
              >
                <span className="transform -rotate-45 text-white font-bold">
                  {" "}
                  {player.position}
                </span>
              </div>
            </div>
            <div className="flex absolute bottom-24  space-x-1">
              <div className="flex items-center space-x-2">
                {Array.from({ length: player.position === 1 ? 3 : player.position === 3 ? 1 : player.position }).map((_, idx) => (
                  <Image
                    key={idx}
                    src={StarIcon}
                    alt="Star"
                    className={`w-5 h-5`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-16 absolute">
              <p className="text-white text-lg font-semibold">{player.name}</p>
              <p className={`text-${player.color} text-xl font-bold`}>
                {player.points}
              </p>
              <p className="text-sm text-gray-100">{player.username}</p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
