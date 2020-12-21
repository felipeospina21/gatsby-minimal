import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PortfolioPageTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="">
        <h1 className="">{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        {/* <div className='' dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </Layout>
  )
}

export default PortfolioPageTemplate

export const PortfolioPageQuery = graphql`
  query PortfolioPage {
    mdx(frontmatter: { templateKey: { eq: "portfolioPage" } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
