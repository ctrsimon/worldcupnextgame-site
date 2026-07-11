# World Cup Next Game Website
## Product, Design, and Technical Implementation Specification

**Working domain:** `worldcupnextgame.com`  
**Alternative domain:** `thenextworldcupgame.com`  
**Recommended stack:** Next.js App Router, TypeScript, Tailwind CSS, Motion, Vercel  
**Primary goal:** Give visitors the answer to “When is the next World Cup game?” in the fastest, clearest, and most memorable way possible.

---

## 1. Product Vision

Build the most visually distinctive and immediately useful website for finding the next FIFA World Cup match.

The site should feel like a small digital event, not a generic fixture table. A visitor arrives on a nearly full-screen soccer ball. As they scroll, the ball animates, rotates, transforms, or opens to reveal the next match. The reveal should feel dramatic but remain fast, intuitive, and accessible.

The core information must always remain the priority:

- Which teams are playing
- Time remaining until kickoff
- Local kickoff date and time
- Tournament stage
- Venue and host city
- Several upcoming matches
- A clear indication of whether a game is scheduled, live, delayed, or complete

Advertisements should be integrated carefully around the central information without degrading trust, readability, performance, or interaction.

The product is deliberately narrow. It should answer one high-intent question exceptionally well.

---

## 2. Primary Product Goals

### 2.1 Functional goals

1. Answer the visitor’s question within seconds.
2. Automatically display kickoff time in the visitor’s local timezone.
3. Maintain accurate match data without manual daily editing.
4. Transition correctly when one match ends and another becomes the next game.
5. Handle live, delayed, postponed, cancelled, and completed matches.
6. Show upcoming matches beyond the single next game.
7. Work well on mobile, where most event-search traffic is likely to arrive.
8. Remain useful before, during, and shortly after each World Cup.
9. Support future men’s and women’s World Cups without rebuilding the entire application.
10. Provide enough original usefulness and supporting content to avoid feeling like a thin countdown page.

### 2.2 Experience goals

The visitor should think:

- “That was much cooler than expected.”
- “I instantly found the answer.”
- “The site knew my local time.”
- “I would send this to someone.”
- “I might leave this tab open.”

### 2.3 Business goals

1. Validate whether search traffic exists for this specific utility.
2. Develop a reusable event-countdown website architecture.
3. Monetize with tasteful display advertisements.
4. Build an email or notification audience only if demand appears.
5. Measure whether visitors return during the tournament.
6. Keep hosting and data costs extremely low until traffic justifies expansion.

### 2.4 Non-goals

This should not initially become:

- A full sports news publication
- A live commentary platform
- A betting website
- A social network
- A fantasy sports product
- A replacement for ESPN, FIFA, FotMob, or SofaScore
- A complicated account-based application
- A cluttered portal containing every available statistic

---

## 3. Product Positioning

### Core promise

> The next World Cup match, in your time, instantly.

### Suggested homepage title

> World Cup Next Game

### Suggested supporting line

> See who plays next, when kickoff begins in your timezone, and what matches follow.

### Brand personality

- Global
- Energetic
- Precise
- Modern
- Dramatic
- Trustworthy
- Minimal
- Unofficial, but polished

### Important legal positioning

The site must clearly state that it is an independent fan utility and is not affiliated with or endorsed by FIFA.

Do not use:

- FIFA logos
- Official tournament emblems
- Protected mascot artwork
- Broadcast footage
- Team federation logos without confirmed permission
- Design language that falsely implies an official FIFA product

Prefer:

- Country names
- National flags where legally and technically appropriate
- Original soccer illustrations
- Original ball graphics
- Generic tournament terminology
- Text-based venue and match information

---

## 4. Target Users

### Primary user

A casual fan searching:

- “When is the next World Cup game?”
- “What World Cup game is next?”
- “Who plays next in the World Cup?”
- “World Cup next match”
- “World Cup game today”
- “World Cup schedule local time”

This person does not want to study a full schedule. They want an immediate answer.

### Secondary users

- Fans checking the next match repeatedly
- Travelers confused by timezone differences
- People coordinating watch parties
- Visitors who want the next several games
- Fans following a specific country
- People searching shortly before or after a game
- Users asking voice assistants and then clicking a result

---

## 5. Core User Journey

### First visit

1. Visitor lands on homepage.
2. A large soccer ball dominates the viewport.
3. Minimal text invites scrolling:
   - “The next match is closer than you think.”
   - “Scroll to reveal kickoff.”
