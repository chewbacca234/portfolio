'use client';
import { Carousel } from 'antd';
import { ProjectSlide, SectionContainer } from '@/components';
import { useIsVisible, useWindowSize } from '@/hooks';
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

  const { screenType } = useWindowSize();
  const smallAndMediumScreens =
    screenType === 'M-screens' || screenType === 'S-screens';

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
      <Carousel
        autoplay={isVisible && !smallAndMediumScreens ? true : false}
        infinite
      >
        {projects}
      </Carousel>
    </SectionContainer>
  );
}
