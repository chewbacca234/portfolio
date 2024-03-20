import styles from './Header.module.css';
import Link from 'next/link';

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
  return (
    <header className={styles.header}>
      <p>CD Fullstack | Carine Dupuis</p>
      <nav className={styles.nav}>
        {navItems.map(({ label, url }) => (
          <Link key={label} className="button" type="button" href={url}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
