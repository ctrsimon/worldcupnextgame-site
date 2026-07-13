export function SoccerBallSvg() {
  return (
    <svg className="ball-svg" viewBox="0 0 300 300" role="img" aria-label="An original illustrated soccer ball">
      <defs>
        <radialGradient id="ball" cx="34%" cy="24%">
          <stop stopColor="#ffffff" />
          <stop offset=".72" stopColor="#e3e9e5" />
          <stop offset="1" stopColor="#9aa8a1" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="140" fill="url(#ball)" />
      <circle cx="150" cy="150" r="140" fill="none" stroke="#c7d0cb" strokeWidth="5" />

      <path className="ball-panel" d="m150 96 39 28-15 46h-48l-15-46z" />
      <path className="ball-panel" d="m150 22 29 21-10 35h-38l-10-35z" />
      <path className="ball-panel" d="m43 95 34-15 27 27-14 36-39-2z" />
      <path className="ball-panel" d="m257 95-34-15-27 27 14 36 39-2z" />
      <path className="ball-panel" d="m76 221 34-19 30 22-4 39-36 7z" />
      <path className="ball-panel" d="m224 221-34-19-30 22 4 39 36 7z" />

      <g fill="none" stroke="#34413d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7">
        <path d="m131 78 19 18 19-18m-65 29 7 17m85-17-7 17m-100 19 36 27m85-27-36 27m-59 4 15 35m59-35-15 35m-34 8-4 39m38-39 4 39" />
        <path d="m51 141 25 80m173-80-25 80M100 270l36-7m64 0 36 7" />
      </g>
      <path d="M150 13a137 137 0 0 1 0 274" fill="none" stroke="rgba(255,255,255,.38)" strokeLinecap="round" strokeWidth="4" />
    </svg>
  );
}
