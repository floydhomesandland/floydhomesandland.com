# CLAUDE.md — floydhomesandland.com

The official website of **Floyd Homes and Land, LLC.** (FHL), owned by Dustin Floyd.
Read this whole file before working. Dustin's own words are in `docs/brief.md`.
Treat that file as the source of truth for business facts and copy.

## Ground rules (every session)

1. **Don't invent facts about the business.** No made-up stats, sales volumes, years in
   business, reviews, testimonials, awards, partner names, listings, deal figures or
   quotes. If a page needs something we don't have, use a placeholder.
2. **Placeholder convention.** Write `[[TODO: what's needed]]` in copy, and use
   `/images/placeholder/*.svg` for missing images. Before a deploy to main, run
   `grep -rn "\[\[TODO" src/` and show Dustin what's still open. Placeholders must look
   obviously unfinished on a preview, never like real content.
3. **Ask before you publish.** `main` auto-deploys to production on Netlify. Work on a
   branch and use deploy previews. Merge only when Dustin says so.
4. **Keep the Howard Hanna and fair-housing requirements** (see Compliance below) on every page.
5. Record decisions in the Decision log at the bottom of this file as they're made.

## The business (facts given by Dustin)

- **Legal name:** Floyd Homes and Land, LLC. Write it with the period in footers and
  consent text. In running copy: "Floyd Homes and Land" or "FHL". Always "and", never "&".
- **Owner:** Dustin Floyd. At this time he is FHL's only active salesperson.
- **Markets:** Southeastern Virginia (SEVA), Northeastern North Carolina (NENC) and the
  Outer Banks of North Carolina (OBX).
- **Customers:** people who want to buy, sell or invest in real estate.
- **Model, in order:**
  1. **Sales come first.** Buying and selling homes and land through Howard Hanna.
  2. **Value-add on top of a sale.** For clients who want more than a simple sale, FHL
     offers **development** or a **joint venture (JV)**. FHL specializes in land
     development and investment itself and is always looking to JV with buyers or sellers.
- **Brokerage:** sales are "powered by Howard Hanna". Dustin says the office his sales
  run out of has 50 people with different niches, and FHL brings in a second agent with
  the right specialty when a deal calls for it. His example: a $7M beach house means
  bringing on an agent whose niche is ultra-luxury beach homes in that market.
- **Development, in his words:** "Because I care about the city I work in and what it
  looks like." It helps sellers find their value and unlock it. **It isn't for everyone.**
  It's judged case by case, because sometimes the speed of the money (just selling the
  land) does more for a seller than the amount of money (likely more if developed).
- **Dustin's background (from his story):** His dad was in construction and his
  grandfather was a farmer. What they had in common was real estate. His trade is HVAC.
  His first "real" business was landscaping and grading, and it grew into
  **Hickory Earthworks**, which worked for many builders, including national production
  builders. His biggest takeaway was the people and the network: "I'm in the people
  business, but we trade in Real Estate." His strength for clients: **think big**.
  "Anything is possible. It might take a lot more work and a lot more time than you're
  expecting, but anything is possible."
- **Values (exact list and order):** HONESTY · HUSTLE · BE RESOURCEFUL · THINK BIG ·
  DO THE RIGHT THING · ALWAYS BE LEARNING. Don't write descriptions for them until Dustin
  supplies them ([[TODO]]).
- **Contact:**
  - Dustin: **757-803-7347**
  - Howard Hanna Real Estate Services office: **(757) 547-9691**
  - Sales email (buying/selling): **dustinfloyd@howardhanna.com**
  - All other inquiries: **floydhomesandland@gmail.com**
  - Office: **128 N Battlefield Blvd, Chesapeake, VA 23320**
  - Social links: [[TODO: Instagram, Facebook, YouTube, TikTok, LinkedIn, etc.]]
  - Howard Hanna agent site (listings search): https://dustinfloyd.howardhanna.com
- **Licenses (show exactly as written, e.g. in the footer and on Who We Are):**
  - VA Board of Contractors Class A #2705185999 (HVA, LSC, RBC)
  - VA Board of Contractors Master Tradesman #2710079360
  - VA Real Estate Board Salesperson #0225273602
  - NCREC #360403
  - NCOWCICB Grade Level II #15539

## What the site must do (conversion goals, in priority order)

1. **Call Dustin.** A tap-to-call button is always one tap away on phones (sticky header).
   Also show the number as plain readable text.
2. **Browse:** property photos and every section, so visitors understand the business.
3. **Fill out an intake form.** There are four paths:
   - 1 — Buy or sell a property
   - 1A — Sell direct to FHL (many of these visitors arrive from a mailer and first
     want to know who sent the letter)
   - 1B — Joint venture (JV) / development partnership
   - 2 — Work at FHL (careers)
   - 3 — Monthly memo / newsletter / updates sign-up (about once a month)

