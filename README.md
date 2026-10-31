# Atlas Drive — Premium car rental demo (Astro + Tailwind)

A high-end, multilingual (FR / EN / AR with RTL) website template for car rental agencies in Morocco.
Built as a **showcase to sell websites to real agencies**: everything client-specific lives in one config file, so rebranding takes minutes.

**Stack:** [Astro 5](https://astro.build) (static output) · [Tailwind CSS 4](https://tailwindcss.com) · zero backend · deploys free on Vercel / GitHub Pages / Netlify.

## Features

- Hero with search bar (pickup location, pickup & return dates) that carries the trip to the catalog and car pages
- Featured cars, full catalog loaded from JSON with filters (brand, gearbox, fuel, seats, max price in MAD)
- Car detail page: gallery, specs, price, live total for selected dates, **Book on WhatsApp** button with a pre-filled message (car, dates, pickup location)
- Floating WhatsApp button on every page
- Pickup locations (Marrakech Menara, Casablanca Mohammed V, city center), Why us, Reviews, FAQ, Contact (sends via WhatsApp) + map placeholder
- French (default), English, Arabic with full right-to-left layout
- Smooth scroll-reveal animations (respects `prefers-reduced-motion`), mobile-first responsive

## Requirements

Node.js 20+ (check with `node -v`). Install from <https://nodejs.org> (LTS) if missing.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to /dist
npm run preview    # serve the production build
```

## Rebranding for a new client

| What | Where |
|---|---|
| Brand name, logo, tagline, **colors**, **WhatsApp number**, contact info, **pickup locations**, hero photo | `src/config/site.config.ts` |
| **Car list** (brand, model, price/day, gearbox, fuel, seats, photos, descriptions in 3 languages) | `src/config/cars.json` (imported by the config) |
| Page texts, FAQ, reviews (FR/EN/AR) | `src/i18n/ui.ts` |
| Favicon / custom logo file | `public/` (then set `brand.logoImage: '/logo.svg'`) |

Tips:

- **WhatsApp number:** international format without `+` or leading zero, e.g. `212612345678`.
- **Colors:** change `colors.accent` / `accentStrong` for a different accent; the whole site updates.
- **Car photos:** `images` in `cars.json` are Unsplash photo IDs (`https://images.unsplash.com/photo-<ID>`). The demo photos are royalty-free stand-ins and may not match each exact model — replace them with the client's real photos (use full URLs by editing the `img()` helper in `src/i18n/ui.ts`, or put files in `public/` ).
- **Map:** set the agency coordinates in `siteConfig.map` (`src/config/site.config.ts`). The contact section embeds OpenStreetMap from them.
- **Add a language:** add it to `languages` in the config, a dictionary in `src/i18n/ui.ts`, and `ar`-style `L10n` fields in config/cars.

## Deploy

### Vercel (easiest)

1. Push the project to GitHub.
2. On <https://vercel.com> → *Add New Project* → import the repo. Framework: **Astro** (auto-detected). Deploy.
3. Optional: set the `SITE` env var to your final URL (used for `hreflang` links).

### GitHub Pages

1. Push to GitHub (branch `main`).
2. Repo → *Settings → Pages → Source: GitHub Actions*.
3. The workflow in `.github/workflows/deploy.yml` builds with `SITE=https://<user>.github.io` and `BASE=/<repo-name>` automatically. If you use a custom domain, set `SITE` to it and `BASE` to `/`.

Manual build for a sub-path: `SITE=https://user.github.io BASE=/repo npm run build` (PowerShell: `$env:SITE='https://user.github.io'; $env:BASE='/repo'; npm run build`).

## Project structure

```
src/
  config/site.config.ts   ← brand, colors, WhatsApp, locations
  config/cars.json        ← car catalog
  i18n/ui.ts              ← translations + helpers
  layouts/Layout.astro    ← head, fonts, header/footer, floating WhatsApp
  components/             ← Header, Footer, Logo, Icon, SearchBar, CarCard
  pages/index.astro       ← redirects to the visitor's language
  pages/[lang]/index.astro, cars/index.astro, cars/[id].astro
  styles/global.css       ← design tokens + components
```

## License

Demo template — adapt freely for your clients. Photos © their respective Unsplash authors.
