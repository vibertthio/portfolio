import React from 'react';
import styles from '../pages/projects.module.css';

const Project = props => (
  <div className={styles.projectContainer}>
    <div>
      <h1 className={styles.projectTitle}>{props.title}</h1>
      <div className={styles.thumbnailProjectImg}>
        <img
          src={props.img}
          className={styles.projectImg}
          alt="project-img"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.projectsDescription}>
          {props.content}
        </p>
      </div>
    </div>

  </div>
);

export default Project;