## Brand (source: Dustin's "FHL Brand Guide" design system artifact)

Artifact: https://claude.ai/artifact/DT1LLrMdgxvb83g5V7m67B. Logos and the headshot are
stored as uploaded files in that artifact (Logos, Brokerage and Photos groups). Copy them into
`public/` (or `src/assets/` for optimization). Never redraw or recolor any logo.

**Color tokens** (all one light theme):

| token | value | use |
| --- | --- | --- |
| `green-deep` | `#0E3A32` | Howard Hanna green; header/footer/CTA bands, primary buttons, headlines |
| `green` | `#1C5446` | links, hover, secondary headline line |
| `green-tint` | `#E1EBE7` | focus halos, check-mark fill; never text |
| `gold` | `#B88128` | marks, rules, borders only (3.1:1, never small text) |
| `gold-ink` | `#8A5F17` | small gold text; focus ring on light grounds |
| `paper` | `#F3F6F4` | page background |
| `surface` | `#FFFFFF` | cards, inputs |
| `ink` | `#13201C` | body copy |
| `muted` | `#4B5B55` | secondary copy |
| `line` | `#D0DBD6` | dividers (decorative) |
| `field-border` | `#73837D` | input borders |
| `on-dark` | `#F3F6F4` | text on green-deep |
| `on-dark-muted` | `#C3D3CD` | secondary text on green-deep |
| `error` | `#B3261E` | errors, always with a written message |

**Type** (Google Fonts, self-host the woff2 files for speed):
- Display: **Zilla Slab** 500/600/700, for headlines and names only
- Body: **Public Sans** 400/500/600/700, 18px base
- Label: **Montserrat** 500/600, only for uppercase wide-tracked eyebrows (0.2em)

**Shapes and marks:** small radii (8px inputs/buttons, 10px cards; a pill only for the
header call button). A small gold diamond (from the FHL mark) leads each eyebrow. Don't
use other decorative icons. One raised card per page. Separate sections with rules, not boxes.
Keyboard focus is a 3px `gold-ink` outline (`gold` on green-deep).

**Logos:** `fhl-mark-gold.png` (header, on green-deep, ≥42px tall);
`fhl-logo-gold.png` with the tagline "Selling more, selling lifestyles" (footer, 230–270px);
green versions for light grounds; `hh-logo-white.png` / `hh-logo-color.png`;
`eho-logo-white.png` / `eho-logo-green.png`.

**Photo:** one so far. It shows Dustin on the Chesapeake waterfront, arms crossed, with a bridge and marsh
behind him (`dustin-headshot-original.jpg` 1717×2576, plus portrait and square crops).
More photos are coming from Dustin. Until they arrive, use placeholders. No stock photos
that could pass as FHL's own properties or projects.

### Voice

- Short, plain, direct sentences. No hype words, no emoji, no exclamation marks.
- Say the hard truth up front (e.g. development "is not recommended for everyone").
- **"We" vs "I" (decided):** company pages use "we" / "FHL". Dustin's memo, his story
  and any "call me" lines use "I". (The brand guide's "I, never we" rule is for his
  solo land mailers only.)
- The brand guide says he's described as "Realtor and Chesapeake local" on the
  Chesapeake land mailers. On this site, describe his role only with facts from
  `docs/brief.md` until he gives a site-specific line ([[TODO]]).

## Design direction

The goal is **polished and distinctive, not template-looking.** The concept: **"the land record."**
FHL's story is about land, family trades and the long view, so the site borrows from the
documents that land lives in: survey plats, deed books, field notes, county maps.

- **Who We Are** should feel historical and big-picture. Set Dustin's memo like a typed
  letter on paper, with a signature line. Use a timeline that runs through grandfather (farm), dad
  (construction), HVAC, Hickory Earthworks and FHL. Don't put dates on it unless Dustin gives them.
- **Plat-line motif:** dashed boundary lines, gold corner pins and bearing labels as
  section dividers and hero texture. The brand guide already uses this on land pages.
  Any bearings or acreage shown are decorative, and must never look like a real parcel.
- **Values** read like a deed's numbered covenants: I–VI, big Zilla Slab numerals.
- **Topographic contour** linework (very low opacity, green-deep) is the background texture
  for the green bands.
- Big, confident type. Generous paper-colored space. Gold used sparingly as trim.
- Photography goes full-bleed when Dustin supplies it. Property cards use real photos only.
- Motion is minimal and respects `prefers-reduced-motion`.

## Technical decisions

- **Framework: Astro** (static output). It ships zero JavaScript by default, so it's
  fast on phones. Content collections hold properties, developments, deals, memos, house plans,
  partners, reviews and jobs as Markdown/YAML files Dustin can edit. It has built-in image
  optimization (AVIF/WebP, responsive sizes) and first-class Netlify support. Add small
  interactive pieces (a photo gallery lightbox, a form step indicator) as islands only where needed.
