import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AdSlot } from "@/components/ads/AdSlot";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
export const metadata = { title: "World Cup Schedule | World Cup Next Game", description: "See every upcoming World Cup fixture and kickoff time." };
export const revalidate = 3600;

export default async function SchedulePage() {
  const { matches } = await getWorldCupMatchFeed();
  return (
    <>
      <Header />
      <main className="static-page schedule-page">
        <p className="eyebrow">World Cup 2026</p>
        <h1>Full schedule</h1>
        <p className="intro">All upcoming fixtures in one place. Times are displayed in UTC until you choose your local timezone on the homepage.</p>
        <AdSlot placement="schedule" className="inline-ad" />
        <UpcomingMatches matches={matches} />
      </main>
      <Footer />
    </>
  );
}
