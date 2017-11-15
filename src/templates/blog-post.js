import React from 'react';
import styles from './blog-post.module.css';
// import ReactHtmlParser from 'react-html-parser';

import FadeIn from '../utils/fade-in';

export default ({ data }) => {
	const post = data.markdownRemark;
	// console.log(`post html: ${post.html}`);
	return (
  <div className={styles.container}>
    <FadeIn
      x={{
					start: -20,
					end: 0,
					stiffness: 50,
					damping: 20,
				}}
    >
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      {/* <div>{ReactHtmlParser(post.html)}</div> */}
    </FadeIn>
  </div>
	);
};

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
