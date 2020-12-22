import React from 'react';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';
import PostLink from '../components/PostLink';
import { graphql } from 'gatsby';

const BlogPageTemplate = ({ data: { allMarkdownRemark: { edges } } }) => {
	// const { markdownRemark } = data;
	// const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<SEO title='Blog' />
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<h1>Blog Posts</h1>
			{edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
		</Layout>
	);
};

export default BlogPageTemplate;

export const BlogPageQuery = graphql`
	query {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blogPost" } } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;
