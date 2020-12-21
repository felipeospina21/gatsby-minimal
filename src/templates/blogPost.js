import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="">
        <div className="">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <MDXRenderer>{body}</MDXRenderer>

          {/* <div className='' dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
      </div>
    </Layout>
  )
}

export const BlogTemplateQuery = graphql`
  query BlogPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tags
      }
    }
  }
`
