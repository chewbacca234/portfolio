import Image from "next/image";
import styles from "./page.module.css";
import {
  Contact,
  Experiences,
  Presentation,
  Projects,
  SoftSkills,
} from "@/app/_components";
import { getDictionary } from "./dictionaries";

type Props = {
  params: { [lang: string]: string };
};

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <main className={`${styles.main}`}>
      <Image
        className={`${styles.backgroundImgTop} ${styles.backgroundParallax}`}
        src="/images/background_1.png"
        alt="splash background"
        width={800}
        height={1112}
        priority
        quality={75}
      />
      <Image
        className={`${styles.backgroundImgMiddle} ${styles.backgroundParallax}`}
        src="/images/background_4.png"
        alt="splash background"
        width={800}
        height={1112}
        loading="lazy"
        quality={75}
      />

      <Presentation dict={dict} />
      <Projects dict={dict} />
      <Experiences dict={dict} />
      <SoftSkills dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
