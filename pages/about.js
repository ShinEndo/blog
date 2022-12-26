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
import Accordion from "components/Accordion";

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
            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                provident sequi quaerat maxime fugiat. Autem corrupti error
                voluptatibus culpa perferendis fugiat omnis obcaecati, dolor
                doloremque, quae ipsam asperiores tempora nemo.
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                vitae eligendi unde. Recusandae, quo asperiores quis possimus
                aspernatur eveniet quos neque. Alias nostrum nihil repudiandae
                quidem reprehenderit accusantium? Unde, architecto!
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                veritatis fugiat dignissimos, nobis itaque mollitia illum! Nobis
                nam voluptates odio pariatur sunt in voluptatibus, assumenda
                nulla ex dolores accusantium animi.
              </p>
            </Accordion>
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
