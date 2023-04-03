import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";
import Head from "next/head";

const HomePage = ({posts}) => {

  return (
    <>
    <Head>
      <title>Anil's blog</title>
      <meta name="description" content="Bienvenue sur ce site" />
    </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { status: "success", posts: featuredPosts },
  };
}

export default HomePage;
