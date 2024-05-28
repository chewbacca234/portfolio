'use client';
import { Carousel } from 'antd';
import styles from './Projects.module.css';
import projectsData from '../../../public/datas/projects.json';
import { ProjectSlide, SectionContainer } from '@/components';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

export function Projects({ dict }: { dict: any }) {
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
    <SectionContainer title={dict.myProjects} id="projects" reference={ref}>
      <Carousel autoplay={isVisible ? true : false} infinite>
        {projects}
      </Carousel>
    </SectionContainer>
  );
}
