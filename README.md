# 46 London Row, Arlesey - property listing site

A fast, fully responsive single-page property listing for the private sale of
**46 London Row, Arlesey** (guide price £585,000). Rebuilt from the original
Canva export to load faster, work properly on mobile, and read like a modern
estate-agent page.

Plain HTML, CSS and JavaScript. No frameworks, no build step. Open
`index.html` in a browser and it runs.

## What's here

```
46-london-row/
├── index.html              all the page content
├── assets/
│   ├── css/styles.css      styles (mobile-first, earthy palette)
│   ├── js/main.js          nav, scroll reveal, sticky CTA
│   └── images/             drop property photos here (see below)
└── README.md
```

## Photos

Real property photos are included in `assets/images/`, resized and compressed
for fast loading:

| File | Used for |
|------|----------|
| `hero.jpg` | Top banner (front elevation) |
| `kitchen.jpg` | Kitchen & living room section |
| `annex.jpg` | The annex section |
| `garden.jpg` | Garden & outdoor living section |
| `floor-ground/first/second.jpg` | The three floor cards |
| `gallery-1.jpg` to `gallery-9.jpg` | The photo gallery (click to enlarge) |

To swap any photo, replace the file with one of the same name (keep it
landscape and roughly the same shape). Aim for ~1400px wide JPGs.

## Viewing it

- **Locally:** double-click `index.html`.
- **Live link (GitHub Pages):** push this folder to a GitHub repo, then
  Settings → Pages → deploy from `main` / root. The site goes live at
  `https://<username>.github.io/<repo>/`.

## Notes

- Contact details, open-house dates and all copy are taken from the owner's
  original listing. Update the open-house dates in `index.html` (search for
  "Open house dates") as needed.
- Accessibility: semantic landmarks, skip link, keyboard-friendly nav,
  reduced-motion support.
