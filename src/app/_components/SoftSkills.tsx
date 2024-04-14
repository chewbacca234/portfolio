import { SectionContainer } from '@/components';
import styles from './SoftSkills.module.css';
import { SkillsBubbles } from '@/threeJs';

export function SoftSkills() {
  return (
    <SectionContainer title="MySoftSkills" id="skills">
      <SkillsBubbles></SkillsBubbles>
    </SectionContainer>
  );
}
