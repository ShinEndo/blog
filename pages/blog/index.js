import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";
import Posts from "components/Posts";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";

const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
