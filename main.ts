import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "I broke production, and the on-call engineer is me. " +
  "The postmortem author is also me, and I have already forgiven myself.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
