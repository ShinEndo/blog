import Container from "components/Container";
import ConvertBody from "components/ConvertBody";
import PostBody from "components/PostBody";
import PostCategories from "components/PostCategories";
import PostHeader from "components/PostHeader";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/TwoColumn";
import { getPostBySlug } from "lib/api";
import extractText from "lib/extractText";
import Meta from "components/meta";
import Image from "next/image";

// ローカルの代替アイキャッチ画像
import {eyecatchLocal} from 'lib/constants'
import { getPlaiceholder } from "plaiceholder";

const Schedule = ({ title, publish, content, eyecatch, categories,description }) => {
  return (
    <Container>
      <Meta pageTitle={title} pageDesc={description} pageImg={eyecatch.url} pageImgW={eyecatch.width} pageImgH={eyecatch.height} /> 
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
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
};
export default Schedule;

export async function getStaticPaths() {
  return {
    paths: ['/blog/schedule', '/blog/music', '/blog/micro'],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  const description = extractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;
  const {base64} = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  };
}