- **Hosting:** Netlify, auto-deploys from `main`. Build settings are in `netlify.toml`
  (`npm run build`, publish `dist/`, Node 22).
- **Forms → Airtable (decided).** Every site form POSTs JSON to the Airtable automation
  **"Website form → Responses + lead alert"** (`wflnRbezD8AXsyxaX`) in the
  **MAILING ROUTES/ CAMPAIGNS** base (`appFYyqgvckxPOcTN`). It creates a row in
  **Responses**, tagged so it reads as a website lead, and emails Dustin "A new lead from your
  website has just put in their info". This is a separate webhook from the mail-campaign
  one (`Landing page → Responses + lead alert`). Never post site forms to that one.
  - Webhook URL: `https://hooks.airtable.com/workflows/v1/genericWebhook/appFYyqgvckxPOcTN/wflnRbezD8AXsyxaX/wtrLaCcyr4N2Yr73L`
  - Payload keys (strings): `form` (exactly one of: `Buy or sell`, `Sell direct`,
    `Partner / JV`, `Invest interest`, `Careers`, `Monthly memo`, `Contact`), `name`,
    `phone`, `email`, `contact_method`, `contact_time`, `consent` (`"true"`/`"false"`),
    `property_address`, `interest`, `asking_price`, `timeline`, `remarks`, `details`
    (multi-line text holding any answers without their own column), `page`, `page_url`, `submitted_at`
    (ISO), `source` (`"website"`).
  - Responses fields added for this: **Website Form** (single select),
    **Form Details** (long text) and **Source** (formula: `Website` when Website Form
    is set, otherwise `Mail campaign`).
  - Keep a honeypot field and client-side validation. Show the thank-you page only after
    the POST succeeds, and if it fails, show a written error with Dustin's phone number.
  - Status: built in Airtable as a draft, **not yet on**. It needs one sample POST so
    Airtable learns the payload, then the script and email steps are wired in and Dustin
    turns it on.
- **Newsletter:** needs an email platform (e.g. Mailchimp, Kit, Beehiiv). [[TODO: Dustin
  to choose]]. Until then, sign-ups land in Airtable Responses as `Monthly memo`.
- **Real estate search (decided):** link out to https://dustinfloyd.howardhanna.com.
  Dustin will add IDX later; build `/search/` so an embed can replace the link.
- **SEO basics:** a unique title and description on every page, canonical URLs, Open Graph
  images, `sitemap.xml` (@astrojs/sitemap), `robots.txt`, and JSON-LD `RealEstateAgent` /
  `Organization` markup using only facts listed above. Every page has a real `<h1>`.
- **Accessibility:** WCAG 2.2 AA. Semantic landmarks, a skip link, visible focus, 44px
  tap targets, labelled form fields with written errors, alt text on every image.
  Contrast ratios are documented in the token table.
- **Performance budget:** Lighthouse mobile ≥ 95. Self-hosted, subset fonts with
  `font-display: swap`. Lazy-load images below the fold.

## Compliance (carry onto every page)

- Show "Howard Hanna Real Estate Services" and the office number (757) 547-9691, plus
  the Equal Housing Opportunity logo, placed with the brokerage line (footer).
- Show Dustin's number and "Floyd Homes and Land, LLC." on every page.
- Any form that collects contact details has a required, **unchecked** consent box. The
  brand guide's wording is written for property sellers. Write a version for each form
  (buy/sell, JV, careers, newsletter) and have Dustin approve it ([[TODO]]).
- Link Privacy and Terms pages from every form ([[TODO: Dustin's/attorney's text]]).
- **Deals to fund (decided):** `/invest/` is an "I'm interested" form only. Show no
  deal names, amounts or open spots. How the deals work, in Dustin's words: each deal is
  its own LLC that owns the property, and investors partner in that company. He says VA
  LLCs for these deals can have up to 20 members (his statement; don't present it as
  legal fact on the site). Because investors buy into a company, this is likely a
  securities matter. Keep deal terms off the public site unless a securities attorney
  approves.
- When FHL buys a property for itself, say that Dustin is a licensed real estate
  salesperson (brand guide rule).

## Related properties

- `fhlchesapeakeland.netlify.app` is a separate Netlify site with Dustin's Chesapeake
  land mail campaign pages (Warpspeed, Land, Just sold, Meet Dustin, Sell now stay).
  Printed QR codes point there, so don't move or break it. This site's "Got mail from us?"
  page links to it and explains the mailers.

## Proposed sitemap (awaiting Dustin's approval)

Primary navigation: **Who We Are · What We Do · Properties · Invest · Careers**, plus a
"Call" button and a "Get started" button.

