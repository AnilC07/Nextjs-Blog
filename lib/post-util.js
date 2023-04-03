import fs from "fs";
import path from "path";
import { cwd } from "process";

import matter from "gray-matter";

const postDirectory = path.join(cwd(), "posts");

export function getPostFiles() {
  return  fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove the file extension

  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // Will return an object with 2 properties data: data and content
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPost() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPost();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);


  return featuredPosts;
}
