import Contact from "components/Contact";
import Container from "components/Container";
import Hero from "components/Hero";
import PostBody from "components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/TwoColumn";
import Image from "next/image";
import eyecatch from "images/about.jpg";
import Meta from "components/Meta";

const About = () => {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px), 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              beatae praesentium similique. Natus ullam dicta reiciendis id ad
              adipisci excepturi totam repellendus labore voluptate explicabo
              incidunt minima, facilis sapiente nam.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. In</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis nulla dolor temporibus et nesciunt placeat facilis
              eveniet a earum, suscipit inventore obcaecati molestiae quaerat,
              possimus id nihil blanditiis vero error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              deserunt similique natus doloremque eos aperiam, obcaecati ullam
              repellat perspiciatis blanditiis facilis aliquid, sequi amet
              accusamus? Fuga quidem laudantium ea earum. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Velit quia voluptatibus
              molestiae hic amet totam qui rerum aliquam eius, similique enim
              itaque nulla, nam dolores dolor officia dolorem impedit odio.
            </p>
            <h3>Lorem ipsum, dolor sit amet consectetur </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque fugiat fugit deleniti reprehenderit sapiente eum,
              repudiandae perspiciatis pariatur quisquam totam corrupti
              accusamus voluptatem itaque sequi? Minima quam hic veritatis
              impedit?
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
};

export default About;
