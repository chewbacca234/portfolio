import Link from 'next/link';
import styles from './Contact.module.css';
import { FiGithub, FiGlobe, FiLink2 } from 'react-icons/fi';
import { SectionContainer, TypeWriter } from '@/components';
import { MdEmail } from 'react-icons/md';
import { IoMail } from 'react-icons/io5';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';

export function Contact({ dict }: { dict: any }) {
  return (
    <SectionContainer title={dict.contact.title} id="contact">
      <TypeWriter dict={dict} />
      <Link href="tel:+33641099465" target="_blank" className={styles.link}>
        +33 641 099 465
      </Link>

      <Link
        href="mailto:carine.dupuis.es@gmail.com"
        target="_blank"
        className={styles.link}
      >
        carine.dupuis.es@gmail.com
      </Link>

      <div className={styles.iconsContainer}>
        <Link
          href="https://api.whatsapp.com/send?phone=33641099465"
          target="_blank"
          className={styles.link}
        >
          <IoLogoWhatsapp size={28} />
        </Link>

        <Link
          href="mailto:carine.dupuis.es@gmail.com"
          target="_blank"
          className={styles.link}
        >
          <IoMail size={28} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/dupuis-carine-7575b243/"
          target="_blank"
          className={styles.link}
        >
          <IoLogoLinkedin size={28} />
        </Link>

        <Link
          href="https://github.com/chewbacca234"
          target="_blank"
          className={styles.link}
        >
          <IoLogoGithub size={28} />
        </Link>
      </div>
    </SectionContainer>
  );
}
