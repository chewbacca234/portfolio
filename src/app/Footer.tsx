import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className={styles.footer}>
      <p>
        {dict.by} Carine Dupuis &copy; 2024
        <Image
          className={styles.miniLogo}
          src="/images/logo-CDFullstack-300.png"
          alt="CD Fullstack Logo mini"
          width={300}
          height={300}
          priority
        />
      </p>
    </footer>
  );
}
