'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { CSSProperties, useState } from 'react';
import { useScrollPosition, useWindowSize } from '@/hooks';

const navItems: {
  label: string;
  url: string;
}[] = [
  { label: `Projects`, url: `#projects` },
  { label: `Experiences`, url: `#experiences` },
  { label: `Skills`, url: `#skills` },
  { label: `Contact`, url: `#contact` },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const windowSize: {
    innerHeight: number;
    innerWidth: number;
  } = useWindowSize();
  const scrollPosition: number = useScrollPosition();

  console.log('theme:', theme);
  console.log('Window Size:', windowSize);
  console.log('Scroll Position:', scrollPosition);

  const screenSize: 'XL-screens' | 'L-screens' | 'M-screens' | 'S-screens' =
    windowSize.innerWidth >= 1000
      ? 'XL-screens'
      : windowSize.innerWidth >= 900
      ? 'L-screens'
      : windowSize.innerWidth >= 800
      ? 'M-screens'
      : 'S-screens';

  let containerStyle: string;
  if (screenSize === 'XL-screens') {
    // Large screens styles
    if (scrollPosition < 60) {
      containerStyle = styles.headerXL;
    } else {
      containerStyle = styles.headerM;
    }
  } else if (screenSize === 'L-screens') {
    // Medium screens styles
    if (scrollPosition < 48) {
      containerStyle = styles.headerL;
    } else {
      containerStyle = styles.headerM;
    }
  } else if (screenSize === 'M-screens') {
    // small screens styles
    containerStyle = styles.headerM;
  } else {
    // Smaller screens & mobile styles
    containerStyle = styles.headerS;
  }

  return (
    <header className={containerStyle}>
      <p>CD Fullstack | Carine Dupuis</p>
      <nav className={styles.nav}>
        {screenSize !== 'S-screens'
          ? navItems.map(({ label, url }) => (
              <Link key={label} className="button" type="button" href={url}>
                {label}
              </Link>
            ))
          : null}
        {theme !== 'light' ? (
          <FiSun
            size="1.5rem"
            onClick={() => setTheme('light')}
            cursor="pointer"
            className={styles.themeSwitchBtn}
            title="Switch to light mode"
          />
        ) : (
          <FiMoon
            size="1.5rem"
            onClick={() => setTheme('dark')}
            cursor="pointer"
            className={styles.themeSwitchBtn}
            title="Switch to dark mode"
          />
        )}
      </nav>
    </header>
  );
}
