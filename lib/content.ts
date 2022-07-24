import fs from "fs";
import { readdir } from "node:fs/promises";
import path from "path";

/**
 *
 * @param dirs - Multiple directories to glue into content path.
 * @returns Path to content directory.
 */
const getContentPath = (...dirs: string[]) => {
  return path.join(process.cwd(), "data", ...dirs);
};

export async function getSortedContent(directory: string) {
  console.log(directory);
}

/**
 * Slug generator.
 *
 * @param directory - Content directory name
 * @returns Promise resolved with array of strings
 */
export async function getSlugs(directory: string) {
  const CONTENT_PATH = getContentPath(directory);

  const files = await readdir(CONTENT_PATH, { withFileTypes: true });

  return files.filter((file) => file.isDirectory()).map((dir) => dir.name);
}