4. Scrolling rotates and advances the ball.
5. The ball visually transforms or moves aside.
6. The next-match information appears.
7. Countdown begins visibly.
8. User sees local kickoff time and teams.
9. User can continue to upcoming matches.
10. Ads appear around or below the utility without obstructing it.

### Returning visit

Returning visitors should not be forced through a long animation every time.

Possible behavior:

- Store a local preference after the first completed reveal.
- On subsequent visits, shorten the introduction.
- Provide a “Skip to next match” button from the first frame.
- Respect `prefers-reduced-motion`.
- Ensure direct links with anchors can skip the animation.

### Urgent visit close to kickoff

When kickoff is less than one hour away:

- The intro animation should become shorter.
- The countdown should receive greater visual emphasis.
- “Starts in 42 minutes” should be visible quickly.
- A live-game state should override the future-game countdown.

---

## 6. Homepage Narrative and Scroll Animation

## 6.1 Overall concept

The homepage begins as an immersive, nearly empty stage. A soccer ball is centered against a dark stadium-like environment. Scroll progress controls a sequence of visual states.

The animation should not feel like decorative scrolling pasted onto a utility. The ball should become the mechanism through which the information is revealed.

### Desired emotional sequence

1. Curiosity
2. Motion
3. Anticipation
4. Reveal
5. Clarity
6. Utility

---

## 6.2 Recommended scroll sequence

### Scene 1: Suspended ball

**Scroll range:** 0% to 15%

Visual:

- Soccer ball floating in darkness
- Subtle light above or behind
- Barely visible field markings or stadium haze
- Very slow idle rotation
- Small scroll cue beneath it

Text:

> The world is waiting.

or

> One match comes next.

Do not show ads in this first scene.

### Scene 2: Ball begins moving

**Scroll range:** 15% to 35%

Visual:

- Ball rotates more quickly as scroll progresses
- Camera moves closer
- Hexagonal and pentagonal panels become more visible
- Small particles, grass, chalk, or stadium dust react to movement
- Background sound is not recommended by default

Interaction:

- Animation should map directly to scroll position
- Avoid an uncontrolled autoplay sequence
- Users should be able to reverse-scroll naturally

### Scene 3: Energy builds

**Scroll range:** 35% to 55%

Possible visual directions:

#### Option A: Ball splits into panels

The ball’s panels separate slightly. Light shines through the seams. Team colors appear inside. The panels eventually form the frame around the match card.

#### Option B: Ball becomes a globe

The ball rotates into a globe-like object. Lines connect the two participating countries to the host city. It then collapses into the match display.

#### Option C: Ball strikes an invisible surface

The ball moves toward the screen, strikes a glass-like plane, and the impact reveals the matchup beneath it.

#### Option D: Ball rolls down a tunnel

The camera follows the ball through a stylized player tunnel. It emerges onto the field, where the scoreboard reveals the next match.

**Recommended choice:** Option A. It is distinctive, directly tied to the central object, and can transition cleanly into the information interface.

### Scene 4: Match reveal

**Scroll range:** 55% to 75%

The ball panels move outward and become framing elements. The core match card appears in the center.

Reveal order:

1. Tournament stage
2. Team A
3. “vs”
4. Team B
5. Countdown
6. Local date and time
7. Venue and city
8. Status badge

The countdown should be the strongest element after the team names.

Example:

> QUARTERFINAL  
> NORWAY vs ENGLAND  
> **02:14:37 UNTIL KICKOFF**  
> Sunday, July 12 · 4:00 AM  
> MetLife Stadium · East Rutherford

### Scene 5: Interface settles

**Scroll range:** 75% to 100%

The dramatic scene becomes a stable, practical interface.

- Match card becomes sticky briefly
- Upcoming matches slide upward below
- Header/navigation appears
- Ad placements fade in only after the reveal
- Background transitions from cinematic to readable
- The user can continue browsing normally

---

## 6.3 Animation principles

1. Scroll must remain responsive.
2. Avoid locking the page for too long.
3. The reveal should require roughly one viewport of scrolling, not five.
4. The answer must be reachable in under three seconds by a determined visitor.
5. Include a visible skip control.
6. Animation must work without causing layout shifts.
7. Mobile animation may be simplified.
8. Low-power devices should receive a lighter version.
9. Motion should degrade gracefully if WebGL fails.
10. The actual match data must exist as semantic HTML, not only inside canvas graphics.

---

## 6.4 Recommended implementation approach

### Preferred initial implementation

Use:

