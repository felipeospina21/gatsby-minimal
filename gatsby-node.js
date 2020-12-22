const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;
	const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
							fields {
								slug
							}
              frontmatter {
								templateKey
              }
            }
          }
        }
      }
    `);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path      : node.fields.slug,
			component : path.resolve(
				`./src/templates/${String(node.frontmatter.templateKey)}.js`
			),
			context   : {
				// additional data can be passed via context
				slug        : node.fields.slug,
				templateKey : node.frontmatter.templateKey
			}
		});
	});
};

// Create Page Slug
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` });
		createNodeField({
			node,
			name  : `slug`,
			value : slug
		});
	}
};
