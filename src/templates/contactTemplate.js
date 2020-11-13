import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ContactPageTemplate({
	data // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<SEO title={frontmatter.title} description={frontmatter.description} />
			<div className='blog-post-container'>
				<div className='blog-post'>
					<h1>{frontmatter.title}</h1>
					<div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</Layout>
	);
}

export const ContactPageQuery = graphql`
	query ContactPage {
		markdownRemark(frontmatter: { templateKey: { eq: "contactTemplate" } }) {
			html
			frontmatter {
				slug
				title
				description
			}
		}
	}
`;