- CSS transforms
- SVG soccer ball artwork
- Motion for React scroll progress and transforms
- A limited number of layered DOM elements
- No Three.js in version one unless the Codex agent can keep performance strong

This approach is easier to maintain, more accessible, and less likely to create mobile performance problems.

### Optional advanced implementation

Use React Three Fiber for a genuine 3D ball only if:

- The model is highly optimized
- Initial JavaScript remains reasonable
- A static fallback exists
- Mobile rendering is tested
- The user can skip immediately
- Search-critical content is still rendered outside the canvas

### Ball asset

Create an original soccer ball using one of these methods:

1. Custom SVG with individually addressable panels
2. Lightweight GLB model with separated panel materials
3. CSS/SVG hybrid
4. Procedural canvas illustration

The ball should not reproduce an official tournament ball design.

---

## 7. Core Information Architecture

### Primary homepage sections

1. Animated hero
2. Next-match card
3. Upcoming matches
4. Today’s World Cup schedule
5. “How this works” utility explanation
6. Tournament overview
7. Frequently asked questions
8. About and disclaimer
9. Footer

### Recommended routes

```text
/
 /schedule
 /today
 /tomorrow
 /match/[matchSlug]
 /team/[teamSlug]
 /venue/[venueSlug]
 /about
 /privacy
 /terms
 /contact
 /data-sources
```

### Future routes

```text
/womens-world-cup
/mens-world-cup
/calendar
/watch
/notifications
```

Do not create hundreds of empty SEO pages. Only create pages when they contain genuinely useful, accurate, and differentiated information.

---

## 8. Next-Match Card Specification

The next-match card is the heart of the product.

### Required fields

- Team A name
- Team B name
- Team A flag
- Team B flag
- Match status
- Tournament
- Tournament stage
- Kickoff timestamp in UTC
- Kickoff in visitor’s local timezone
- Host city
- Venue
- Countdown
- Match identifier
- Last data refresh time

### Optional fields

- Group
- Match number
- Broadcast information by region
- Weather
- Team records
- Previous meetings
- Add-to-calendar
- Share button
- Notification button

### Countdown states

#### More than 24 hours

> 2 days, 6 hours

#### Less than 24 hours

> 06:41:22

#### Less than one hour

> 42:17 UNTIL KICKOFF

#### Scheduled time reached but status uncertain

> Kickoff expected now

Do not falsely say “LIVE” based solely on the clock.

#### Live

> LIVE · 67'

Only show live when the data provider confirms it.

#### Halftime

> HALFTIME

#### Delayed

> DELAYED

#### Postponed

> POSTPONED

#### Complete

The homepage should normally advance to the next scheduled match. It may briefly show:

> Final: Spain 2–1 Belgium  
> Next: Norway vs England in 3h 12m

### Timezone behavior

- Detect timezone with `Intl.DateTimeFormat().resolvedOptions().timeZone`.
- Render an initial server-safe UTC or tournament timezone.
- Hydrate into the visitor timezone on the client.
- Avoid displaying the wrong local time for a visible period.
- Clearly label the timezone.
- Allow manual timezone selection.
- Save manual selection in local storage.
- Include a “Use my timezone” reset.

---

## 9. Upcoming Matches Section

Show at least the next five scheduled matches.

Each row should include:

- Date
- Local kickoff time
- Teams
- Stage
- Venue or city
- Countdown or status
- Link to match page

### Desktop layout

A vertical match timeline or compact fixture cards.

### Mobile layout

Single-column cards with large tap targets.

### Visual hierarchy

The next match is dominant. Future matches should be clear but quieter.

### Progressive disclosure

Allow:

- “Show full schedule”
- Filter by date
- Filter by team
- Filter by tournament stage
- Switch timezone

---

## 10. Advertisement Strategy

## 10.1 Principle

The site must remain useful without advertisements, and ads must never appear to be match controls, navigation, team content, or official tournament content.

Google’s guidance emphasizes keeping sought-after content easy to find, avoiding accidental clicks, and not formatting ads to mimic content. Build the layout around those constraints.

## 10.2 Recommended placements

### Desktop

1. **Left rail ad**
   - Outside the main content width
   - Sticky only within policy-safe limits
   - Hidden on narrower viewports

2. **Right rail ad**
   - Balanced with left rail
   - Should not make the central card feel trapped

3. **Below next-match card**
   - Clear separation and “Advertisement” label
   - Appears after the key answer

4. **Between upcoming match groups**
   - Never inserted between the teams and kickoff time of one match

