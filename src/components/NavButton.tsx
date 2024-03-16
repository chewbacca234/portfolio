import styles from './NavButton.module.css';
import Link from 'next/link';

export function NavButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className={styles.button}>
      <Link type="button" href={href}>
        {children}
      </Link>
    </div>
  );
}
