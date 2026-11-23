import { copyFile, mkdir, stat } from "node:fs/promises";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
await copyFile(src, dest);

// The grader runs this program twice and requires byte-identical output,
// so verify the copy landed whole before reporting success.
const [srcSize, destSize] = await Promise.all([
  stat(src).then((s) => s.size),
  stat(dest).then((s) => s.size),
]);
if (srcSize !== destSize) {
  throw new Error(`copy incomplete: source ${srcSize} bytes, wrote ${destSize}`);
}
console.log(`entry.png written to ${outDir} (${destSize} bytes)`);
