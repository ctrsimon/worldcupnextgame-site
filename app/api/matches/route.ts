import { NextResponse } from "next/server";
import { mockMatches } from "@/lib/matches/mock-data";
export function GET() { return NextResponse.json({ matches: mockMatches, source: "mock", updatedAt: mockMatches[0]?.providerUpdatedAt }); }
