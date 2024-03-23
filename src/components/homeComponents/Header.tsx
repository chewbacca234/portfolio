'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useState } from 'react';

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

  console.log('theme', theme);

  return (
    <header className={styles.header}>
      <p>CD Fullstack | Carine Dupuis</p>
      <nav className={styles.nav}>
        {navItems.map(({ label, url }) => (
          <Link key={label} className="button" type="button" href={url}>
            {label}
          </Link>
        ))}
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
