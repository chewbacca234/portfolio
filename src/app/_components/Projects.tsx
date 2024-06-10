'use client';
import { Carousel } from 'antd';
import styles from './Projects.module.css';
import { ProjectSlide, SectionContainer } from '@/components';
import { useIsVisible } from '@/hooks';

type Project = {
  name: string;
  description: string;
  techStack: { frontend: string[]; backend: string[] };
  picture: string;
  links: { url: string; label: string }[];
};

export function Projects({ dict }: { dict: any }) {
  const [ref, isVisible] = useIsVisible();
  // console.log('isVisible', isVisible);

  const projectsData: Project[] = dict.projects.projectsData;

  // console.log('projectsData', projectsData);

  const projects = projectsData.map(project => {
    return (
      <ProjectSlide
        key={project.name}
        name={project.name}
        description={project.description}
        techStack={project.techStack}
        picture={project.picture}
        links={project.links}
      />
    );
  });

  return (
    <SectionContainer title={dict.projects.title} id="projects" reference={ref}>
      <Carousel autoplay={isVisible ? true : false} infinite>
        {projects}
      </Carousel>
    </SectionContainer>
  );
}
