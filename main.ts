import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY =
  "To: Mum\nI told you Dad's last words were 'take care of your mother.' He asked for the remote.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);

// Two parts only: a To: line, then the one typed line. No trailing newline.
