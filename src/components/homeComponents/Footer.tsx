import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        By Carine Dupuis &copy; {new Date().getFullYear()}
        <Image
          className={styles.miniLogo}
          src="/images/CD_Fullstack_logo_300.png"
          alt="CD Fullstack Logo mini"
          width={300}
          height={300}
          priority
        />
      </p>
    </footer>
  );
}
