import AllPosts from "../../components/posts/all-posts";
import { getAllPost } from "../../lib/post-util";

const AllPostPage = (props) => {
  return <AllPosts posts={props.posts}/>;
};

export async function getStaticProps() {
  const allPosts = getAllPost();
  return { props: { status: "success", posts: allPosts } };
}

export default AllPostPage;