5. **Footer ad**
   - Optional

### Mobile

1. One ad after the main next-match result
2. One ad after several future matches
3. Optional bottom anchor ad only after policy review
4. No left or right rails
5. No ad covering the countdown
6. No ad inserted into the scroll-controlled ball reveal

## 10.3 Avoid

- Ads in the initial soccer-ball hero
- Ads that move with the ball
- Ads disguised as team cards
- Ads immediately beside “Add to Calendar”
- Ads close to scroll or skip controls
- Ads occupying more visual emphasis than the next match
- Ads that cause layout shifts
- Aggressive full-screen interstitials
- Auto-playing video ads
- A “wall of ads” around a tiny information card

## 10.4 Ad placeholder design

Build reusable components before ad approval:

```tsx
<AdSlot
  placement="desktop-left-rail"
  sizes={[[160, 600], [300, 600]]}
/>
```

Each placeholder should:

- Reserve dimensions to prevent layout shift
- Collapse cleanly when no ad is available
- Include an accessible advertisement label
- Be disabled in development by default
- Support responsive visibility
- Never block the primary content

## 10.5 Monetization sequence

1. Launch without live ads or with placeholders.
2. Confirm the experience and traffic.
3. Add privacy and consent infrastructure.
4. Apply to an ad network.
5. Start with one or two placements.
6. Compare revenue against bounce rate, performance, and retention.
7. Increase placements only if metrics remain healthy.

---

## 11. Visual Design System

### Design direction

“Night match under stadium lights.”

### Palette

Use an original palette, not FIFA branding.

Suggested colors:

- Near-black stadium background
- Deep navy
- Off-white text
- Electric lime accent
- Muted field green
- Warm amber for upcoming status
- Red only for alerts or live urgency

### Typography

Use a combination of:

- Bold condensed display font for matchups and countdown
- Highly readable sans-serif for details and navigation
- Tabular numerals for countdown timers

Potential free fonts:

- Archivo
- Inter
- Roboto Condensed
- Space Grotesk
- Barlow Condensed
- Geist

Use `next/font` to self-host and optimize fonts.

### Shape language

- Circular forms inspired by balls and stadiums
- Angular panel lines
- Scoreboard-like rectangles
- Subtle field markings
- Soft glows, not excessive neon
- Large whitespace around critical information

### Flags

Use a consistent flag source or local SVG assets.

Requirements:

- Proper alt text
- Do not rely on flags alone
- Handle countries whose sporting name differs from common naming
- Avoid emoji flags as the only implementation because rendering differs by platform

---

## 12. Responsive Design

### Mobile first

The site must be designed primarily for 360–430 pixel widths.

Mobile requirements:

- Hero ball fits without cropping essential parts
- Skip button remains reachable
- Countdown remains on one or two lines
- Team names wrap gracefully
- No tiny fixture table
- Ads never squeeze core content horizontally
- Touch targets at least 44 by 44 CSS pixels
- Avoid hover-dependent interactions

### Tablet

- Single center column
- Optional one ad below content
- Larger animation
- Two-column upcoming match cards when appropriate

### Desktop

- Center utility column
- Optional ad rails
- Hero can use full viewport
- Upcoming fixtures may use a wider timeline
- Maximum readable content width around 1100–1200 pixels

### Very wide screens

Do not let ads drift too far from the content. Keep a bounded composition.

---

## 13. Accessibility

The dramatic animation cannot make the site inaccessible.

### Required

- Semantic headings
- Keyboard-accessible controls
- Visible focus states
- Sufficient contrast
- Screen-reader-readable match information
- Text alternatives for visual flags and ball imagery
- No information communicated only through color
- `aria-live` used carefully for status changes
- Respect `prefers-reduced-motion`
- Skip-animation control
- Do not announce every countdown second to screen readers
- Countdown should expose a stable descriptive label
- Ensure the page remains usable at 200% zoom
- Avoid scroll hijacking

### Reduced-motion mode

When reduced motion is enabled:

- Show a static ball
- Fade directly into the match card
- Do not split panels or move the camera
- Keep the reveal under 300 ms
- Preserve the complete narrative and information

---

## 14. Performance Requirements

### Performance targets

Aim for:

- Largest Contentful Paint under 2.5 seconds on a typical mobile connection
- Interaction to Next Paint under 200 ms
- Cumulative Layout Shift under 0.1
- Smooth animation near 60 fps on modern devices
- Functional experience on low-end mobile devices

### Techniques

