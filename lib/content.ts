import fs from "fs";
import { readdir } from "node:fs/promises";
import path from "path";
import * as matter from "gray-matter";
import { getAllDirectories } from "./files";

export type Frontmatter = {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  slug: string;
};

/**
 * Generate full path to content directory.
 *
 * @param dirs - Multiple directories to glue into content path.
 * @returns Path to content directory.
 */
const getContentPath = (...dirs: string[]) => {
  return path.join(process.cwd(), "data", ...dirs);
};

/**
 *
 * @param directory
 */
export async function getSortedContent(directory: string) {
  const CONTENT_PATH = getContentPath(directory);
}

/**
 * Slug generator.
 *
 * @param directory - Content directory name
 * @returns Promise resolved with array of strings
 */
export async function getAllSlugs(directory: string) {
  const CONTENT_PATH = getContentPath(directory);

  return await getAllDirectories(CONTENT_PATH);
}

/**
 * Get frontmatter for specicfic content directory.
 *
 * @param directory
 */
export async function getAllFrontmatter(directory: string) {
  const CONTENT_PATH = getContentPath(directory);

  const content = [];

  const dirs = await getAllDirectories(CONTENT_PATH);

  for (let dir of dirs) {
    const FILE_PATH = path.join(CONTENT_PATH, dir, "index.mdx");
    const file = matter.read(FILE_PATH);
    const data = { ...(file.data as Frontmatter), slug: dir };

    if (!data.draft) {
      content.push(data);
    }
  }

  return content;
}

/**
 * Sort frontmatter content DESC.
 *
 * @param files
 * @returns
 */
export function sortFrontmatterByDate(files: Frontmatter[]): Frontmatter[] {
  return [...files].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}
