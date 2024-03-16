import { NavButton } from '@/components';
import styles from './Header.module.css';

const navItems = [
  { label: `Projects`, url: `#projects` },
  { label: `Experiences`, url: `#experiences` },
  { label: `Skills`, url: `#skills` },
  { label: `Contact`, url: `#contact` },
];

export function Header() {
  return (
    <header className={styles.header}>
      <p>CD Fullstack | Carine Dupuis</p>
      <nav className={styles.nav}>
        {navItems.map(({ label, url }) => (
          <NavButton key={label} href={url}>
            {label}
          </NavButton>
        ))}
      </nav>
    </header>
  );
}
