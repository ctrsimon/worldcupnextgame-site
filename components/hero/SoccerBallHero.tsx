"use client";

import { useEffect, useState } from "react";
import { SoccerBallSvg } from "./SoccerBallSvg";

export function SoccerBallHero() {
  const [reduced, setReduced] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(query.matches);
    const updateProgress = () => setProgress(Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight * 0.8))));
    updateMotion(); updateProgress();
    query.addEventListener("change", updateMotion); window.addEventListener("scroll", updateProgress, { passive: true });
    return () => { query.removeEventListener("change", updateMotion); window.removeEventListener("scroll", updateProgress); };
  }, []);
  const ballStyle = reduced ? undefined : { transform: `translateY(${-progress * 38}px) rotate(${progress * 270}deg) scale(${1 + progress * .14})` };
  return <section className={`hero ${reduced ? "reduced" : ""}`} aria-label="World Cup next match introduction"><div className="hero-copy"><p className="eyebrow">World Cup Next Game</p><h1>The world is waiting.</h1><p>One match comes next.</p><a className="skip" href="#next-match">Skip to next match <span aria-hidden="true">↓</span></a></div><div className="ball-wrap" style={ballStyle}><SoccerBallSvg /></div><p className="scroll-hint">Scroll to reveal <span aria-hidden="true">↓</span></p></section>;
}
