'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
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
  const { screenType } = useWindowSize();
  const scrollPosition = useScrollPosition();

  // console.log('theme:', theme);
  // console.log('Window Size:', windowSize);
  // console.log('Scroll Position:', scrollPosition);

  let containerStyle: string;
  if (screenType === 'XL-screens') {
    // Extra Large screens styles
    if (scrollPosition < 60) {
      containerStyle = styles.header;
    } else {
      containerStyle = styles.sticky;
    }
  } else if (screenType === 'L-screens' || 'M-screens') {
    // Large screens styles
    if (scrollPosition < 48) {
      containerStyle = styles.header;
    } else {
      containerStyle = styles.sticky;
    }
  } else {
    // Smaller screens & mobile styles
    containerStyle = styles.header;
  }

  return (
    <header className={containerStyle}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>CD Fullstack | Carine Dupuis</h1>
        <nav className={styles.nav}>
          {screenType !== 'S-screens' ? (
            navItems.map(({ label, url }) => (
              <Link key={label} className="button" type="button" href={url}>
                {label}
              </Link>
            ))
          ) : (
            <FiMenu
              size="1.5rem"
              onClick={() => null}
              cursor="pointer"
              className={styles.menu}
            />
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
