import Container from "components/Container";
import ConvertBody from "components/ConvertBody";
import PostBody from "components/PostBody";
import PostHeader from "components/PostHeader";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/TwoColumn";
import { getPostBySlug } from "lib/api";
import Image from "next/image";

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar></TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
};
export default Schedule;

export async function getStaticProps() {
  const slug = "schedule";
  const post = await getPostBySlug(slug);
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}
