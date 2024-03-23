'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
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
    // Large screens styles
    if (scrollPosition < 60) {
      containerStyle = styles.headerXL;
    } else {
      containerStyle = styles.headerM;
    }
  } else if (screenType === 'L-screens') {
    // Medium screens styles
    if (scrollPosition < 48) {
      containerStyle = styles.headerL;
    } else {
      containerStyle = styles.headerM;
    }
  } else if (screenType === 'M-screens') {
    // small screens styles
    containerStyle = styles.headerM;
  } else {
    // Smaller screens & mobile styles
    containerStyle = styles.headerS;
  }

  return (
    <header className={containerStyle}>
      <h1>CD Fullstack | Carine Dupuis</h1>
      <nav className={styles.nav}>
        {screenType !== 'S-screens'
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
