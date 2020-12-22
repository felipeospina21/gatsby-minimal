import React, { useState } from "react"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { ImPower as LogoIcon } from "react-icons/im"
import { FaBars as MenuIcon } from "react-icons/fa"
import { FaTimes as CloseIcon } from "react-icons/fa"
import styled, { css } from "styled-components"
import { breakpoints } from "../styles/styles"
import NavLinks from "./NavLinks"

const { screenMd, screenL } = breakpoints

const HeaderContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 200;
  min-height: 50px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-primary-light);
`
const Logo = styled(LogoIcon)`
  display: flex;
  align-items: center;
  margin: 0.7em 1em;
  font-size: 1.5rem;
  color: var(--clr-contrast);

  @media screen and (min-width: ${screenL}) {
    max-height: 100px;
    width: 250px;
  }
`
const IconStyle = css`
  font-size: 1.5rem;
  margin: auto 1em;
  color: var(--clr-contrast);
  background: transparent;
  border-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${screenMd}) {
    display: none;
  }
`
const CloseBtn = styled(CloseIcon)`
  ${IconStyle}
`
const MenuBtn = styled(MenuIcon)`
  ${IconStyle}
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const breakpoints = useBreakpoint()

  const toggleNav = () => {
    setShowMenu(currentState => !currentState)
  }

  return (
    <HeaderContainer>
      <Link to="/" onClick={toggleNav}>
        <Logo />
      </Link>
      {showMenu ? (
        <CloseBtn onClick={toggleNav} />
      ) : (
        <MenuBtn onClick={toggleNav} />
      )}

      {showMenu && breakpoints.md ? <NavLinks toggleNav={toggleNav} /> : null}
      {breakpoints.md ? null : <NavLinks toggleNav={toggleNav} />}
    </HeaderContainer>
  )
}
export default Header

// const Header = ({ siteTitle }) => (
// 	<nav class="navbar" role="navigation" aria-label="main navigation">
// 		<div>
// 			<Link to='/'>{siteTitle}</Link>
// 			<Link to='/portfolio'>Portfolio</Link>
// 			<Link to='/contact'>Contact</Link>
// 			<Link to='/blog'>Blog</Link>
// 		</div>
// 	</nav>
// );
