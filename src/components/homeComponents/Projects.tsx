import { Carousel } from 'antd';
import styles from './Projects.module.css';
export function Projects() {
  return (
    <div className={styles.container} id="projects">
      <h2>MyProjects</h2>
      <Carousel autoplay>
        <div className={styles.projectContainer}>
          <h3 className={styles.projectTitle}>Pweeter</h3>
        </div>
        <div>
          <h3 className={styles.projectTitle}>Happy Day!</h3>
        </div>
        <div>
          <h3 className={styles.projectTitle}>Geeks News</h3>
        </div>
        <div>
          <h3 className={styles.projectTitle}>Weather App</h3>
        </div>
      </Carousel>
    </div>
  );
}
