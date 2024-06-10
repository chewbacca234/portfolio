import styles from './Contact.module.css';
import { SectionContainer, TypeWriter } from '@/components';

export function Contact({ dict }: { dict: any }) {
  return (
    <SectionContainer title={dict.contact.title} id="contact">
      <TypeWriter dict={dict} />
      <p>{dict.contact.form.title}</p>
      <p>+33 641 099 465</p>
      <p>carine.dupuis.es@gmail.com</p>
    </SectionContainer>
  );
}
