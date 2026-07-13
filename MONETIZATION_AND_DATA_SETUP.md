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