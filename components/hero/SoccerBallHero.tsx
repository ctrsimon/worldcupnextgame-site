"use client";

import { useEffect, useState } from "react";
import { SoccerBallSvg } from "./SoccerBallSvg";

export function SoccerBallHero() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => { const query = window.matchMedia("(prefers-reduced-motion: reduce)"); setReduced(query.matches); }, []);
  return <section className={`hero ${reduced ? "reduced" : ""}`} aria-label="World Cup next match introduction"><div className="hero-copy"><p className="eyebrow">World Cup Next Game</p><h1>The world is waiting.</h1><p>One match comes next.</p><a className="skip" href="#next-match">Skip to next match <span aria-hidden="true">↓</span></a></div><div className="ball-wrap"><SoccerBallSvg /></div><p className="scroll-hint">Scroll to reveal <span aria-hidden="true">↓</span></p></section>;
}
