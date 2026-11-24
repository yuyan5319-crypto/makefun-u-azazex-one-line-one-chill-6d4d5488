// One Line, One Chill — a single-sentence horror line, written to /output/entry.txt.
//
// The grader runs this with Node 22 (type stripping), no network, no secrets:
// the whole entry is this one constant string, written verbatim. The output
// directory is MAKEFUN_OUTPUT_DIR when set (local runs), otherwise /output
// (the grader's sandbox). No trailing newline: the gate counts characters,
// so the file holds exactly the line and nothing else.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My daughter drew our family again today, but this time she drew me standing outside the house, watching us eat dinner through the window, smiling with too many teeth.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
