'use client';
import Image from 'next/image';
import styles from './Presentation.module.css';
import { TechStack } from '.';
import Link from 'next/link';
import { useState } from 'react';

export function Presentation({ dict }: { dict: any }) {
  const [clickMe, setClickMe] = useState(false);

  const handlePointerOver = () => setClickMe(true);
  const handlePointerOut = () => setClickMe(false);

  return (
    <div className={styles.container} id="presentation">
      {clickMe && <p className={styles.clickMe}>{dict.presentation.clickMe}</p>}
      <div className={styles.center}>
        <div
          className={styles.flipCard}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
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
