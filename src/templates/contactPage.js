import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function ContactPageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <MDXRenderer>{body}</MDXRenderer>

          {/* <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
      </div>
    </Layout>
  )
}

export const ContactPageQuery = graphql`
  query ContactPage {
    mdx(frontmatter: { templateKey: { eq: "contactPage" } }) {
      body
      frontmatter {
        slug
        title
        description
      }
    }
  }
`
