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

export function Experiences() {
  const experiences = experiencesData.map(experience => {
    const [ref, isVisible] = useIsVisible();

    return (
      <VerticalTimelineElement
        key={experience.title}
        date={experience.date}
        visible={isVisible}
        // intersectionObserverProps={{ rootMargin: '0px 0px -200px 0px' }}
        // className="vertical-timeline-element--work"
        contentStyle={{
          background: 'rgb(var(--primary-rgb))',
          color: 'rgb(var(--foreground-rgb))',
        }}
        contentArrowStyle={{
          borderRight: '7px solid  rgb(var(--primary-rgb))',
        }}
        icon={<FiBriefcase />}
        iconStyle={{
          background: 'rgb(var(--secondary-rgb))',
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
