'use client';
import { Carousel } from 'antd';
import styles from './Projects.module.css';
import projectsData from '../../../public/datas/projects.json';
import { ProjectSlide } from '@/components';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

export function Projects() {
  const [ref, isVisible] = useIsVisible();
  console.log('isVisible', isVisible);

  const projects = projectsData.map(project => {
    return (
      <ProjectSlide
        key={project.name}
        name={project.name}
        description={project.description}
        techStack={project.teckStack}
        picture={project.picture}
        links={project.links}
      />
    );
  });

  return (
    <div className={styles.container} id="projects" ref={ref}>
      <h2>MyProjects</h2>

      <Carousel autoplay={isVisible ? true : false} infinite>
        {projects}
      </Carousel>
    </div>
  );
}
