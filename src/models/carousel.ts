type Team = { name: string; logo: string };
export type Match = { league?: string; homeTeam?: Team; awayTeam?: Team; time?: string, match?: string, bg: string };

type OnSelected = (matches: Match[]) => void;

export interface MatchCardProps {
  classMatchCard?: string;
  league?: string;
  homeTeam?: { name: string; logo: string };
  awayTeam?: { name: string; logo: string };
  time?: string | undefined;
  match?: string;
  onSelectedMatch?:  React.MouseEventHandler<HTMLDivElement>;
}
