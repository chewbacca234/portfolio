'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useScrollPosition, useWindowSize } from '@/hooks';
import { useState } from 'react';
import { HeaderMenu } from '@/components';
import { Modal } from 'antd';
import Image from 'next/image';

export default function Header({ dict, lang }: { dict: any; lang: string }) {
  const { theme, setTheme } = useTheme();
  const { windowSize } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems: {
    label: string;
    url: string;
  }[] = [
    { label: dict.header.techStackLink, url: `#presentation` },
    { label: dict.header.projectsLink, url: `#projects` },
    { label: dict.header.experiencesLink, url: `#experiences` },
    { label: dict.header.softSkillsLink, url: `#skills` },
    { label: dict.header.contactLink, url: `#contact` },
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
          title={dict.header.darkModeInfo}
        />
      ) : (
        <FiMoon
          size="1.5rem"
          onClick={() => setTheme('dark')}
          cursor="pointer"
          className={styles.themeSwitchBtn}
          title={dict.header.lightModeInfo}
        />
      )}
      <button
        className="button"
        type="button"
        onClick={() => setIsLangOpen(true)}
        style={{ width: '2rem', padding: '0.5rem 0', fontSize: '80%' }}
        title={dict.header.chooseLangModalTitle}
      >
        {lang.toUpperCase() ?? 'EN'}
      </button>
      <Modal
        title={dict.header.chooseLangModalTitle}
        open={isLangOpen}
        footer={null}
        onCancel={() => setIsLangOpen(false)}
        styles={{
          content: { flexDirection: 'column' },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <Link
          key={'en'}
          className="button"
          style={{
            display: 'flex',
            border: 'none',
            background: 'none',
            justifyContent: 'flex-start',
            width: '150px',
          }}
          href={'/en'}
          scroll={true}
          onClick={() => setIsLangOpen(false)}
        >
          <Image
            className={styles.flag}
            src="/images/flags/gb.svg"
            alt="English flag"
            width={50}
            height={33}
          />
          English
        </Link>
        <Link
          key={'fr'}
          className="button"
          style={{
            display: 'flex',
            border: 'none',
            background: 'none',
            justifyContent: 'flex-start',
            width: '150px',
          }}
          href={'/fr'}
          scroll={true}
          onClick={() => setIsLangOpen(false)}
        >
          <Image
            className={styles.flag}
            src="/images/flags/fr.svg"
            alt="French flag"
            width={50}
            height={33}
          />
          Français
        </Link>
        <Link
          key={'es'}
          className="button"
          style={{
            display: 'flex',
            border: 'none',
            background: 'none',
            justifyContent: 'flex-start',
            width: '150px',
          }}
          href={'/es'}
          scroll={true}
          onClick={() => setIsLangOpen(false)}
        >
          <Image
            className={styles.flag}
            src="/images/flags/es.svg"
            alt="Spanish flag"
            width={50}
            height={33}
          />
          Español
        </Link>
      </Modal>
    </header>
  );
}
