import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinksContainer = styled.ul`
  height: 10em;
  padding-bottom: 0.5em;
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: 0.25rem;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & a {
    color: var(--clr-text);

    &:hover {
      color: var(--clr-contrast);
    }
  }

  @media screen and (min-width: 1000px) {
    height: auto;
    flex-direction: row;
    width: 70%;
    font-size: 1.2rem;
    padding: 0 3% 0 0;
    margin-right: 2em;

    & li {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;
    }
    & a:hover {
      padding: 0;
      background: transparent;
    }
  }

  @media screen and (min-width: 1300px) {
    padding-right: 10%;
  }
`

function NavLinks({ toggleNav }) {
  return (
    <NavLinksContainer>
      <li>
        <Link to="/" onClick={toggleNav}>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/conocenos" onClick={toggleNav}>
          Conócenos
        </Link>
      </li>
      <li>
        <Link to="/portfolio" onClick={toggleNav}>
          Portafolio
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={toggleNav}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={toggleNav}>
          Contacto
        </Link>
      </li>
    </NavLinksContainer>
  )
}

export default NavLinks
