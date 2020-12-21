import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPageTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="">
        <h2 className="">{frontmatter.title}</h2>
        <MDXRenderer>{body}</MDXRenderer>
        {/* <div className='' dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </Layout>
  )
}

export default IndexPageTemplate

export const IndexPageQuery = graphql`
  query IndexPage {
    mdx(frontmatter: { templateKey: { eq: "indexPage" } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
