# LUKA LIVE — The Starlight Tour

A fan website for the fictional "Luka Sky — Starlight World Tour 2025", built from a
Google Stitch design export. Dark neon pop aesthetic, fully responsive, and ready
to deploy on Vercel.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home & Artist — hero, about Luka Sky, top songs, show highlights |
| `tickets.html` | Get Tickets (Live) — pick a city, choose a tier, quantity, checkout demo |
| `contact.html` | Contact & Support — ticket resend tool, FAQs, contact form, hotline |

## Project structure

```
index.html  tickets.html  contact.html   <- the three pages
vercel.json                              <- Vercel settings (clean URLs like /tickets)
css/tailwind-home.css                    <- compiled styles for the home page
css/tailwind-tickets.css                 <- compiled styles for the tickets page
css/tailwind-contact.css                 <- compiled styles for the contact page
css/style.css                            <- small shared styles (focus ring, skip link)
js/main.js                               <- shared behavior (mobile menu, audio toggle, newsletter)
images/                                  <- all pictures, stored locally (no external image links)
```

The Tailwind CSS is **pre-compiled into plain CSS files** — the site has no build
step and no runtime dependencies, so Vercel serves it as-is.

## Preview it on your computer

Websites like this need a tiny local "server" program to preview them properly.
Pick **one** of these options — they are all free:

**Option A — Node.js (if you have it installed)**
Open a terminal in this folder and run:

```
npx serve .
```

Then open the address it prints (usually `http://localhost:3000`).

**Option B — Python (if you have it installed)**

```
python -m http.server 8000
```

Then open `http://localhost:8000`.

**Option C — VS Code extension**
Install the "Live Server" extension, right-click `index.html`, and choose
"Open with Live Server".

> Double-clicking `index.html` also mostly works, but some browsers block fonts
> or scripts on locally opened files, so the local server is the reliable way.

## Publish it on Vercel

No build step is needed — it is plain HTML/CSS/JS.

**Easiest way (drag & drop):**
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Drag this whole project folder onto the "Deploy" drop zone.
3. Vercel gives you a live link (like `https://your-site.vercel.app`) in about a minute.

**Or with Git:** push this folder to a GitHub/GitLab repository, then in Vercel
choose "Import Project" and pick that repository. Vercel auto-detects it as a
static site — no settings to change.

## Notes

- All ticket purchases, queue positions, and chat responses are front-end demos —
  no real payments or messages are sent.
- If you later edit the HTML and add new Tailwind classes, the pre-compiled CSS
  won't know about them. Either reuse classes already on these pages, or tell me
  and I'll re-generate the CSS for you.
