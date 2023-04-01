import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = () => {
  const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "Getting-Started-with-Nextjs",
    excerpt:
      "NextJS est un framework React pour la production - il permet de creeer des zpplications fullstack aisement",
    date: "2022-02-10",
    image: "getting-started-nextjs.png",
    content: "# This is a first post",
  };

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
