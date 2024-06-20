'use client';
import { Carousel } from 'antd';
import { ProjectSlide, SectionContainer } from '@/components';
import { useIsVisible } from '@/hooks';
import { useEffect } from 'react';

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

  let hasPointer: boolean = window.matchMedia('(any-hover: hover)').matches;

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
      <Carousel autoplay={isVisible && hasPointer ? true : false} infinite>
        {projects}
      </Carousel>
    </SectionContainer>
  );
}
