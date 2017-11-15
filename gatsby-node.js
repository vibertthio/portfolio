const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		// console.log(`slug for ${node.id} : ${slug}`);
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
	}
};

// Add custom url pathname for blog posts.
// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
// 	const { createNodeField } = boundActionCreators;
//
// 	if (node.internal.type === 'File') {
// 		const parsedFilePath = path.parse(node.absolutePath);
// 		const slug = `/${parsedFilePath.dir.split('---')[1]}/`;
// 		createNodeField({ node, name: 'slug', value: slug });
// 	} else if (node.internal.type === 'MarkdownRemark' && typeof node.slug === 'undefined') {
// 		const fileNode = getNode(node.parent);
// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: fileNode.fields.slug,
// 		});
//
// 		if (node.frontmatter.tags) {
// 			// const tagSlugs = node.frontmatter.tags.map(tag => `/tags/${_.kebabCase(tag)}/`);
// 			// createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
// 		}
// 	}
// };

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