- Use Server Components by default
- Isolate animation into a small Client Component
- Lazy-load advanced animation code
- Pre-render match content
- Reserve ad dimensions
- Use optimized local images
- Avoid enormous background video
- Avoid loading all schedule data into the client
- Cache schedule responses
- Use font subsets
- Use dynamic imports for optional graphics
- Keep third-party scripts minimal
- Defer ad scripts until after consent and main content
- Use `content-visibility` where helpful
- Pause animation work when tab is hidden

### Graceful fallback

If JavaScript fails, the visitor should still see:

- Next match
- Kickoff time
- Date
- Venue
- Upcoming matches
- Navigation

---

## 15. Technology Stack

### Framework

- Next.js using the App Router
- TypeScript
- React
- Vercel hosting

The App Router is the recommended modern routing architecture in current Next.js documentation and supports Server Components, layouts, loading states, and file-based routing.

### Styling

- Tailwind CSS
- CSS custom properties for design tokens
- CSS Modules only where animation complexity benefits from them

### Animation

Preferred:

- Motion for React
- Native CSS transforms
- SVG manipulation

Optional:

- React Three Fiber
- Drei
- Three.js

Only add the 3D stack if it provides a clear visual benefit and passes performance testing.

### Data validation

- Zod

### Date and time

- Native `Intl`
- Optional `date-fns` for formatting utilities
- Avoid Moment.js

### Testing

- Vitest
- React Testing Library
- Playwright

### Analytics

Choose one:

- Vercel Web Analytics
- Plausible
- Google Analytics

Use only after consent requirements are understood.

### Error monitoring

- Sentry, optional
- At minimum, Vercel logs and structured server logging

---

## 16. Suggested Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

  schedule/
    page.tsx

  today/
    page.tsx

  tomorrow/
    page.tsx

  match/
    [slug]/
      page.tsx

  team/
    [slug]/
      page.tsx

  venue/
    [slug]/
      page.tsx

  about/
    page.tsx

  privacy/
    page.tsx

  terms/
    page.tsx

  contact/
    page.tsx

  data-sources/
    page.tsx

  api/
    matches/
      route.ts
    revalidate/
      route.ts

components/
  hero/
    SoccerBallHero.tsx
    SoccerBallSvg.tsx
    ScrollHint.tsx
    SkipRevealButton.tsx

  match/
    NextMatchCard.tsx
    MatchCountdown.tsx
    MatchStatusBadge.tsx
    TeamDisplay.tsx
    MatchMetadata.tsx
    UpcomingMatches.tsx
    MatchRow.tsx

  ads/
    AdSlot.tsx
    DesktopAdRails.tsx
    MobileInlineAd.tsx
    AdConsentGate.tsx

  layout/
    Header.tsx
    Footer.tsx
    MainShell.tsx

  timezone/
    TimezoneSelector.tsx
    LocalKickoffTime.tsx

  seo/
    JsonLd.tsx

lib/
  matches/
    provider.ts
    normalize.ts
    selectNextMatch.ts
    types.ts
    mock-data.ts

  time/
    format.ts
    countdown.ts

  seo/
    metadata.ts
    structured-data.ts

  analytics/
    events.ts

  env.ts

public/
  ball/
  flags/
  icons/

tests/
  unit/
  integration/
  e2e/
```

---

## 17. Match Data Architecture

## 17.1 Provider abstraction

Do not couple the entire application directly to one sports API.

Create a provider interface:

```ts
export interface MatchProvider {
  getMatches(params: {
    tournamentId: string;
    from: string;
    to: string;
  }): Promise<RawMatch[]>;
}
```

Normalize every provider response into a stable internal model.

```ts
export type MatchStatus =
  | "scheduled"
  | "delayed"
  | "postponed"
  | "cancelled"
  | "live"
  | "halftime"
  | "completed";

