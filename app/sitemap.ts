import type { MetadataRoute } from "next";
import { mockMatches } from "@/lib/matches/mock-data";
const base = "https://worldcupnextgame.com";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/schedule", "/today", "/tomorrow", "/about", "/data-sources", ...mockMatches.map((match) => `/match/${match.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-07-11") })); }
