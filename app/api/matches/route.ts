import { NextResponse } from "next/server";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";

export async function GET() {
  const feed = await getWorldCupMatchFeed();
  return NextResponse.json(feed);
}
