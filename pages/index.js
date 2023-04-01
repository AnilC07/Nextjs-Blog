import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

const HomePage = ({posts}) => {

  return (
    <>
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
