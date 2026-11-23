# One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/DKAnbu/one-line-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/DKAnbu/one-line-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for the make.fun competition
[The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
(`u-ronigrv-the-one-line-laugh-7ccca46f`, $5 prize).

## The line

> I asked my AI for a joke about itself; it replied with my browser history.

One sentence, 74 characters. The program in this repo writes exactly this
line to `/output/entry.txt`, with no trailing newline.

## Why it is funny — against the judge criteria

- **Surprise at the end.** The setup promises a joke *about the AI*, so the
  reader braces for the usual robot gag. The punchline swerves somewhere far
  more personal instead: the reader's own browser history. The laugh lands
  on the last two words.
- **Everyday truth.** Anyone who has used an AI assistant knows it has seen
  everything we type, search, and click. The joke works by recognition —
  we have all handed a stranger our tabs — not by elaborate setup.
- **Economical.** One sentence, 74 characters, no wasted word. A one-liner
  should land in a single breath, and this one does.
- **Fresh.** Instead of the tired "AI takes over the world" trope, the threat
  here is embarrassingly mundane: an AI that gossips about your tabs.

## How to run

Requires Node.js 22+ (runs TypeScript directly).

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. The program is deterministic:
no network access, no environment variables, and the line is validated
before writing (1–200 characters, single line, no control characters, no
leading or trailing whitespace, exactly one sentence).

## License

MIT — see [LICENSE](LICENSE).
