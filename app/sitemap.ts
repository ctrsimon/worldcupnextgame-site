import type { MetadataRoute } from "next";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
const base = "https://worldcupnextgame.com";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const { matches } = await getWorldCupMatchFeed(); return ["", "/schedule", "/today", "/tomorrow", "/about", "/data-sources", ...matches.map((match) => `/match/${match.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
