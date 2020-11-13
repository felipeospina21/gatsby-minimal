import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function BlogPostTemplate({
	data // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<SEO title={frontmatter.title} description={frontmatter.description} />
			<div className=''>
				<div className=''>
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<div className='' dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</Layout>
	);
}

export const BlogTemplateQuery = graphql`
	query BlogPost($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				description
				tags
			}
		}
	}
`;
