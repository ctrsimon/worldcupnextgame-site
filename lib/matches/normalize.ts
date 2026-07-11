import { z } from "zod";
import type { Match, MatchStatus } from "./types";

const status = z.enum(["scheduled", "delayed", "postponed", "cancelled", "live", "halftime", "completed"]);
const rawMatch = z.object({ id: z.string(), slug: z.string(), tournamentId: z.string(), tournamentName: z.string(), stage: z.string(), group: z.string().optional(), kickoffUtc: z.string().datetime(), status, homeTeam: z.object({ name: z.string(), code: z.string(), flag: z.string() }), awayTeam: z.object({ name: z.string(), code: z.string(), flag: z.string() }), venue: z.object({ name: z.string(), city: z.string() }).optional(), score: z.object({ home: z.number(), away: z.number() }).optional(), providerUpdatedAt: z.string().datetime() });

/** Validates provider data before it can enter the UI or cache. */
export function normalizeMatch(input: unknown): Match { return rawMatch.parse(input) as Match; }
export function normalizeStatus(input: string): MatchStatus { return status.parse(input.toLowerCase()); }