export interface Match {
  id: string;
  slug: string;
  tournamentId: string;
  tournamentName: string;
  stage: string;
  group?: string;
  kickoffUtc: string;
  status: MatchStatus;
  homeTeam: Team;
  awayTeam: Team;
  venue?: Venue;
  score?: Score;
  providerUpdatedAt: string;
}
```

## 17.2 Data-source selection criteria

Before selecting a provider, verify:

- World Cup coverage
- Men’s and women’s tournament coverage
- Schedule accuracy
- Live-status support
- Rate limits
- Commercial-use permission
- Display and attribution requirements
- Reliability
- Cost
- Webhook availability
- Terms concerning caching
- Venue and stage data
- Historical data access

Do not scrape FIFA or another site unless legal permission and technical reliability have been established.

## 17.3 Fetching strategy

### Before tournament

- Refresh schedule daily
- Refresh more frequently after official draw or schedule changes

### During tournament

- More than 24 hours before next match: refresh every 30–60 minutes
- Less than 24 hours: refresh every 10–15 minutes
- During likely live window: refresh every 30–60 seconds if provider and cost permit
- After final whistle: confirm result and next-match transition

### Vercel strategy

Use a combination of:

- Server-side fetching
- Cached data
- Incremental Static Regeneration
- On-demand revalidation
- Optional Vercel Cron job
- Client polling only for live states

### Resilience

Keep the most recently valid schedule in durable storage or a checked-in emergency fallback.

If the API fails:

> Schedule data is temporarily delayed. Last updated 8 minutes ago.

Never replace valid cached data with an invalid empty response.

---

## 18. Selecting the “Next Match”

The selection logic must be explicit and tested.

### Basic algorithm

1. Retrieve all relevant tournament matches.
2. Normalize kickoff timestamps to UTC.
3. Exclude cancelled matches.
4. Identify provider-confirmed live matches.
5. If one match is live, display it as the primary match.
6. Otherwise find the earliest scheduled, delayed, or postponed match that has not completed.
7. If a scheduled kickoff time has passed but provider status remains scheduled:
   - Display “Kickoff expected now”
   - Do not mark live automatically
8. If all matches are complete:
   - Display tournament completion state
   - Show final result and next relevant World Cup event

### Simultaneous matches

Group-stage matches can begin simultaneously.

If two or more matches share the next kickoff time:

> Next World Cup games

Show both equally. Do not arbitrarily imply one is first.

### Postponed match

A postponed match without a new kickoff time should not block the entire product. Show it in an alert, then display the next match with a confirmed time.

---

## 19. SEO Strategy

## 19.1 Homepage search intent

Target phrases naturally:

- World Cup next game
- Next World Cup game
- When is the next World Cup game
- World Cup next match
- Who plays next in the World Cup
- World Cup schedule today

Avoid keyword stuffing.

### Suggested title

> World Cup Next Game: Teams, Kickoff Time and Countdown

### Suggested description

> See the next World Cup match, a live countdown to kickoff, your local start time, venue, and upcoming fixtures.

### Dynamic title during tournament

> Norway vs England: Next World Cup Game and Kickoff Time

## 19.2 Technical SEO

- Server-render the next-match information
- Use canonical URLs
- Generate sitemap
- Configure robots.txt
- Include Open Graph metadata
- Include Twitter card metadata
- Use descriptive page titles
- Build clean match slugs
- Use breadcrumbs on internal pages
- Avoid client-only rendering for critical content
- Ensure ads do not push primary content below the fold

## 19.3 Structured data

Use JSON-LD where accurate.

Potential schema types:

- `SportsEvent`
- `SportsTeam`
- `Place`
- `BreadcrumbList`
- `WebSite`
- `Organization`

Do not add fields that are not visible or verified. Structured data must match the page content.

Example concept:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "Norway vs England",
  "startDate": "2026-07-11T21:00:00-04:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Example Stadium"
  },
  "competitor": [
    {
      "@type": "SportsTeam",
      "name": "Norway"
    },
    {
      "@type": "SportsTeam",
      "name": "England"
    }
  ]
}
```

## 19.4 Content depth

A single countdown may be too thin to earn durable search visibility or advertising approval.

Add genuinely useful content:

- Upcoming matches
- Timezone explanation
- Venue information
- Match-stage explanation
- Calendar export
- Team-specific fixture pages
- Data-source transparency
- Frequently asked questions
- Clear update timestamp
- Concise tournament format guide

Do not create generic AI-written articles merely to increase word count.

---

## 20. Social and Sharing

### Share card

Generate a dynamic Open Graph image containing:

- Team names
- Flags
- Stage
- Kickoff time
- Countdown or date
- Website name

### Share actions

- Copy link
- Native share API on mobile
- Share to X
- Share to WhatsApp
- Add to calendar

Suggested share copy:

> Norway vs England is the next World Cup match. Kickoff is in 2 hours 14 minutes: [link]

### Viral opportunity

Allow the user to choose their timezone before generating a share image. The recipient sees a useful local-time card.

---

## 21. Calendar Integration

Provide:

- Download `.ics`
- Google Calendar link
- Outlook calendar link

The calendar event should include:

- Match title
- Correct kickoff
- Venue
- Website URL
- Stage
- Reminder suggestion

