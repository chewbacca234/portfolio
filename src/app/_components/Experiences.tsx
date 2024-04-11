'use client';
import styles from './Experiences.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiencesData from '../../../public/datas/experiences.json';
import { FiBriefcase, FiRotateCcw } from 'react-icons/fi';
import { useIsVisible } from '@/hooks';
import { GiTShirt, GiTeacher } from 'react-icons/gi';
import { IoSchool } from 'react-icons/io5';
import { BsFileEarmarkCode, BsFileEarmarkCodeFill } from 'react-icons/bs';

export function Experiences() {
  const experiences = experiencesData.map((experience, i) => {
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

    return (
      <VerticalTimelineElement
        key={experience.title}
        date={experience.date}
        visible={isVisible}
        contentStyle={{
          background:
            i % 2 === 0
              ? 'rgb(var(--primary-rgb))'
              : 'rgb(var(--secondary-rgb))',
          color: 'rgb(var(--foreground-rgb))',
          borderRadius: 'var(--border-radius)',
        }}
        contentArrowStyle={{
          borderRight:
            i % 2 === 0
              ? '7px solid  rgb(var(--primary-rgb))'
              : '7px solid  rgb(var(--secondary-rgb))',
        }}
        icon={icon}
        iconStyle={{
          background:
            i % 2 === 0
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
      </VerticalTimelineElement>
    );
  });

  return (
    <div className={styles.container} id="experiences">
      <h2>MyExperiences</h2>
      <VerticalTimeline lineColor="rgb(var(--foreground-rgb))">
        {experiences}
        <VerticalTimelineElement
          visible
          icon={<FiRotateCcw />}
          iconStyle={{
            background: 'rgb(var(--secondary-rgb))',
            color: 'rgb(var(--foreground-rgb))',
            boxShadow: '0 0 0 4px rgb(var(--foreground-rgb))',
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
