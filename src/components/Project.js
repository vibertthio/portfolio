import React from 'react';
import styles from '../pages/projects.module.css';

const Project = props => (
  <div className={styles.projectContainer}>
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <div
        className={`
        ${styles.projectImgContainer}
        ${props.index % 2 === 0 ? styles.left : styles.right}`}
      >
        <img src={props.img} className={styles.projectImg} alt="project-img" />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{props.content}</p>
      </div>
    </div>
  </div>
);

export default Project;
