# Site content

Each folder holds one Markdown file per item. The file's name becomes its web address
(`src/content/properties/123-main-st.md` → `/properties/123-main-st/`). Put photos in the
same folder and point to them with `./photo-name.jpg`.

Only add real items with real photos. Nothing here should be a placeholder.

## properties/
```md
---
title: 123 Main St
status: For sale          # For sale | Under contract | Sold | Coming soon
market: SEVA              # SEVA | NENC | OBX
location: Chesapeake, VA
type: Home                # Home | Land | Home with land | Commercial
price: $000,000
acres: 1.2
beds: 3
baths: 2
listingUrl: https://dustinfloyd.howardhanna.com/...
cover: ./123-main-front.jpg
coverAlt: Front of the house from the street
gallery:
  - src: ./123-main-kitchen.jpg
    alt: Kitchen
---
A few paragraphs about the property.
```

## developments/
Fields: `title`, `status` (Planning | Approvals | Under construction | Complete),
`location`, `summary`, `cover`, `coverAlt`, `gallery` (each with `src`, `alt`, optional `caption`).
Use the gallery for site plans and renderings.

## house-plans/
Fields: `title`, `footprint` (e.g. 30×60), `beds`, `baths`, `sqft`, `summary`, `cover`,
`coverAlt`, `gallery`.

## memos/
Fields: `title`, `date` (YYYY-MM-DD), `summary`. The body is the memo itself.
