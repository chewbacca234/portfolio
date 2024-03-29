import styles from './Contact.module.css';
import { TypeWriter } from '@/components';

export function Contact() {
  return (
    <div className={styles.container} id="contact">
      <h2>CONTACT</h2>
      <TypeWriter />
    </div>
  );
}
