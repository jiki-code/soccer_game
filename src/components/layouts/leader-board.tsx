"use client";

import Image from "next/image";
import avatar1 from "../../../public/assets/images/5101221.png";
import avatar2 from "../../../public/assets/images/5103697.png";
import avatar3 from "../../../public/assets/images/5103797.png";

import styles from "./layout.module.css";
import Fireworks from "./fire-work-bg";
import clsx from "clsx";

type Player = {
  name: string;
  points: number;
  username: string;
  avatar: any;
  position: number;
};

const players: Player[] = [
  {
    name: "Jackson",
    points: 1847,
    username: "@username",
    avatar: avatar1, // Replace with your image path
    position: 2,
  },
  {
    name: "Eiden",
    points: 2430,
    username: "@username",
    avatar: avatar2, // Replace with your image path
    position: 1,
  },
  {
    name: "Emma Aria",
    points: 1674,
    username: "@username",
    avatar: avatar3, // Replace with your image path
    position: 3,
  },
];

const getPositionColor = (pos: number) => {
  switch (pos) {
    case 1:
      return "yellow-500";
    case 2:
      return "blue-500";
    case 3:
      return "green-500";
    default:
      return "gray-400";
  }
};

export default function LeaderBoard() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex  items-end w-full justify-center">
        {players.map((player) => (
          <div
            key={player.position}
            className={clsx(
              `relative bg-[#1a1a2e] rounded-t-2xl flex flex-col items-center text-center p-4 mx-0 my-2 ${
                player.position === 1 ? "h-64" : "h-56"
              } w-44 justify-end`,
              player.position === 1 ? "w-32 bg-[#32324e]" : ""
            )}
          >
            <div className="absolute z-20 -top-8">
              <div
                className={`relative w-24 h-24 rounded-full shadow-md

 border-4 border-${getPositionColor(player.position)} overflow-hidden`}
              >
                <Image
                  src={player.avatar}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
                {/* <span
                    className={`absolute z-10 bottom-[-1px] right-[30px] text-xs text-white font-bold w-6 h-6  flex items-center justify-center bg-${getPositionColor(
                      player.position
                    )}`}
                  >
                    {player.position}
                  </span> */}
              </div>
              {player.position === 1 && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-400 text-3xl">
                  👑
                </div>
              )}
              <div
                className={`absolute z-10 bottom-[-8px] right-[38px] w-5 h-5 transform rotate-45 flex items-center justify-center bg-${getPositionColor(
                  player.position
                )}`}
              >
                <span className="transform -rotate-45 text-white font-bold">
                  {" "}
                  {player.position}
                </span>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-white text-lg font-semibold">{player.name}</p>
              <p className="text-yellow-400 text-xl font-bold">
                {player.points}
              </p>
              <p className="text-sm text-gray-400">{player.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
