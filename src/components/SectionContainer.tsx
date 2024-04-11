import { LegacyRef, ReactNode, forwardRef } from 'react';
import styles from './SectionContainer.module.css';

type Props = {
  title: string;
  id: string;
  reference?: LegacyRef<HTMLDivElement> | undefined;
  children: ReactNode;
};

export const SectionContainer = forwardRef(
  ({ title, id, reference, children }: Props): JSX.Element => {
    return (
      <div className={styles.container} id={id} ref={reference}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
);