```
/                         Home: who FHL is, the three markets, sales + value-add, 4 intake paths
/start/                   Intake hub: "What brings you here?" → one answer per path:
                            Buy or sell · Sell direct · Partner/JV · Careers · Memo
  /start/buy-sell/        1  Buy or sell (home or land)
  (Sell direct → /what-we-do/sell-direct/, which holds the 1A form. The answer's
   copy speaks to mailer recipients: "Got a letter from us?" Say who FHL is in one
   line, then point to the sell-direct form. Don't duplicate the form.)
  /start/partner/         1B JV / development partnership
  (careers form lives on /careers/apply/, newsletter form site-wide)
/who-we-are/              Our story + Dustin's memo, timeline, licenses
  /who-we-are/values/     The six values
/what-we-do/              Overview: sales first, value-add second
  /what-we-do/sales/      Sales powered by Howard Hanna; the specialist bench
  /what-we-do/development/  Development: who it's for, who it isn't, speed vs amount
  /what-we-do/joint-ventures/  JV with buyers and sellers
  /what-we-do/sell-direct/     Sell your land or home direct: why, what you give up,
                               what you gain, when it works, when it doesn't + form
/properties/              FHL listings with photo galleries (content collection)
  /properties/[slug]/
/developments/            Site plans and renderings
  /developments/[slug]/
/house-plans/             House plan library
  /house-plans/[slug]/
/search/                  Search SEVA, NENC, OBX → links to dustinfloyd.howardhanna.com
/invest/                  Deals to fund (gated interest form until legal review)
/careers/                 The big-picture invitation: agents, grads, people with ideas,
                          people who want a damn good job
  /careers/apply/
/memo/                    Monthly memo / newsletter archive + sign-up
  /memo/[slug]/
/media/                   Social links, video, press
/reviews/                 Client reviews (real ones only)
/partners/                Partners and affiliates (only ones Dustin confirms)
/free-stuff/              Free swag, stickers, giveaways, the memo (Client Shop merged in: decided)
/mail/                    "Got mail from us?": explains the mailers, links to campaign site
                          and to the sell-direct form
/contact/                 Phone, email, office, map
/privacy/  /terms/  /accessibility/
/thanks/[form]/           One thank-you page per form
/404
```

## Content needed from Dustin

The open list lives here. Strike items through as they arrive.

- [x] ~~Public email, office address~~ (2026-10-27)
- [ ] Social links (Dustin sending from his phone)
- [ ] More photos (Dustin sending from his phone): properties, developments, Dustin at work, team, land
- [ ] One or two lines per value
- [ ] Current listings (or confirm "search only" at launch)
- [ ] Development projects: names, site plans, renderings, status
- [ ] House plans to publish (Farmhouse concept sets exist as artifacts; confirm which)
- [ ] Reviews you have permission to publish (source + name/initials)
- [ ] Partners/affiliates confirmed for public listing (brief mentions OS, Yeti?,
      contractors, HH, Just Ingredients, all unconfirmed)
- [ ] Swag list and how a client claims it (free for clients only? ship or pick up?)
- [ ] Careers: roles open now, or an "open invitation" only
- [ ] Newsletter platform choice
- [ ] Consent wording, privacy policy and terms
- [ ] Securities attorney sign-off before deal amounts are shown
- [ ] Confirm the domain: floydhomesandland.com

## Decision log

| date | decision | status |
| --- | --- | --- |
| 2026-10-27 | Framework: Astro, static output, deployed on Netlify | Recommended, pending approval |
| 2026-10-27 | Sitemap as above | Proposed, pending approval |
| 2026-10-27 | Brand: use FHL Brand Guide tokens, fonts, logos as-is | Decided (Dustin's instruction) |
| 2026-10-27 | Design concept "the land record" (plat lines, deed covenants, field-notes memo) | Proposed |
| 2026-10-27 | Forms post to Airtable (MAILING ROUTES/ CAMPAIGNS → Responses), tagged Website, email alert to Dustin | Decided (Dustin) |
| 2026-10-27 | Real estate search links out to Howard Hanna site; Dustin adds IDX later | Decided (Dustin) |
| 2026-10-27 | Merge "Client shop" into "Free stuff" | Decided (Dustin) |
| 2026-10-27 | Deals to fund: "I'm interested" form only, no deal terms public | Decided (Dustin) |
| 2026-10-27 | Voice: "we" on company pages, "I" in Dustin's memo/story/call lines | Decided (Dustin) |
| 2026-10-27 | Sales inquiries show dustinfloyd@howardhanna.com; everything else floydhomesandland@gmail.com | Decided (Dustin) |
| 2026-10-27 | "Sell direct" is an answer on Get Started's "What brings you here?", aimed at mailer recipients; it leads to the one sell-direct form | Decided (Dustin) |
