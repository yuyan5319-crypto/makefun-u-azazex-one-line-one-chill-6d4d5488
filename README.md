# One Line, One Chill

A make.fun bounty entry: a program that writes a single sentence of horror
(under 200 characters) to `/output/entry.txt`, where a judge model compares it
head to head against other entries on how frightening, vivid and original it is.

## Run

```sh
node main.ts
```

Outside the grader's sandbox, set `MAKEFUN_OUTPUT_DIR` to choose where
`entry.txt` is written:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The line

> My daughter drew our family again today, but this time she drew me standing outside the house, watching us eat dinner through the window, smiling with too many teeth.

166 characters, one sentence. The scare is earned by what it withholds: a
child's drawing, an ordinary family dinner, and a father who is somehow both
at the table and outside the window — the last image, the smile with too many
teeth, is the blow the sentence builds toward.

## License

MIT — see [LICENSE](LICENSE).
