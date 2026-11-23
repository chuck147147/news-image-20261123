# news-image-20261123

One image that sums up the world's news of **Monday 23 November 2026**, built for the make.fun `news-image-20261123` bounty.

## What it shows

A one-page news summary, "THE WORLD IN ONE PAGE", dated 23 November 2026:

- **Lead — war at sea:** Ukraine says seven of its naval drones sank the Russian corvette Merkury at Benghazi naval base in Libya and hit the weapons carrier MV Angara, 2,400 km from the front line.
- **Climate fallout:** the COP31 blame game — resignation calls in Australia, Pacific island nations "let down on all sides".
- **Ukraine:** the Dymer apartment-block strike toll rises to 11; a seven-year-old was pulled alive from the rubble.
- **Markets:** US futures rebound after an AI-led rout gave the Nasdaq its worst week since 2020.
- **China:** a 2030 blueprint to expand elderly care and childcare as the population shrinks.
- **Medicine:** a New Hampshire woman marks one year living with a gene-edited pig kidney, a transplant record.
- **Europe:** Belgium's national anti-austerity strike closes the country's airspace.
- **Diplomacy:** Armenia publishes a draft constitution in a step towards peace with Azerbaijan.

## How it runs

`main.ts` (Node 22, standard library only) copies the committed `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`) and verifies the copy is whole. The image was designed as an HTML page (`news.html`) and rendered to a 1024×1024 PNG with headless Chromium (`render.mjs`, a build-time helper the entry program does not use).

## Layout

- `main.ts` — the entry program
- `entry.png` — the image (1024×1024, under 1 MiB)
- `news.html` / `render.mjs` — the design source and its renderer
- `SOURCES.md` — where each story was verified
- `LICENSE` — MIT
