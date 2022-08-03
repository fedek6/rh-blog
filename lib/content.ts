import path from "path";
import * as matter from "gray-matter";
import { getAllDirectories } from "./files";
import { readdir, copyFile } from "node:fs/promises";

export type Frontmatter = {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  slug: string;
};

export type Pagination = ReturnType<typeof getPagination>;

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
 * Count number of posts in a directory.
 * @param directory
 * @returns Promise<number>
 */
export async function getPostsCount(directory: string) {
  const CONTENT_PATH = getContentPath(directory);

  return (await getAllDirectories(CONTENT_PATH)).length;
}

/**
 * Get ready object with pagination params.
 * @param directory
 * @param postsPerPage
 * @param removeFirst
 * @returns
 */
export async function getPaginationPaths(
  directory: string,
  postsPerPage: number,
  removeFirst = true
) {
  const postCount = await getPostsCount(directory);
  const pagination = getPagination(postCount, postsPerPage);

  return pagination.pages
    .filter((page) => (removeFirst ? page > 1 : true))
    .map((page) => ({
      params: {
        number: `${page}`,
      },
    }));
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

/**
 *
 * @param count
 * @param postsPerPage
 * @returns
 */
export function getPagination(
  totalCount: number,
  postsPerPage: number,
  current = 1
) {
  const count = Math.ceil(totalCount / postsPerPage);
  const pages = Array.from(Array(count), (_, i) => i + 1);

  return {
    count,
    pages,
    current,
  };
}

/**
 *
 * @param posts
 * @param currentPage
 * @param perPage
 * @returns
 */
export function slicePosts<T>(
  posts: Array<T>,
  currentPage: number,
  perPage: number
) {
  return posts.slice((currentPage - 1) * perPage, currentPage * perPage);
}

export function getPostContent(slug: string, directory: string) {
  const path = getContentPath(directory, slug, "index.mdx");

  return matter.read(path);
}

/**
 *
 * @param slug
 * @param directory
 */
export async function publishPostAssets(slug: string, directory: string) {
  const postPath = getContentPath(directory, slug);
  const files = await readdir(postPath, {
    withFileTypes: false,
  });

  const extensions = [".jpg"];

  const images = files.filter((file) =>
    extensions.includes(path.extname(file))
  );

  for (const image of images) {
    await copyFile(
      path.join(postPath, image),
      path.join(process.cwd(), "public", "images", image)
    );
  }
  console.log(images);
}
