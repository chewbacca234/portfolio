'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './page.module.css';
import { CSSProperties, useState } from 'react';
import { TypeWriter } from '@/components';
import iconSourcesList from '../../public/datas/techStack.json';
// Dynamic import of the ThreeJS component
const AnimatedIcons = dynamic(
  () => {
    return import('@/components');
  },
  { ssr: false }
);

export default function Home() {
  const [animatedIconsIsLoading, setAnimatedIconsIsLoading] = useState(true);
  const [timeoutFinished, settimeoutFinished] = useState(false);

  function getAnimatedIconsLoadingState(isLoading: boolean) {
    setAnimatedIconsIsLoading(isLoading);
  }

  setTimeout(() => {
    settimeoutFinished(true);
  }, 750);

  const animatedIconsLoadingStyle: () => CSSProperties = () => {
    const height: string = `${80 * Object.keys(iconSourcesList).length}px`;
    const width: string = `${80 * iconSourcesList.iconSourcesList1.length}`;
    if (animatedIconsIsLoading || !timeoutFinished) {
      return { display: 'flex', height, width };
    } else {
      return { display: 'none', height, width };
    }
  };

  const animatedIconsStyle: () => CSSProperties = () => {
    const height: string = `${80 * Object.keys(iconSourcesList).length}px`;
    const width: string = `${80 * iconSourcesList.iconSourcesList1.length}`;
    if (animatedIconsIsLoading || !timeoutFinished) {
      return { display: 'none', height, width };
    } else {
      return { display: 'flex', height, width, gap: 0 };
    }
  };

  return (
    <main className={`${styles.main}`}>
      <Image
        className={`${styles.backgroundImg} ${styles.backgroundParallax}`}
        src="/images/background.png"
        alt="splash background"
        width={1024}
        height={1422}
        priority
      />
      <div className={styles.description}>
        <p>CD Fullstack | Carine Dupuis</p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/images/CD_Fullstack_logo_600.png"
          alt="CD Fullstack Logo"
          width={600}
          height={600}
          priority
        />
      </div>

      <div
        style={animatedIconsLoadingStyle()}
        className={styles.animatedIconsContainer}
      >
        <p>My Tech Stack is comming</p>
        <p>Wait a little bit...</p>
      </div>
      <div
        style={animatedIconsStyle()}
        className={styles.animatedIconsContainer}
      >
        <AnimatedIcons
          iconSources={iconSourcesList.iconSourcesList1}
        ></AnimatedIcons>
        <AnimatedIcons
          iconSources={iconSourcesList.iconSourcesList2}
        ></AnimatedIcons>
        <AnimatedIcons
          iconSources={iconSourcesList.iconSourcesList3}
          getAnimatedIconsLoadingState={getAnimatedIconsLoadingState}
        ></AnimatedIcons>
      </div>
      <TypeWriter />

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
        <div style={{ height: '1000px' }}></div>
      </div>
      <div className={styles.copyright}>
        <p>
          By Carine Dupuis
          <Image
            src="/images/CD_Fullstack_logo_300.png"
            alt="CD Fullstack Logo mini"
            className={styles.miniLogo}
            width={300}
            height={300}
            priority
          />
        </p>
      </div>
    </main>
  );
}