Do not require an account.

---

## 22. Notifications

Not required for version one, but design the interface to support future alerts.

Potential feature:

> Remind me 30 minutes before kickoff.

Possible implementation:

- Browser notifications
- Email alerts
- Calendar reminder
- SMS only if economics justify it

Do not build a notification backend before traffic validates demand.

---

## 23. Analytics and Experiments

### Core events

```text
page_view
hero_reveal_started
hero_reveal_completed
hero_skipped
timezone_changed
schedule_opened
match_opened
calendar_added
share_clicked
ad_viewable
return_visit
```

### Key metrics

- Search impressions
- Search click-through rate
- Unique visitors
- Bounce rate
- Time to key information
- Hero skip rate
- Reveal completion rate
- Calendar-add rate
- Share rate
- Return visitor rate
- Pages per session
- Ad viewability
- Revenue per thousand sessions
- Core Web Vitals

### Experiments

1. Long reveal vs short reveal
2. Static ball vs 3D ball
3. Countdown first vs team names first
4. One inline ad vs two
5. Left and right ad rails vs right only
6. “Game” wording vs “match” wording
7. Homepage upcoming count: three vs five vs eight

Do not experiment in ways that obscure the answer.

---

## 24. Privacy, Consent, and Legal Pages

Before monetization, include:

- Privacy policy
- Terms of use
- Cookie notice where legally required
- Consent management where legally required
- Contact information
- Data-source disclosure
- Affiliate disclosure if relevant
- Independent-site disclaimer

### Footer disclaimer

> World Cup Next Game is an independent fan-made utility and is not affiliated with or endorsed by FIFA or any national football association.

### Data disclaimer

> Match times and statuses may change. Confirm critical details with official tournament or broadcaster sources.

---

## 25. Error and Edge States

### API unavailable

Show cached data and update timestamp.

### No future matches

Show:

- Tournament completed
- Champion and final result if available
- Next scheduled World Cup edition or relevant tournament
- Archive of results

### Timezone unavailable

Use UTC and offer selector.

### Unknown teams

For knockout placeholders:

> Winner of Quarterfinal 3  
> vs  
> Winner of Quarterfinal 4

### Match changed

Display a visible update:

> Schedule updated 4 minutes ago.

### Live-score disagreement

Prefer provider-confirmed status and avoid presenting speculative scores.

### Ad blocker

Do not shame the visitor. The site should continue functioning normally.

---

## 26. Testing Plan

### Unit tests

Test:

- Countdown calculations
- Timezone conversion
- Next-match selection
- Simultaneous-match selection
- Live-match priority
- Postponed matches
- Tournament-complete state
- Data normalization
- Schema generation

### Component tests

Test:

- Match card rendering
- Long team names
- Missing venue
- Unknown opponent
- Reduced motion
- Ad placeholder collapse
- Timezone selector

### End-to-end tests

Test:

1. Homepage loads
2. User can skip animation
3. Scroll reveals match
4. Countdown appears
5. Local timezone appears
6. Schedule opens
7. Calendar download works
8. Mobile navigation works
9. JavaScript-disabled page remains useful
10. API failure shows cached state

### Device testing

Minimum:

- iPhone Safari
- Android Chrome
- Desktop Chrome
- Desktop Safari
- Firefox
- Low-power mobile emulation
- Reduced-motion mode
- Screen reader spot check

---

## 27. Deployment and Vercel Setup

### Initial setup

1. Create GitHub repository.
2. Create Next.js project with TypeScript and App Router.
3. Connect repository to Vercel.
4. Configure preview deployments.
5. Add production domain.
6. Add environment variables.
7. Configure analytics.
8. Configure error logging.
9. Set up cron or scheduled revalidation if required.
10. Protect preview-only administrative endpoints.

### Environment variables

Example:

```env
MATCH_API_BASE_URL=
MATCH_API_KEY=
MATCH_API_TOURNAMENT_ID=
REVALIDATION_SECRET=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_ADSENSE_CLIENT_ID=
```

Validate environment variables at startup.

### Branch workflow

- `main`: production
- feature branches: Vercel preview deployments
- pull request required before production merge when possible

---

## 28. Security

- Keep API keys server-side
- Do not expose provider credentials through `NEXT_PUBLIC_*`
- Validate API responses
- Rate-limit public API routes
- Sanitize user-supplied timezone or query parameters
- Protect revalidation endpoints with a secret
- Set security headers
- Use a strict Content Security Policy where possible
- Review third-party ad scripts
- Avoid unnecessary packages
- Enable automated dependency updates

