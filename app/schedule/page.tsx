import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AdSlot } from "@/components/ads/AdSlot";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { mockMatches } from "@/lib/matches/mock-data";
export const metadata = { title: "World Cup Schedule | World Cup Next Game", description: "See every upcoming World Cup fixture and kickoff time." };
export default function SchedulePage() {
  return (
    <>
      <Header />
      <main className="static-page schedule-page">
        <p className="eyebrow">World Cup 2026</p>
        <h1>Full schedule</h1>
        <p className="intro">All upcoming fixtures in one place. Times are displayed in UTC until you choose your local timezone on the homepage.</p>
        <AdSlot placement="schedule" className="inline-ad" />
        <UpcomingMatches matches={mockMatches} />
      </main>
      <Footer />
    </>
  );
}
