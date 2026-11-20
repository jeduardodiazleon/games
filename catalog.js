/* =============================================================
   GAME CATALOG — the only file you edit to change the portal
   -------------------------------------------------------------
   · ADD a game: create the folder  games/<folder>/  with its
     index.html (and optionally cover.svg / cover.png / cover.jpg,
     16:10, e.g. 640×400), then copy one of these blocks to the end.
   · UPDATE a game: replace games/<folder>/index.html. To show an
     "UPDATED" badge, bump "version" and set "updated" to today.
   · The order of this list is the order on the page.
   · The game marked  featured: true  gets the big spotlight banner
     (if none is marked, the most recently updated one is used).
   ============================================================= */
window.GAMES = [
  {
    folder: "cosmic-traffic-jam",          // folder inside /games
    title: "Cosmic Traffic Jam",
    description: "Brake and reverse planets on crossing orbits to survive each stage, while meteors and a giant alien crash the party. Grab powers from passing spaceships.",
    color: "#ffb347",                    // accent color of the card
    tags: ["Puzzle", "Reflex", "Survival"],
    controls: "Tap · Double-tap",
    highScoreKey: "atasco",              // key the game uses to save its best score (optional)
    version: "2.0",
    updated: "2026-11-20",
  },
  {
    folder: "hells-elevator",
    title: "Hell's Elevator",
    description: "First day as the elevator operator of the Avernus Building, straight out of a 1930s cartoon. Impatient VIPs, demons and blackouts.",
    color: "#ff4d5e",
    tags: ["Management", "Retro"],
    controls: "Tap",
    highScoreKey: "ascensor",
    version: "1.0",
    updated: "2026-11-20",
    featured: true,
  },
  {
    folder: "my-shadow-hates-me",
    title: "My Shadow Hates Me",
    description: "Your past mistakes chase you, repeating every step you took. Collect the gems, outrace AI rivals and escape each memory.",
    color: "#9b8cff",
    tags: ["Action", "Survival"],
    controls: "Drag",
    highScoreKey: "sombra",
    version: "2.0",
    updated: "2026-11-20",
  },
];
