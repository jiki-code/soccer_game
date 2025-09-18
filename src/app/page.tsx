"use client";
import React from "react";
import { Card, CardContent, ScrollArea } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HotMatch } from "@/components/ui/hot-match";
import { MatchesSlider } from "@/components/ui/matches-slider";
import { BetCard } from "@/components/ui/matchInfo";

import Arsenal from "../../public/assets/images/602.png";
import MU from "../../public/assets/images/680.png";
import demo from "../../public/assets/images/2000271105.png";
import demo2 from "../../public/assets/images/612.png";
import { MatchCardProps, Match } from "@/models/carousel";
import Image from "next/image";
import { MessageSquareText, Trophy, Flame, Star, BarChart } from "lucide-react";
import clsx from "clsx";
import LeaderBoard from "@/components/layouts/leader-board"
export default function SportsDashboard() {
  const [isDetail, SetIsDetail] = React.useState<boolean>(false);
  const [dataDetail, setDataDetail] = React.useState<Match>({
    league: "",
    homeTeam: {
      name: "",
      logo: "",
    },
    awayTeam: {
      name: "",
      logo: "",
    },
    time: "",
    match: "",
    bg: "",
  });

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
      size: 50,
    },
    {
      name: "Sarah Chen",
      score: "12,890 pts",
      color: "bg-yellow-400",
      height: "h-32",
      textColor: "text-yellow-400",
      range: 1,
      size: 60,
    },
    {
      name: "Mike Rodriguez",
      score: "7,230 pts",
      color: "bg-orange-400",
      height: "h-20",
      textColor: "text-orange-400",
      range: 3,
      size: 40,
    },
  ];

  const chatMessages = [
    { user: "John_Bet", text: "Great match!", color: "text-blue-400" },
    { user: "Emma_K", text: "Who's winning?", color: "text-purple-400" },
  ];

  const featuredMatches = [
    {
      league: "Champions League",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "21:00 • Parc des Princes",
      bg: "bg-[#4338ca]",
    },
    {
      league: "Premier League",
      homeTeam: { name: "Arsenal", logo: Arsenal },
      awayTeam: { name: "Bayern", logo: MU },
      time: "18:30 • Stamford Bridge",
      bg: "bg-[#059669]",
    },
    {
      league: "La Liga",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "20:00 • Camp Nou",
      bg: "bg-[#dc2626]",
    },
    {
      league: "Serie A",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "19:00 • Allianz Stadium",
      bg: "bg-[#6d28d9]",
    },
    {
      league: "Bundesliga",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "17:30 • Signal Iduna Park",
      bg: "bg-[#d97706]",
    },
    {
      league: "Ligue 1",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "20:45 • Groupama Stadium",
      bg: "bg-[#047857]",
    },
    {
      league: "Eredivisie",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "16:00 • Johan Cruyff Arena",
      bg: "bg-[#dc2626]",
    },
    {
      league: "Primeira Liga",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "21:15 • Estádio da Luz",
      bg: "bg-[#2563eb]",
    },
    {
      league: "MLS",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "19:30 • BMO Stadium",
      bg: "bg-[#be185d]",
    },
    {
      league: "Copa Libertadores",
      homeTeam: { name: "PSG", logo: demo },
      awayTeam: { name: "Bayern", logo: demo2 },
      time: "20:00 • La Bombonera",
      bg: "bg-[#1e40af]",
    },
  ];

  const stats = [
    { label: "Active Bets", value: "1,247", color: "text-green-400" },
    { label: "Live Matches", value: "23", color: "text-red-500" },
    { label: "Total Payout", value: "$2.4M", color: "text-yellow-400" },
  ];
  const selectedMatch = (item: MatchCardProps) => {
    SetIsDetail(true);
    setDataDetail(item);
  };

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
            <div className=" flex items-center justify-start mb-6 ">
              <Trophy className="mr-2 text-yellow-400 " />{" "}
              <span className="text-2xl font-bold">
                Top Players Leaderboard
              </span>
            </div>
            {/* Leaderboard chart replacement */}
            <LeaderBoard />
        
          </CardContent>
        </Card>
        <Card className="bg-[#1e293b] md:col-span-2">
          <CardContent>
            <div className="flex items-center text-yellow-400 font-semibold mb-4">
              <Star className="mr-2" /> Featured Matches Today
            </div>
            <div className="grid gap-6">
              <MatchesSlider
                items={featuredMatches}
                interval={3000}
                itemsPerPage={2}
              />
            </div>
          </CardContent>
        </Card>

        {isDetail ? (
          <BetCard
            classColor="bg-[linear-gradient(135deg,#2e0d5e,#4a1f8a)]"
            market="OVER 2"
            league={dataDetail.league}
            typeGame="full"
            homeTeam={dataDetail.homeTeam?.name}
            awayTeam={dataDetail.awayTeam?.name}
            homeLogo={dataDetail.homeTeam?.logo}
            awayLogo={dataDetail.awayTeam?.logo}
            odds={{ home: 2.1, draw: 3.3, away: 3.5 }}
            initialVotes={128}
            initialMinute={12}
            scoreHome={0}
            scoreAway={1}
          />
        ) : (
          ""
        )}
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
