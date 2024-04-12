import styles from './HeaderMenu.module.css';
import { Drawer } from 'antd';
import Link from 'next/link';
import { VscChromeClose } from 'react-icons/vsc';

type Props = {
  onClose: () => void;
  open: boolean;
  navItems: {
    label: string;
    url: string;
  }[];
};

export function HeaderMenu({ onClose, open, navItems }: Props) {
  return (
    <Drawer
      //   title="Basic Drawer"
      onClose={onClose}
      open={open}
      placement="left"
      width={220}
      closeIcon={
        <VscChromeClose color="rgb(var(--foreground-rgb))" size={'1.5rem'} />
      }
      style={{
        background: 'rgba(var(--background-end-rgb), 0.9)',
      }}
      styles={{
        wrapper: { boxShadow: 'none' },
        mask: {
          backdropFilter: 'blur(10px)',
          background: 'rgba(var(--foreground-rgb), 0.1)',
        },
      }}
      classNames={{
        mask: styles.mask,
        wrapper: styles.wrapper,
        header: styles.header,
        content: styles.content,
        body: styles.body,
      }}
    >
      {navItems.map(({ label, url }) => (
        <Link
          key={label}
          className={styles.item}
          type="button"
          href={url}
          onClick={onClose}
        >
          {label}
        </Link>
      ))}
    </Drawer>
  );
}
