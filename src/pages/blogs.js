import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => (
  <div>
    <h1>Blogs</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3
            style={{
							display: 'inline',
							textDecoration: 'none',
						}}
          >
            {node.frontmatter.title}
          </h3>
          <p style={{ display: 'inline', textDecoration: 'none' }}> - {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          {/* <p>{node.excerpt}</p> */}
        </Link>
      </div>
		))}
  </div>
);

export const query = graphql`
	query BlogQuery {
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
