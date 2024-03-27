'use client';
import Image from 'next/image';
import styles from './Presentation.module.css';
import { useWindowSize } from '@/hooks';

export function Presentation() {
  const { screenType } = useWindowSize();

  //   TODO: Refactor dtyles conditions

  return (
    <div className={styles.container} id="presentation">
      <div
        className={screenType === 'S-screens' ? styles.centerS : styles.centerL}
      >
        <div
          className={
            screenType === 'S-screens' ? styles.flipCardS : styles.flipCardL
          }
        >
          <div className={styles.flipCardInner}>
            <div
              className={
                screenType === 'S-screens'
                  ? styles.flipCardFrontS
                  : styles.flipCardFrontL
              }
            >
              <Image
                className={
                  screenType === 'S-screens' ? styles.logoS : styles.logoL
                }
                src="/images/logo-CDFullstack-600.png"
                alt="CD Fullstack Logo"
                width={300}
                height={300}
                priority
              />
            </div>
            <div
              className={
                screenType === 'S-screens'
                  ? styles.flipCardBackS
                  : styles.flipCardBackL
              }
            >
              <Image
                className={
                  screenType === 'S-screens' ? styles.logoS : styles.logoL
                }
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
    </div>
  );
}
