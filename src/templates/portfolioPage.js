import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PortfolioPageTemplate = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;

	return (
		<Layout>
			<SEO title={frontmatter.title} description={frontmatter.description} />
			<div className=''>
				<h2 className=''>{frontmatter.title}</h2>
				<div className='' dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	);
};

export default PortfolioPageTemplate;

export const PortfolioPageQuery = graphql`
	query PortfolioPage {
		markdownRemark(frontmatter: { templateKey: { eq: "portfolioPage" } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
