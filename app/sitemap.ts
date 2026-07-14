import type { MetadataRoute } from "next";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
const base = "https://worldcupnextgame.com";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const { matches } = await getWorldCupMatchFeed(); return ["", "/schedule", "/world-cup-schedule", "/world-cup-next-game", "/world-cup-final", "/teams/argentina", "/teams/england", "/matches/france-vs-spain", "/today", "/tomorrow", "/about", "/data-sources", ...matches.map((match) => `/match/${match.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
