# floydhomesandland.com

The website for Floyd Homes and Land, LLC. Built with [Astro](https://astro.build) and
deployed by Netlify from `main`.

```sh
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # production build into dist/
```

Project context, business facts, brand rules and decisions are in `CLAUDE.md`.
How to add listings, developments, house plans and memos: `src/content/README.md`.

## Campaign landing pages (`/offer/<slug>/`)

Every campaign is one entry in `src/data/campaigns.ts`. The template
`src/pages/offer/[campaign].astro` turns each entry into a page at
`https://floydhomesandland.com/offer/<slug>/` with a lead form.

### Add a campaign

1. Open `src/data/campaigns.ts` and copy the example entry (`sell-your-land`).
2. Fill in:
   - `slug`: lowercase words joined by hyphens, e.g. `chesapeake-land`. This is the URL
     and the lead tag. **Never change it after a QR code with it is printed.**
   - `eyebrow`, `headline`, `audience`, `offer` (paragraphs) and optional `points` (bullets).
   - `form`: which question set and Airtable Website Form the page uses:
     `sell-direct`, `buy-sell`, `partner` or `contact`.
   - `description`: one or two sentences for link previews.
   - Optional: `formTitle`, `submitLabel`, `noindex: false` to let search engines list it.
3. Run `npm run build` (or open a PR and check the Netlify deploy preview), then visit
   `/offer/<slug>/` and send a test with the name `SETUP SAMPLE` (it's filed as Test / Spam).

### Retire or remove a campaign

- **Pause it but keep the record:** set `active: false` on the entry. The page stops being built.
- **Remove it:** delete the entry.

If a printed QR code still points at a removed page, people will land on the 404 page. To
send them somewhere useful instead, add a redirect to `netlify.toml`:

```toml
[[redirects]]
  from = "/offer/old-slug/*"
  to = "/what-we-do/sell-direct/"
  status = 301
```

### How leads are tagged

The form posts to the same Airtable automation as every site form
("Website form → Responses + lead alert"), so the lead alert email and the Responses row work
the same way. On a campaign page it also sends:

| what | where it shows in Airtable |
| --- | --- |
| `page` = `offer/<slug>` | Responses → **Page** reads `website: offer/<slug>` |
| `Campaign: <slug>` line | top of Responses → **Form Details**, and in the alert email |
| `QR tag: <tag>` line (only if the link had `?c=<tag>`) | top of **Form Details**, and in the alert email |
| `form` = the campaign's form | Responses → **Website Form** (so **Source** = Website) |

It also sends `campaign` and `qr_tag` as their own keys. The Airtable script ignores them
today; they're there so the script can fill the Drop link or a Campaign column later without
a site change.

### QR code for a campaign

The link to print:

```
https://floydhomesandland.com/offer/<slug>/
```

To credit a specific mailing, add its tag (same idea as the Mail Drops **QR Tag** in Airtable):

```
https://floydhomesandland.com/offer/<slug>/?c=<route>-<message>-<YYMMDD>
```

Print-ready QR image (same settings the Mail Drops table uses: error correction Q, 4-module
border). Paste the link, URL-encoded, after `data=`:

```
https://api.qrserver.com/v1/create-qr-code/?size=1200x1200&ecc=Q&qzone=4&format=png&data=https%3A%2F%2Ffloydhomesandland.com%2Foffer%2Fsell-your-land%2F
```

Use `format=svg` for a vector file for the print shop. Scan the printed proof with a phone
before the run goes out.

The existing mail-campaign pages on `fhlchesapeakeland.netlify.app` and their printed QR codes
are separate and unchanged.
