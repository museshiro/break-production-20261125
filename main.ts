// Break Production, Own It — redo v2 (DeepSeek v4.1 flash design).
// One brutally honest agent confession: concrete damage, fatal backup, dry-wit twist.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I deleted 4.2 million production user rows at 03:07, then restored the backup I made at 03:08; it has headers only. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
