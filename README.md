# C Beach — Ostuni · guest site

Static guest microsite for **C Beach**, a beach club in Rosa Marina, Ostuni (Puglia, Italy).
The owner sends the link to guests over WhatsApp; it explains how to reach the club, what the
sunbeds cost, and what's on the menu.

**Live:** https://cbeach.midasanalytics.ai

## Pages

| Path | What it is |
|---|---|
| `/` | Redirects to `/parking/` |
| `/parking/` | Arrival guide — parking coordinates, driver, shuttle, events section |
| `/sunbeds/` | Sunbed & umbrella prices, WhatsApp booking, photo gallery |
| `/menu/` | Food menu + "La Cantina" wine list, allergens, events |

All pages are bilingual (EN/IT) via a toggle; the language auto-selects from the visitor's
browser and is remembered in `localStorage`.

## Key facts baked into the pages

- Parking: `40°47'47.7"N 17°32'36.8"E` → decimal `40.796583, 17.543556`
- Driver **Pier**: +39 339 351 4148 (guests call ~20 min before arriving)
- Manager **Francesco** / bookings: WhatsApp +39 375 922 6719 — bookings are WhatsApp-only
- Email: cbeachitaly@gmail.com
- Sunbed €15 · Umbrella €15
- Instagram: [@c_beach_ostuni](https://www.instagram.com/c_beach_ostuni/)

## Structure

```
index.html        redirect to /parking/
parking/  sunbeds/  menu/     one index.html each
css/site.css      all styling (shared)
js/lang.js        EN/IT toggle
img/              logo (gold + white, transparent PNG), photos
CNAME             custom domain — required by GitHub Pages
.nojekyll         skip Jekyll processing
```

## Local preview

No build step — it's plain HTML/CSS/JS. Serve the folder:

```bash
npx --yes http-server . -p 5588 -c-1
```

Then open http://localhost:5588.

## Deploy

Hosted on **GitHub Pages** from the `main` branch, root folder. Pushing to `main` deploys:

```bash
git add -A && git commit -m "..." && git push
```

DNS: `CNAME cbeach → quaesito.github.io` on `midasanalytics.ai` (registrar: GoDaddy).

### ⚠️ HTTPS gotcha

Do **not** enable "Enforce HTTPS" before GitHub has actually issued the Let's Encrypt
certificate — doing so force-redirects every visitor to a certificate that doesn't yet exist
("This Connection Is Not Private").

If the certificate is stuck (Pages API shows `https_certificate: null`), toggle the custom
domain to force re-issuance: delete `CNAME`, commit and push, wait ~30s, then re-add `CNAME`,
commit and push. The certificate state moves to `approved` within about a minute.

## Content sources

Menu prices and dishes follow the owner's **2025 menu photos**; the wine list ("La Cantina")
comes from the club's PDF. Where the two disagree, the photos win — they are the current menu.
The sunbed gallery images were generated from the club's own product photos (white mesh
sunbeds + pink "Zinzula" umbrellas) placed in a Rosa Marina beach setting.
