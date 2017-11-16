const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === 'MarkdownRemark') {
		// I put the index.js with index.md. Therefore, I have to give it specific path
		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		// const slug = createFilePath({ node, getNode, basePath: 'pages' }).concat('index.md');
		// console.log(`slug for ${node.id} : ${slug}`);
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
	}
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							html
							fields {
								slug
							}
						}
					}
				}
			}
		`).then((result) => {
			if (result.errors) {
				console.log(result.errors);
			}
			result.data.allMarkdownRemark.edges.forEach(({ node }) => {
				// console.log(node.html);
				createPage({
					path: node.fields.slug,
					component: path.resolve('./src/templates/blog-post.js'),
					// component: path.resolve('./src/templates/blog-post-example.js'),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: node.fields.slug,
					},
				});
			});
			resolve();
		});
	});
};
