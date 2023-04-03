import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPost } from "../../lib/post-util";

const AllPostPage = (props) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="decription" content="Retrouver tous less posts ici" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPost();
  return { props: { status: "success", posts: allPosts } };
}

export default AllPostPage;
