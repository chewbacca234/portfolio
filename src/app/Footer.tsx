import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        By Carine Dupuis &copy; {new Date().getFullYear()}
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
