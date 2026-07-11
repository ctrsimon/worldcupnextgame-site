export type MatchStatus =
  | "scheduled"
  | "delayed"
  | "postponed"
  | "cancelled"
  | "live"
  | "halftime"
  | "completed";

export interface Team {
  name: string;
  code: string;
  flag: string;
}

export interface Venue {
  name: string;
  city: string;
}

export interface Score {
  home: number;
  away: number;
}

export interface Match {
  id: string;
  slug: string;
  tournamentId: string;
  tournamentName: string;
  stage: string;
  group?: string;
  kickoffUtc: string;
  status: MatchStatus;
  homeTeam: Team;
  awayTeam: Team;
  venue?: Venue;
  score?: Score;
  providerUpdatedAt: string;
}

export interface RawMatch {
  id: string;
  [key: string]: unknown;
}

export interface MatchProvider {
  getMatches(params: { tournamentId: string; from: string; to: string }): Promise<RawMatch[]>;
}
