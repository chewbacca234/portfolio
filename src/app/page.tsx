import Image from 'next/image';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
// Dynamic import of the ThreeJS component
const AnimatedIcons = dynamic(
  () => {
    return import('../components/AnimatedIcons/AnimatedIcons');
  },
  { ssr: false }
);

export default function Home() {
  const iconSourcesList1: string[] = [
    '/images/stack/html.jpg',
    '/images/stack/css.jpg',
    '/images/stack/javascript.jpg',
    '/images/stack/nodejs-2.jpg',
    '/images/stack/react.jpg',
    '/images/stack/react-native.jpg',
    '/images/stack/flutter.jpg',
  ];

  const iconSourcesList2: string[] = [
    '/images/stack/next.jpg',
    '/images/stack/firebase.jpg',
    '/images/stack/mongodb.jpg',
    '/images/stack/express.jpg',
  ];

  const iconSourcesList3: string[] = [
    '/images/stack/github.jpg',
    '/images/stack/vercel.jpg',
    '/images/stack/expo.jpg',
  ];

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

      <AnimatedIcons iconSources={iconSourcesList1}></AnimatedIcons>
      <AnimatedIcons iconSources={iconSourcesList2}></AnimatedIcons>
      <AnimatedIcons iconSources={iconSourcesList3}></AnimatedIcons>

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
