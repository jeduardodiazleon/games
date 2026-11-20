# 🕹️ Pocket Arcade

One-finger arcade games for the browser. Live site: **https://jeduardodiazleon.github.io/games/**

## Structure

```
├── index.html            ← portal page (no need to edit)
├── catalog.js            ← GAME CATALOG: the list of games shown on the portal
├── .nojekyll             ← tells GitHub Pages to serve files as they are
├── assets/
│   ├── style.css         ← portal design
│   ├── portal.js         ← portal logic
│   └── favicon.svg
└── games/
    ├── cosmic-traffic-jam/
    │   ├── index.html    ← the game (one self-contained file)
    │   └── cover.svg     ← card image
    ├── hells-elevator/
    └── my-shadow-hates-me/
```

## Update a game

1. In GitHub, open `games/<folder>/`, click **Add file → Upload files**, drop the new `index.html` and commit. It replaces the old one.
2. Optional: in `catalog.js`, bump `version` and set `updated` to today's date. The card shows an **UPDATED** badge for 3 weeks.

## Add a new game

1. Create `games/my-new-game/` with:
   - `index.html` → the game (any self-contained HTML game works).
   - `cover.svg`, `cover.png` or `cover.jpg` → 16:10 image (e.g. 640×400). Without one, the card shows the title's first letter.
2. Add a block at the end of the list in `catalog.js`:

```js
  {
    folder: "my-new-game",
    title: "My New Game",
    description: "One catchy sentence.",
    color: "#2ef2ff",
    tags: ["Action"],
    controls: "Tap",
    version: "1.0",
    updated: "2026-12-01",
  },
```

3. For a back button to the portal, link the game to `../../index.html`.
4. Add `featured: true` to one game to put it in the big spotlight banner.

### High scores on the portal (optional)

If the game saves its best score with `localStorage.setItem("arcade_" + key, score)`, set `highScoreKey: "key"`. The portal shows it on the card and adds it to the total score.

## Test locally

Double-click `index.html`. It works without a server.
