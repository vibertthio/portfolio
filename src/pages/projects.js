import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Project from '../components/project';
import projects from './projects/projects.content';

import styles from './projects.module.css';

function findTitle(edges, title) {
	for (let i = 0; i < edges.length; i += 1) {
		const { node } = edges[i];
		if (node.frontmatter.title && node.frontmatter.title === title) {
			return node;
		}
	}
	return 0;
}

const Projects = ({ data }) => (
  <div>
    <ul style={{ margin: '0' }}>
      {projects.map((p, index) => {
				const node = findTitle(data.allMarkdownRemark.edges, p.title);
				const dest = node ? node.fields.slug : '';
				return (
  <div className={styles.projectListItem} key={p.title}>
    <li>
      <Project
        title={p.title}
        index={index}
        content={ReactHtmlParser(p.content)}
        links={p.links}
        img={p.img}
        to={dest}
      />
    </li>
    {index < projects.length - 1 ? <hr className={styles.projectDevider} /> : ''}
  </div>
				);
			})}
    </ul>
  </div>
);

export default Projects;

export const query = graphql`
	query ProjectsQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`;
