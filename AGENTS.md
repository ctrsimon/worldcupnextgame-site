# World Cup Next Game — Agent Guide

## Product purpose

This is a fast, evergreen football utility that answers **“When is the next FIFA World Cup match?”**. It is designed to earn advertising revenue around each men’s and women’s World Cup, while staying useful between tournaments with announced schedules and historical/next-edition context.

## Product principles

- Put the next match and the visitor’s local kickoff time before everything else.
- Treat fixture data as time-sensitive: display a source and update time, validate provider responses, and preserve a safe fallback if the provider is unavailable.
- Do not imply affiliation with FIFA, a national association, or a broadcaster. Do not use protected marks or copied editorial material.
- Keep pages original and genuinely useful: countdown, local time, venue, schedule, match pages, calendar links, data sources, and clear legal pages.
- Monetize sparingly. Ads must be labeled, responsive, never cover content, and must not be encouraged, clicked, or refreshed programmatically.

## Data and secrets

- API-Football is the current live-fixture provider. Its key is server-only in `API_FOOTBALL_KEY`; never prefix it with `NEXT_PUBLIC_`, commit it, or log it.
- `API_FOOTBALL_LEAGUE_ID=1` and `API_FOOTBALL_SEASON=2026` identify the men’s 2026 World Cup. Confirm these values in the provider dashboard before changing editions.
- The UI must continue to render the vetted fallback fixtures if live data is missing or invalid.
- Keep provider transformations in `lib/matches/api-football.ts` and validate every returned match with `normalizeMatch`.

## Ads and compliance

- AdSense configuration uses `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and placement-specific slot IDs. These are public identifiers, but must belong to the site owner’s approved AdSense account.
- Keep `/ads.txt` in sync with the publisher ID. It cannot be populated from an environment variable because it is a static public file.
- Do not add ads until the site is approved and the publisher and slot IDs are supplied. Do not hard-code someone else’s publisher ID.
- Maintain the privacy, terms, contact, and data-source pages whenever advertising or data use changes.

## Engineering workflow

- Next.js App Router + TypeScript. Prefer server-side data access and cache provider calls conservatively.
- Run `npm run lint`, `npm test`, and `npm run build` after meaningful changes.
- Do not overwrite unrelated working-tree changes. `.env.local` is local-only; update `.env.example` and documentation instead.
