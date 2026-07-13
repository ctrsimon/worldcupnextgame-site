# Monetization and live-data setup

## 1. Add the site to AdSense

1. Create or sign in to the site owner's Google AdSense account.
2. In **Sites**, add the production domain and complete the requested ownership and policy review.
3. In **Ads → By ad unit**, create two responsive display units named `WorldCupNextGame schedule` and `WorldCupNextGame match`.
4. Copy the publisher ID (`ca-pub-…`) and each numeric `data-ad-slot` value from the generated ad code.
5. In Vercel, set these production environment variables and redeploy:

   ```text
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-your-publisher-id
   NEXT_PUBLIC_ADSENSE_SLOT_SCHEDULE=your-schedule-slot-id
   NEXT_PUBLIC_ADSENSE_SLOT_MATCH=your-match-slot-id
   ```

6. Replace `pub-3374016401769525` in `public/ads.txt` with the publisher ID from the same AdSense account, commit, and deploy. Confirm `https://your-domain/ads.txt` returns that exact line.

The application deliberately does not load ad code until its client ID and an applicable slot ID are set. This prevents accidental use of a placeholder or another publisher’s account.

## 2. Add live World Cup fixtures for free (recommended)

1. Register for a free football-data.org account to receive a token. Its free coverage includes the World Cup and basic fixture/schedule data; scores may be delayed.
2. Add this Vercel production environment variable and redeploy:

   ```text
   FOOTBALL_DATA_API_TOKEN=your-private-token
   ```

3. Verify `https://your-domain/api/matches` returns `"source":"football-data"`. The token must never appear in browser code, Git, or a `NEXT_PUBLIC_` variable.

## 3. API-Football alternative

API-Football is retained as a fallback integration. Its free plan does not currently include the 2026 season, so do not configure it unless you have eligible paid access.
