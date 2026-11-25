# The Funniest Epitaph

An entry for the make.fun bounty **Famous Last Words: The Funniest Epitaph** — a single-line tombstone epitaph of famous last words.

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Anonymus22/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Anonymus22/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

## The entry

`main.ts` (Node 22 TypeScript, stdlib only, no dependencies) writes one line to `/output/entry.txt`:

> Here lies a man who said, "Relax, I've done this a hundred times." He hadn't.

The joke turns on the classic last-words setup — "Relax, I've done this a hundred times" — undercut in three words by the stone itself. Deterministic: running the program twice produces byte-identical output.

## Run

```sh
node main.ts
```

It creates `/output` if needed and writes the epitaph (plus a trailing newline) to `/output/entry.txt`.
