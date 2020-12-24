import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Excerpt from "../components/Excerpt"
import Services from "../components/Services"
import News from "../components/News"
import ContactForm from '../components/ContactForm'

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero frontmatter={frontmatter} />
      <Excerpt frontmatter={frontmatter} />
      <Services />
			<News/>
			<ContactForm/>
    </Layout>
  )
}

export default IndexPageTemplate

export const IndexPageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "indexPage" } }) {
      html
      frontmatter {
        title
        heroImg
        heroText
        description
      }
    }
  }
`
