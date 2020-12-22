import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  :root{
    --clr-primary-dark: #242633;
    --clr-primary-light: #3e4254;
    --clr-contrast: #e3a93b;
    --clr-text:#fffeff;
    --main-font: 'Montserrat', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body,
  html {
    height: 100%;
    font-family: var(--main-font);
    overflow: auto;
    margin: 0;
    ${"" /* background-color: var(--clr-darker-blue); */}
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  div {
    // max-width: 1900px;
    margin: auto;
  }
  input, label, textarea{
    font: 400 16px var(--main-font);
  }
  button {
    cursor: pointer;
    font :400 0.825rem var(--main-font)
  }
  label,h1,h2,h3,h4,h5,h6{
      letter-spacing: 0.075rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
