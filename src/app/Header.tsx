'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useScrollPosition, useWindowSize } from '@/hooks';
import { useState } from 'react';
import { HeaderMenu } from '@/components';

const navItems: {
  label: string;
  url: string;
}[] = [
  { label: `Tech Stack`, url: `#presentation` },
  { label: `Projects`, url: `#projects` },
  { label: `Experiences`, url: `#experiences` },
  { label: `Soft Skills`, url: `#skills` },
  { label: `Contact`, url: `#contact` },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { windowSize } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  // console.log('theme:', theme);
  // console.log('Window Size:', windowSize);
  // console.log('Scroll Position:', scrollPosition);

  let containerStyle: string = styles.header;
  if (windowSize.innerWidth >= 960) {
    // Large screens styles
    if (scrollPosition < 48) {
      containerStyle = styles.header;
    } else {
      containerStyle = styles.sticky;
    }
  } else if (windowSize.innerWidth >= 1024) {
    // Extra Large screens styles
    if (scrollPosition < 60) {
      containerStyle = styles.header;
    } else {
      containerStyle = styles.sticky;
    }
  }

  const showMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={containerStyle}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>CD Fullstack | Carine Dupuis</h1>
        <nav className={styles.nav}>
          {windowSize.innerWidth >= 960 ? (
            navItems.map(({ label, url }) => (
              <Link key={label} className="button" type="button" href={url}>
                {label}
              </Link>
            ))
          ) : (
            <>
              <FiMenu
                size="1.5rem"
                onClick={showMenu}
                cursor="pointer"
                className={styles.menu}
              />
              <HeaderMenu
                onClose={closeMenu}
                open={menuOpen}
                navItems={navItems}
              />
            </>
          )}
        </nav>
      </div>
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
    </header>
  );
}
