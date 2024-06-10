import { SectionContainer } from '@/components';
import styles from './SoftSkills.module.css';
import { SkillsBubbles } from '@/threeJs';

export function SoftSkills({ dict }: { dict: any }) {
  return (
    <SectionContainer title={dict.softSkills.title} id="skills">
      <SkillsBubbles dict={dict} />
    </SectionContainer>
  );
}
