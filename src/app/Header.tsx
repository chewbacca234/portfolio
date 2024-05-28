'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useScrollPosition, useWindowSize } from '@/hooks';
import { useState } from 'react';
import { HeaderMenu } from '@/components';
import { LuLanguages } from 'react-icons/lu';
import { Modal } from 'antd';

export default function Header({ dict }: { dict: any }) {
  const { theme, setTheme } = useTheme();
  const { windowSize } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems: {
    label: string;
    url: string;
  }[] = [
    { label: dict.techStack, url: `#presentation` },
    { label: dict.projects, url: `#projects` },
    { label: dict.experiences, url: `#experiences` },
    { label: dict.softSkills, url: `#skills` },
    { label: dict.contact, url: `#contact` },
  ];

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
              <Link
                key={label}
                className="button"
                type="button"
                href={url}
                scroll={true}
              >
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
      <LuLanguages
        size="1.5rem"
        onClick={() => setIsLangOpen(true)}
        cursor="pointer"
        className={styles.themeSwitchBtn}
        title="Change language"
      />
      <Modal
        title={dict.chooseLang}
        open={isLangOpen}
        footer={null}
        onCancel={() => setIsLangOpen(false)}
        styles={{ content: { flexDirection: 'column' } }}
      >
        <Link
          key={'en'}
          className="button"
          style={{ display: 'flex' }}
          href={'/en'}
          scroll={true}
          onClick={() => setIsLangOpen(false)}
        >
          English
        </Link>
        <Link
          key={'fr'}
          className="button"
          style={{ display: 'flex' }}
          href={'/fr'}
          scroll={true}
          onClick={() => setIsLangOpen(false)}
        >
          Français
        </Link>
        <Link
          key={'es'}
          className="button"
          style={{ display: 'flex' }}
          href={'/es'}
          scroll={true}
          onClick={() => setIsLangOpen(false)}
        >
          Español
        </Link>
      </Modal>
    </header>
  );
}
