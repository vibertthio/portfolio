import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Project from '../components/Project';
import projects from '../contents/projects.content';

import styles from './projects.module.css';

const Projects = () => (
  <div>
    <ul style={{ margin: '0' }}>
      {projects.map((p, index) => (
        <div className={styles.projectListItem} key={p.title}>
          <li>
            <Project title={p.title} content={ReactHtmlParser(p.content)} img={p.img} />
          </li>
          {index < projects.length - 1 ? <hr className={styles.projectDevider} /> : ''}
        </div>
			))}
    </ul>
  </div>
);

export default Projects;
