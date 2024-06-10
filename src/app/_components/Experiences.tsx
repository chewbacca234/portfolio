'use client';
import styles from './Experiences.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiRotateCcw } from 'react-icons/fi';
import { useIsVisible } from '@/hooks';
import { GiTShirt, GiTeacher } from 'react-icons/gi';
import { IoSchool } from 'react-icons/io5';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { SectionContainer } from '@/components';

type Experience = {
  icon: string;
  title: string;
  date: string;
  desc: string;
  info: string;
};

export function Experiences({ dict }: { dict: any }) {
  const experiencesData: Experience[] = dict.experiences.experiencesData;
  console.log('experiencesData', experiencesData);
  const experiences = experiencesData.map(
    (experience: Experience, index: number) => {
      const [ref, isVisible] = useIsVisible({
        freezeOnceVisible: true,
        rootMargin: '0px 0px -400px',
      });

      let icon = <BsFileEarmarkCodeFill />;
      if (experience.icon === 't-shirt') {
        icon = <GiTShirt />;
      } else if (experience.icon === 'school') {
        icon = <IoSchool />;
      } else if (experience.icon === 'teacher') {
        icon = <GiTeacher />;
      }

      const indexIsEven = index % 2 === 0;

      return (
        <VerticalTimelineElement
          key={experience.title}
          date={experience.date}
          visible={isVisible}
          contentStyle={{
            background: indexIsEven
              ? 'rgb(var(--primary-rgb))'
              : 'rgb(var(--secondary-rgb))',
            color: 'rgb(var(--foreground-rgb))',
            borderRadius: 'var(--border-radius)',
          }}
          contentArrowStyle={{
            borderRight: indexIsEven
              ? '7px solid  rgb(var(--primary-rgb))'
              : '7px solid  rgb(var(--secondary-rgb))',
          }}
          icon={icon}
          iconStyle={{
            background: indexIsEven
              ? 'rgb(var(--primary-rgb))'
              : 'rgb(var(--secondary-rgb))',
            color: 'rgb(var(--foreground-rgb))',
            boxShadow: '0 0 0 4px rgb(var(--foreground-rgb))',
          }}
        >
          <h3 ref={ref} className="vertical-timeline-element-title">
            {experience.title}
          </h3>
          <p>{experience.desc} </p>
          <p className={styles.info}>{experience.info} </p>
        </VerticalTimelineElement>
      );
    }
  );

  return (
    <SectionContainer title={dict.experiences.title} id="experiences">
      <VerticalTimeline lineColor="rgb(var(--foreground-rgb))">
        {experiences}
        <VerticalTimelineElement
          visible
          icon={<FiRotateCcw />}
          iconStyle={{
            background: 'rgb(var(--primary-rgb))',
            color: 'rgb(var(--foreground-rgb))',
            boxShadow: '0 0 0 4px rgb(var(--foreground-rgb))',
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </SectionContainer>
  );
}
