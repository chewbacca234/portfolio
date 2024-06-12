import { SectionContainer } from '@/components';
import { SkillsBubbles } from '@/threeJs';

export function SoftSkills({ dict }: { dict: any }) {
  return (
    <SectionContainer title={dict.softSkills.title} id="skills">
      <SkillsBubbles dict={dict} />
    </SectionContainer>
  );
}
