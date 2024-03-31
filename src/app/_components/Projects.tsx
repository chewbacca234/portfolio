import { Carousel } from 'antd';
import styles from './Projects.module.css';
import projectsData from '../../../public/datas/projects.json';
import { ProjectSlide } from '@/components';

export function Projects() {
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
    <div className={styles.container} id="projects">
      <h2>MyProjects</h2>
      <Carousel autoplay infinite>
        {projects}
      </Carousel>
    </div>
  );
}
