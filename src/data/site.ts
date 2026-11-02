// Business facts used across the site. Every value here comes from Dustin
// (see CLAUDE.md and docs/brief.md). Don't add facts that aren't on record.

export const site = {
  name: 'Floyd Homes and Land',
  legalName: 'Floyd Homes and Land, LLC.',
  tagline: 'Selling more, selling lifestyles',
  url: 'https://floydhomesandland.com',
  owner: 'Dustin Floyd',
  markets: [
    { short: 'SEVA', name: 'Southeastern Virginia' },
    { short: 'NENC', name: 'Northeastern North Carolina' },
    { short: 'OBX', name: 'The Outer Banks of North Carolina' },
  ],
  phone: { display: '757-803-7347', tel: '+17578037347' },
  brokerage: {
    name: 'Howard Hanna Real Estate Services',
    phone: { display: '(757) 547-9691', tel: '+17575479691' },
  },
  email: {
    sales: 'dustinfloyd@howardhanna.com',
    general: 'floydhomesandland@gmail.com',
  },
  office: {
    street: '128 N Battlefield Blvd',
    city: 'Chesapeake',
    region: 'VA',
    postalCode: '23320',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=128+N+Battlefield+Blvd+Chesapeake+VA+23320',
  },
  agentSite: 'https://dustinfloyd.howardhanna.com',
  campaignSite: 'https://fhlchesapeakeland.netlify.app',
  licenses: [
    'VA Board of Contractors Class A #2705185999 (HVA, LSC, RBC)',
    'VA Board of Contractors Master Tradesman #2710079360',
    'VA Real Estate Board Salesperson #0225273602',
    'NCREC #360403',
    'NCOWCICB Grade Level II #15539',
  ],
  values: ['Honesty', 'Hustle', 'Be resourceful', 'Think big', 'Do the right thing', 'Always be learning'],
  // [[TODO: social links from Dustin. Add { label, href } entries.]]
  social: [] as { label: string; href: string }[],
  // Airtable automation "Website form → Responses + lead alert". Never point this at
  // the mail-campaign webhook.
  formWebhook:
    'https://hooks.airtable.com/workflows/v1/genericWebhook/appFYyqgvckxPOcTN/wflnRbezD8AXsyxaX/wtrLaCcyr4N2Yr73L',
};

export const nav = [
  {
    label: 'Who We Are',
    href: '/who-we-are/',
    children: [
      { label: 'Our story', href: '/who-we-are/' },
      { label: 'Values', href: '/who-we-are/values/' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do/',
    children: [
      { label: 'Overview', href: '/what-we-do/' },
      { label: 'Sales', href: '/what-we-do/sales/' },
      { label: 'Development', href: '/what-we-do/development/' },
      { label: 'Joint ventures', href: '/what-we-do/joint-ventures/' },
      { label: 'Sell direct', href: '/what-we-do/sell-direct/' },
    ],
  },
  {
    label: 'Properties',
    href: '/properties/',
    children: [
      { label: 'Listings', href: '/properties/' },
      { label: 'Developments', href: '/developments/' },
      { label: 'House plans', href: '/house-plans/' },
      { label: 'Search SEVA, NENC, OBX', href: '/search/' },
    ],
  },
  { label: 'Invest', href: '/invest/' },
  { label: 'Careers', href: '/careers/' },
];

export const footerLinks = [
  { label: 'Monthly memo', href: '/memo/' },
  { label: 'Media', href: '/media/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'Free stuff', href: '/free-stuff/' },
  { label: 'Got mail from us?', href: '/mail/' },
  { label: 'Contact', href: '/contact/' },
];

export const legalLinks = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Accessibility', href: '/accessibility/' },
];

// One entry per website form. `form` must match a Website Form choice in Airtable.
export const forms = {
  'buy-sell': { form: 'Buy or sell', thanks: 'Thanks. Dustin has your info and will reach out the way you asked.' },
  'sell-direct': { form: 'Sell direct', thanks: 'Thanks. Dustin has your property details and will reach out the way you asked.' },
  partner: { form: 'Partner / JV', thanks: 'Thanks. Dustin will look over what you sent and reach out to talk it through.' },
  invest: { form: 'Invest interest', thanks: 'Thanks. You are on the list, and Dustin will reach out when there is something to talk about.' },
  careers: { form: 'Careers', thanks: 'Thanks. Dustin has your info and will be in touch.' },
  memo: { form: 'Monthly memo', thanks: 'Thanks. The next monthly memo will land in your inbox.' },
  contact: { form: 'Contact', thanks: 'Thanks. Dustin has your message and will get back to you.' },
} as const;

export type FormKey = keyof typeof forms;
