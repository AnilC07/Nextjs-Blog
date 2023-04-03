import { Fragment } from "react";
import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";

// On utilise le slug pour que ce soit 'human readable' et 'search engine friendly'
const PostDetailPage = (props) => {
  console.log(props.post.title)
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);


  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}

export default PostDetailPage;
