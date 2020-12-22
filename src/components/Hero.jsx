import React from "react"
import styled from "styled-components"
import Image from "./Image"

const HeroContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  background-color: var(--clr-primary-dark);
`
const HeroText = styled.h1`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 10;
  position: absolute;
  bottom: 0;
  text-align: center;
  height: 100%;
  width: 100%;
  color: var(--clr-text);
`
const HeroImg = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 0.5;
`
const HeroBtnContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 15px;
`
const HeroBtn = styled.button`
  width: 7rem;
  height: 2.2rem;
  background: var(--clr-contrast);
  color: var(--clr-text);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Hero = ({ frontmatter }) => {
  const { heroImg, heroText } = frontmatter
  const heroImgRelPath = heroImg.split("/img/")[1]

  return (
    <HeroContainer>
      <HeroImg src={heroImgRelPath} alt="heroimg" />
      <HeroText>{heroText}</HeroText>
      <HeroBtnContainer>
        <HeroBtn>Call to action</HeroBtn>
      </HeroBtnContainer>
    </HeroContainer>
  )
}

export default Hero
