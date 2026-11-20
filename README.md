# Mahjong Wins 3 - Black Scatter (Full Asset Extraction & 1:1 HTML5 Rebuild)

Complete asset extraction and from-scratch HTML5/CSS/JS rebuild of **Mahjong Wins 3 - Black Scatter** (`vswaysmahwblck`).

## Extracted Assets (`assets/`)

All embedded base64 textures, deferred textures (`res/*.png`, `res/*.jpg`), KTX 2.0 WebAssembly-transcoded textures (`res/*.ktx`), vector WebFonts, bitmap fonts, and Spine 2D animation skeletons have been extracted and indexed in [`assets/manifest.json`](assets/manifest.json):

- **115 Texture Atlases** (`assets/sheets/`) — Full original spritesheets (PNG & JPEG, including 12 KTX2-transcoded sheets).
- **1,806 Cropped Sprites** (`assets/sprites/<AtlasName>/<SpriteName>.png`) — Every individual symbol (`S01`–`S12`, Gold variants, motion-blurred variants, thumbnails), dragon reel frame (base game & Free Spins), backgrounds (landscape & portrait), multipliers (`x1`–`x5`, `x2`–`x10`), Big Win / Black Scatter banners, Buy Feature UI, and Pragmatic Play HUD controls.
- **24 WebFonts (`.woff`) + `fonts.css`** (`assets/fonts/`) — All embedded game & GUI typography.
- **35 Spine Skeletons (`.json`)** (`assets/spine/`) — Complete decoded `UHTSpine` skeleton rigs (`S01`–`S12`, `basegame`, `freegame`, `multiplier_Displayer`, `dragon_Feature`, `bigwin`, `bigwin_Black`, `BuyFeature`, `transition`, etc.).
- **13 Standalone Textures** (`assets/standalone/`) & **2 Bitmap Fonts** (`assets/bitmap_fonts/`).

## Features Rebuilt (`index.html`, `src/styles.css`, `src/game.js`)

1. **Pragmatic Play Loading Screen** — Authentic wordmark, crown emblem, and glowing orange progress bar.
2. **Intro Splash Screen** — Coral/gold sky, floating gold coins, Mahjong pyramid, Black Dragon title emblem, `WIN UP TO 100,000X IN COMBINATIONS WITH UP TO 4 [Black Scatter]` banner, `LOW VOLATILITY` badge, and continue button.
3. **1:1 16:9 Main Game Stage (`1778 × 1000` logical UHT coordinates)**:
   - **5-Reel `4-5-5-5-4` Ways Grid (Up to 2,000 Ways to Win)** with authentic staggered row offsets (`86px` center step) and top/bottom peeking tiles clipped inside the twin-dragon frame.
   - **Tumble Feature & Multiplier Bar** (`x1 → x2 → x3 → x5` in Base Game; `x2 → x4 → x6 → x10` in Free Spins).
   - **Gold Plated Symbols** on reels 2, 3, and 4 that transform in-place into **WILD (`S02` Gold Ingot)** when part of a winning combination (and 100% Gold symbols on reel 3 during Free Spins).
   - **Black Scatter (`S12`) Instant Jackpots** (`50x`, `500x`, `5,000x`, and `100,000x` Max Win when combined with 3+ Scatters).
   - **Interactive Mini Paytable Callout**, **7-Page Official Paytable & Rules Modal**, **Buy Free Spins Modal**, **Test Features Panel**, and **Built-in 1,806-Sprite Asset Explorer**.

## Running Locally

Serve the root directory with any static HTTP server:

```bash
python -m http.server 8123
```

Then open `http://localhost:8123` in your browser.