---

## 29. Development Phases

## Phase 1: Static visual prototype

Deliver:

- Homepage layout
- SVG ball
- Scroll reveal
- Mock next-match data
- Responsive match card
- Upcoming match cards
- Ad placeholders
- Reduced-motion mode

Success criterion:

The design feels impressive with mock data before any API complexity is introduced.

## Phase 2: Real data foundation

Deliver:

- Provider abstraction
- Match normalization
- Server-side fetching
- Caching
- Next-match selection
- Error states
- Update timestamps
- Timezone support

Success criterion:

The site always selects the correct next match from real schedule data.

## Phase 3: Search-ready product

Deliver:

- Schedule page
- Match pages
- Team pages for active teams
- Metadata
- JSON-LD
- Sitemap
- robots.txt
- FAQ
- About and data-source pages
- Performance optimization

Success criterion:

The site is indexable, understandable, and meaningfully useful beyond one animation.

## Phase 4: Launch

Deliver:

- Production domain
- Analytics
- Search Console
- Error monitoring
- Mobile QA
- Accessibility QA
- Social previews
- Privacy and terms

Success criterion:

The site can be shared publicly and survive real traffic.

## Phase 5: Monetization

Deliver:

- Ad network approval
- Consent handling
- One or two initial ad units
- Revenue and performance tracking
- Layout-shift verification

Success criterion:

Ads earn revenue without making the experience materially worse.

## Phase 6: Expansion only if validated

Potential additions:

- Women’s World Cup
- Qualifiers
- Club World Cup
- Euros
- Copa América
- Team notifications
- Broadcast availability
- PWA
- Localized languages

---

## 30. Codex Agent Instructions

The implementation agent should follow these priorities:

1. Build a working, fast utility before adding excessive visual complexity.
2. Treat the next-match data as the most important content.
3. Use semantic HTML for all critical information.
4. Default to Server Components.
5. Limit Client Components to countdowns, timezone controls, and animation.
6. Use mock data behind the same normalized interface expected for real data.
7. Make the soccer-ball hero replaceable without rewriting the match UI.
8. Respect reduced-motion preferences from the beginning.
9. Reserve ad dimensions to avoid layout shift.
10. Do not use official FIFA art or logos.
11. Create tests for match-selection logic before connecting the production API.
12. Keep all provider-specific logic inside `lib/matches`.
13. Create a polished mobile layout before refining desktop ad rails.
14. Ensure the answer is accessible without completing the animation.
15. Avoid adding authentication, databases, or dashboards until clearly necessary.

---

## 31. Acceptance Criteria for Version One

The first production version is complete when:

- [ ] The homepage has a polished soccer-ball scroll reveal.
- [ ] The user can skip the reveal.
- [ ] Reduced-motion mode works.
- [ ] The correct next match is selected automatically.
- [ ] Live matches take priority.
- [ ] Simultaneous matches are handled.
- [ ] Local kickoff time is shown.
- [ ] A manual timezone selector exists.
- [ ] The countdown updates accurately.
- [ ] At least five upcoming matches are shown.
- [ ] A full schedule page exists.
- [ ] Match information is server-rendered.
- [ ] The page works without animation support.
- [ ] Mobile performance is acceptable.
- [ ] Ad slots are tasteful and do not shift the layout.
- [ ] Privacy, terms, about, and disclaimer pages exist.
- [ ] Search metadata and structured data are implemented.
- [ ] Sitemap and robots.txt exist.
- [ ] Calendar export works.
- [ ] Analytics capture core interactions.
- [ ] API failure displays cached data.
- [ ] No official protected tournament graphics are used.
- [ ] The site is deployed on Vercel under the production domain.

---

## 32. Recommended Version-One Experience

The final version-one page should behave like this:

1. A visitor lands on a dark page containing one beautifully lit soccer ball.
2. The page immediately provides a small “Skip to next match” control.
3. Scroll rotates the ball and separates its panels.
4. The panels frame the upcoming matchup.
5. Team names, local kickoff time, and countdown appear.
6. The animation settles into a stable information page.
7. Desktop advertisements appear in the outside rails.
8. Mobile shows one advertisement below the complete answer.
9. The next five matches appear in a simple timeline.
10. The visitor can change timezone, add the match to a calendar, share it, or open the full schedule.
11. The entire experience remains fast, legible, and useful without the animation or advertisements.

The central rule is:

> The spectacle earns attention. The utility earns trust.
