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

## Adding the real photos

The page ships with tasteful colour placeholders so it looks finished before
photos arrive. To use real images, add JPGs to `assets/images/` with these names:

| File | Used for |
|------|----------|
| `hero.jpg`   | Big banner at the top (front of the house, landscape) |
| `kitchen.jpg`| Kitchen & living room section |
| `annex.jpg`  | The annex section |
| `garden.jpg` | Garden & outdoor living section |

The hero loads automatically once `hero.jpg` exists. For the other three,
in `assets/css/styles.css` find the `.split-media[data-img="..."]` blocks (or
add one) and set `background-image`. A quick example is in that file's comments.
Aim for ~1600px wide, compressed JPGs for fast loading.

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
