// Campaign landing pages. Each entry becomes a page at /offer/<slug>/ (see
// src/pages/offer/[campaign].astro). How to add, change or retire one: README.md.
//
// Leads from these pages go to the same Airtable website-form automation as every
// other site form. The page sends `campaign` = the slug, `page` = "offer/<slug>"
// (shows in Responses → Page as "website: offer/<slug>"), and puts "Campaign: <slug>"
// plus any QR tag from the link (?c=...) at the top of Form Details.
//
// Copy rules from CLAUDE.md apply: no invented facts, short plain sentences, and
// [[TODO: ...]] for anything Dustin hasn't supplied.
import type { FormKey } from './site';

export interface Campaign {
  /** Lowercase, hyphens only. Becomes the URL and the lead tag. Never change it once a QR code is printed. */
  slug: string;
  /** Small label above the headline. */
  eyebrow: string;
  /** The page's h1. */
  headline: string;
  /** Who the page is for, in one line. Shown under the headline. */
  audience: string;
  /** The offer: one or more short paragraphs. */
  offer: string[];
  /** Optional bullet list under the offer. */
  points?: string[];
  /**
   * Which website form (and question set) the page uses. Sets Airtable's Website Form
   * column and the thank-you page. Supported: 'sell-direct', 'buy-sell', 'partner', 'contact'.
   */
  form: Extract<FormKey, 'sell-direct' | 'buy-sell' | 'partner' | 'contact'>;
  /** Heading above the form. */
  formTitle?: string;
  /** Submit button text. */
  submitLabel?: string;
  /** Search description (also used when the link is shared). */
  description: string;
  /** Keep the page out of search results. Default true: campaign pages are for people holding the mailer. */
  noindex?: boolean;
  /** Set false to stop building the page without deleting its entry. */
  active?: boolean;
}

export const campaigns: Campaign[] = [
  {
    // Example campaign. Copy is drawn from the sell-direct page; Dustin to approve.
    slug: 'sell-your-land',
    eyebrow: 'For landowners',
    headline: 'Thinking about selling your land?',
    audience: 'For landowners in Southeastern Virginia, Northeastern North Carolina and the Outer Banks.',
    offer: [
      'Floyd Homes and Land buys and sells land, and we specialize in land development and investment ourselves.',
      "You can sell your land straight to us, or list it through Howard Hanna. We'll tell you honestly which one fits your situation.",
    ],
    points: [
      'One buyer to deal with, and you talk to them directly.',
      'No showings or open houses.',
      'A conversation about your situation before anything is signed.',
    ],
    form: 'sell-direct',
    formTitle: 'Tell us about your land',
    submitLabel: 'Send my land to Dustin',
    description: 'Own land in SEVA, NENC or the Outer Banks? Sell it direct to Floyd Homes and Land, or list it through Howard Hanna. Tell Dustin Floyd about it here.',
  },
];

export const activeCampaigns = campaigns.filter((c) => c.active !== false);
