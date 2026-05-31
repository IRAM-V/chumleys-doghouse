# Chumley's Doghouse — Deployment Guide

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Updating the Menu

Edit `data/menu.json` — no code changes needed.

Structure:
```json
{
  "sections": [
    {
      "id": "unique-id",
      "title": "Section Name",
      "emoji": "🌭",
      "description": "Short description",
      "items": [
        {
          "id": "item-id",
          "name": "Item Name",
          "description": "Item description",
          "price": 9.99,
          "tags": ["optional", "tags"]
        }
      ]
    }
  ]
}
```

## Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
# Follow prompts — it auto-detects Next.js
```

Or connect GitHub repo to vercel.com for auto-deploys.

## Deploy to Netlify

```bash
npm run build
# Upload .next folder or connect GitHub repo
```

## Environment Variables
None required for base site. Add these if needed:
- `NEXT_PUBLIC_GOOGLE_MAPS_KEY` — for live Maps embed
- `NEXT_PUBLIC_GA_ID` — for Google Analytics

## QR Code
Generate a QR code pointing to:
`https://yourchumleysdomain.com/qr-menu`

Recommended: qr-code-generator.com or qrcode.react (npm package)

## SEO
- Meta tags: `app/layout.tsx`
- Structured data (LocalBusiness schema): `app/layout.tsx`
- Update address, phone, and hours in both files

## Performance Tips
- Add real images to `/public/images/` and use Next.js `<Image>` component
- Enable ISR for menu page if menu changes frequently
- Run `npm run build && npm run start` to test production build locally

## Pages
- `/` — Homepage
- `/menu` — Full menu with filter tabs
- `/about` — Our story page
- `/events` — Events & weekly specials
- `/contact` — Contact form + map
- `/qr-menu` — Mobile-first QR menu (standalone, no nav)
