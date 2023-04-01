import fs from "fs";
import path from "path";
import { cwd } from "process";

import matter from "gray-matter";

const filePath = path.join(process.cwd(), "posts");
console.log(filePath);

function getPostData(filename) {
  const filePath = path.join(process.cwd(), "posts", filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // Will return an object with 2 properties data: metadata and content
  const { data, content } = matter(fileContent);

  const postSlug = filename.replace(/\.md$/, ""); // remove the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPost() {
  const postFiles = fs.readdirSync(filePath);
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
  console.log(allPosts)

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  console.log(featuredPosts)

  return featuredPosts;
}
