"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Match } from "@/lib/matches/types";
import { getCountdown } from "@/lib/time/countdown";
import { MatchCountdown } from "@/components/match/MatchCountdown";
import { LocalKickoffTime } from "@/components/timezone/LocalKickoffTime";
import { TimezoneSelector } from "@/components/timezone/TimezoneSelector";
import { SoccerBallSvg } from "@/components/hero/SoccerBallSvg";
import { AdSlot } from "@/components/ads/AdSlot";

type Props = { match: Match; upcoming: Match[]; initialCountdown: ReturnType<typeof getCountdown>; source: string; updatedAt: string };

export function CinematicHome({ match, upcoming, initialCountdown, source, updatedAt }: Props) {
  const [progress, setProgress] = useState(0);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const progressRef = useRef(0);
  const touchY = useRef<number | null>(null);

  const move = useCallback((amount: number) => {
    progressRef.current = Math.min(1, Math.max(0, progressRef.current + amount));
    setProgress(progressRef.current);
  }, []);

  useEffect(() => {
    document.body.classList.add("cinema-locked");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { progressRef.current = 1; setProgress(1); }
    const wheel = (event: WheelEvent) => { event.preventDefault(); move(event.deltaY * 0.00072); };
    const key = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); move(0.12); }
      if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); move(-0.12); }
      if (event.key === "Home") { progressRef.current = 0; setProgress(0); }
      if (event.key === "End") { progressRef.current = 1; setProgress(1); }
    };
    const touchStart = (event: TouchEvent) => { touchY.current = event.touches[0]?.clientY ?? null; };
    const touchMove = (event: TouchEvent) => {
      if (touchY.current === null || !event.touches[0]) return;
      event.preventDefault();
      const next = event.touches[0].clientY;
      move((touchY.current - next) * 0.0024);
      touchY.current = next;
    };
    window.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("keydown", key);
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: false });
    return () => {
      document.body.classList.remove("cinema-locked");
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
    };
  }, [move]);

  const reveal = clamp((progress - 0.54) / 0.34);
  const intro = 1 - clamp(progress / 0.38);
  const journey = clamp(progress / 0.76);
  const sceneStyle = { "--p": progress, "--reveal": reveal, "--intro": intro } as React.CSSProperties;

  return <main className="cinema" style={sceneStyle} data-complete={progress > .94}>
    <div className="cinema-noise" aria-hidden="true" />
    <div className="cinema-glow" aria-hidden="true" />
    <div className="cinema-grid" aria-hidden="true" />

    <header className="cinema-header">
      <Link href="/" className="cinema-mark" aria-label="World Cup Next Game home"><span>W</span><i /> <span>C</span></Link>
      <p>World Cup 2026 <span>/</span> Match intelligence</p>
      <Link href="/schedule">Full schedule ↗</Link>
    </header>

    <div className="frame-corners" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="telemetry telemetry-left" aria-hidden="true">
      <span>SYS / MATCH SEEK</span><strong>{String(Math.round(progress * 100)).padStart(3, "0")}%</strong>
      <span>UTC LOCKED</span><span>{source === "football-data" ? "LIVE DATA FEED" : "SCHEDULE FEED"}</span>
    </div>
    <div className="telemetry telemetry-right" aria-hidden="true">
      <span>40.8136° N</span><span>74.0745° W</span><span>STADIUM FEED / 01</span>
    </div>

    <section className="intro-copy" aria-hidden={intro < .1}>
      <p>There is always</p>
      <h1>ONE<br /><em>NEXT</em></h1>
      <span>Match the moment. Know the time.</span>
    </section>

    <div className="orbital-system" aria-hidden="true">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
      <div className="ball-stage"><div className="ball-aura" /><SoccerBallSvg /></div>
      <span className="orbit-label orbit-label-a">HOME / {match.homeTeam.code}</span>
      <span className="orbit-label orbit-label-b">AWAY / {match.awayTeam.code}</span>
    </div>

    <section className="match-reveal" id="next-match" aria-label="Next World Cup match">
      <div className="reveal-kicker"><span>Next transmission</span><i /> <span>{match.stage}</span></div>
      <div className="matchup">
        <div><span>{match.homeTeam.code}</span><h2>{match.homeTeam.name}</h2></div>
        <b>VS</b>
        <div><span>{match.awayTeam.code}</span><h2>{match.awayTeam.name}</h2></div>
      </div>
      <MatchCountdown kickoffUtc={match.kickoffUtc} initialCountdown={initialCountdown} />
      <LocalKickoffTime kickoffUtc={match.kickoffUtc} />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
        <TimezoneSelector />
      </div>
      <p className="cinema-venue">{match.venue?.name} <span>—</span> {match.venue?.city}</p>
      <div className="cinema-actions">
        <Link href={`/match/${match.slug}`}>Match details <span>↗</span></Link>
        <a href={`/api/matches/${match.slug}/calendar`}>Add to calendar <span>＋</span></a>
      </div>
      <p className="cinema-data-note">Updated {new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit", timeZone: "UTC", timeZoneName: "short" }).format(new Date(updatedAt))} · {source === "football-data" ? "football-data.org" : "fixture feed"}</p>
    </section>

    <button className="skip-cinema" onClick={() => { progressRef.current = 1; setProgress(1); }} aria-label="Reveal next match">
      <span>{progress > .94 ? "Match locked" : "Scroll to reveal"}</span><i><b style={{ transform: `scaleY(${Math.max(.04, journey)})` }} /></i>
    </button>

    <button className="up-next-button" onClick={() => setScheduleOpen(true)}>Up next <span>{String(upcoming.length).padStart(2, "0")}</span></button>

    <aside className={`schedule-drawer ${scheduleOpen ? "is-open" : ""}`} aria-hidden={!scheduleOpen}>
      <div className="drawer-top"><p><span>Queue</span> Upcoming fixtures</p><button onClick={() => setScheduleOpen(false)} aria-label="Close upcoming fixtures">Close ×</button></div>
      {upcoming.slice(0, 5).map((item, index) => <Link href={`/match/${item.slug}`} key={item.id} className="drawer-match"><span>0{index + 1}</span><div><strong>{item.homeTeam.name} <i>vs</i> {item.awayTeam.name}</strong><small>{item.stage} · {item.venue?.city}</small></div><b>↗</b></Link>)}
      <AdSlot placement="schedule" className="drawer-ad" />
      <Link href="/schedule" className="drawer-all">View the full schedule <span>→</span></Link>
    </aside>
    {scheduleOpen && <button className="drawer-scrim" onClick={() => setScheduleOpen(false)} aria-label="Close upcoming fixtures" />}
    <nav className="cinema-explore" aria-label="Explore World Cup information"><Link href="/today">Today</Link><Link href="/tomorrow">Tomorrow</Link><Link href="/schedule">All fixtures</Link><Link href="/data-sources">Data source</Link></nav>
  </main>;
}

function clamp(value: number) { return Math.min(1, Math.max(0, value)); }
