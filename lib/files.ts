import { readdir } from "node:fs/promises";

/**
 * Get names of all directories in specified path.
 * @param path - path to scanned directory
 * @returns Promise resolved with array of directories
 */
export async function getAllDirectories(path: string) {
  const files = await readdir(path, { withFileTypes: true });

  return files.filter((file) => file.isDirectory()).map((dir) => dir.name);
}
