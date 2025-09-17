import React from "react";
import { Card, CardContent, ScrollArea } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HotMatch } from "@/components/ui/hot-match";
import Arsenal from "../../public/assets/images/602.png";
import MU from "../../public/assets/images/680.png";
import demo from "../../public/assets/images/2000271105.png";

import clsx from "clsx";
import Image from "next/image";
import {
  MessageSquareText,
  Trophy,
  Flame,
  Star,
  BarChart,
  Newspaper,
} from "lucide-react";

export default function SportsDashboard() {
  const hotMatches = [
    {
      league: "Premier League",
      teams: ["Man United", "Arsenal"],
      score: "2 - 1",
      time: "LIVE 75'",
      timeColor: "text-red-500",
    },
    {
      league: "La Liga",
      teams: ["Real Madrid", "Barcelona"],
      time: "18:00",
      timeColor: "text-green-400",
    },
    {
      league: "Serie A",
      teams: ["Juventus", "AC Milan"],
      time: "20:45",
      timeColor: "text-blue-400",
    },
  ];

  const leaderboard = [
    {
      name: "Alex Johnson",
      score: "8,450 pts",
      color: "bg-gray-500",
      height: "h-24",
      textColor: "text-gray-300",
      range: 2,
    },
    {
      name: "Sarah Chen",
      score: "12,890 pts",
      color: "bg-yellow-400",
      height: "h-32",
      textColor: "text-yellow-400",
      range: 1,
    },
    {
      name: "Mike Rodriguez",
      score: "7,230 pts",
      color: "bg-orange-400",
      height: "h-20",
      textColor: "text-orange-400",
      range: 3,
    },
  ];

  const chatMessages = [
    { user: "John_Bet", text: "Great match!", color: "text-blue-400" },
    { user: "Emma_K", text: "Who's winning?", color: "text-purple-400" },
  ];

  const featuredMatches = [
    {
      league: "Champions League",
      match: "PSG VS Bayern",
      time: "21:00 • Parc des Princes",
      bg: "bg-[#4338ca]",
    },
    {
      league: "Premier League",
      match: "Liverpool VS Chelsea",
      time: "16:30 • Anfield",
      bg: "bg-[#065f46]",
    },
  ];

  const stats = [
    { label: "Active Bets", value: "1,247", color: "text-green-400" },
    { label: "Live Matches", value: "23", color: "text-red-500" },
    { label: "Total Payout", value: "$2.4M", color: "text-yellow-400" },
  ];

  return (
    <div className="w-full flex md:flex-row flex-col gap-6 p-3 bg-[#0f172a] text-white min-h-screen">
      {/* Hot Matches */}
      <div className="md:w-1/12"></div>
      <Card className="bg-[#1e293b] md:w-2/12 w-full">
        <CardContent className="p-3">
          <div className="flex items-center text-green-400 font-semibold mb-4">
            <Flame className="mr-2" /> Hot Matches
          </div>
          <div className="space-y-4">
            <HotMatch
              league="EPL"
              time="20:45"
              home={{ name: "Arsenal", logo: Arsenal }}
              away={{ name: "Man utd", logo: MU }}
            />
            <HotMatch
              league="EPL"
              time="20:45"
              home={{ name: "Arsenal", logo: Arsenal }}
              away={{ name: "Man utd", logo: MU }}
            />
            <HotMatch
              league="EPL"
              time="20:45"
              home={{ name: "Arsenal", logo: Arsenal }}
              away={{ name: "Man utd", logo: MU }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <div className="md:w-6/12 w-full space-y-6">
        <Card className="bg-[#1e293b] h-90">
          <CardContent className="p-4 ">
            <div className="flex items-center justify-center mb-6 ">
              <Trophy className="mr-2 text-yellow-400 " />{" "}
              <span className="text-2xl font-bold">
                Top Players Leaderboard
              </span>
            </div>
            {/* Leaderboard chart replacement */}
            <div className="flex justify-evenly text-center items-end">
              {leaderboard.map((player, idx) => (
                <div key={idx} className={player.textColor}>
                  <div
                    className={`${player.color} ${player.height} w-20 rounded-t-md mx-auto justify-center flex items-end`}
                  >
                    {" "}
                    <span className="text-black text-xl">
                      {player.range}
                    </span>{" "}
                  </div>

                  <div
                    className={`rounded-full w-20 ml-2 p-1 bg-white border-3 mt-2 border-[${player.color}]`}
                  >
                    <Image
                      src={demo}
                      alt="Placeholder"
                      width={70}
                      height={70}
                    />
                  </div>
                  <p className="mt-2">{player.name}</p>
                  <p className="text-sm text-gray-400">{player.score}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1e293b] md:col-span-2">
          <CardContent>
            <div className="flex items-center text-yellow-400 font-semibold mb-4">
              <Star className="mr-2" /> Featured Matches Today
            </div>
            <div className="grid grid-cols-2 gap-4">
              {featuredMatches.map((match, idx) => (
                <div key={idx} className={`${match.bg} p-4 rounded-lg`}>
                  <p className="text-sm text-gray-200">{match.league}</p>
                  <p className="font-semibold text-xl">{match.match}</p>
                  <p className="text-sm text-gray-300 mt-1">{match.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Chat */}
      <div className="md:w-2/12 w-full space-y-6">
        <Card className="bg-[#1e293b] h-90">
          <CardContent className="p-3">
            <div className="flex items-center text-green-400 font-semibold mb-4">
              <MessageSquareText className="mr-2" /> Live Chat
            </div>
            <ScrollArea className="h-24 mb-2">
              <div className="space-y-1 text-sm">
                {chatMessages.map((msg, idx) => (
                  <p key={idx}>
                    <span className={`${msg.color} font-bold`}>
                      {msg.user}:
                    </span>{" "}
                    {msg.text}
                  </p>
                ))}
              </div>
            </ScrollArea>
            <Input
              placeholder="Type a message..."
              className="bg-[#0f172a] text-white"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#1e293b] col-span-1">
          <CardContent>
            <div className="flex items-center text-orange-300 font-semibold mb-4">
              <BarChart className="mr-2" /> Today's Stats
            </div>
            <div className="space-y-2 text-sm">
              {stats.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{item.label}</span>
                  <span className={`${item.color} font-semibold`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="md:w-1/12"></div>
    </div>
  );
}
