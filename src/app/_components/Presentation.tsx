'use client';
import Image from 'next/image';
import styles from './Presentation.module.css';
import {} from '@/hooks';
import { TechStack } from '.';
import Link from 'next/link';

export function Presentation() {
  return (
    <div className={styles.container} id="presentation">
      <div className={styles.center}>
        <div className={styles.flipCard}>
          <Link href={'/datas/CV Dev fullstack_06_2024.pdf'} target="_blank">
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <Image
                  className={styles.logo}
                  src="/images/logo-CDFullstack-600.png"
                  alt="CD Fullstack Logo"
                  width={300}
                  height={300}
                  priority
                />
              </div>
              <div className={styles.flipCardBack}>
                <Image
                  className={styles.logo}
                  src="/images/profile_PRO_600.png"
                  alt="CD Fullstack Logo"
                  width={300}
                  height={300}
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <TechStack />
    </div>
  );
}
