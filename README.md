# Browser Arcade

A catalog of classic games ported to the browser. Click a card and play.

Live: https://zullum.github.io/browser-games/

To add a game, add one line to `games.js`.

Card art is original, generated locally with MOSS-Image from the prompts in `art/prompts.json` (no logos or characters).

Check for dead links: `tools/check-links.sh games.js | grep -v ^OK`, then mark dead ports with `down: true`.
