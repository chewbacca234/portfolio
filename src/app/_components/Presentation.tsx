'use client';
import Image from 'next/image';
import styles from './Presentation.module.css';
import {} from '@/hooks';
import { TechStack } from '.';

export function Presentation() {
  return (
    <div className={styles.container} id="presentation">
      <div className={styles.center}>
        <div className={styles.flipCard}>
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
        </div>
      </div>
      <TechStack />
    </div>
  );
}
