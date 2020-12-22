import React from "react"
import styled from "styled-components"
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai"

const FooterContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  background-color: var(--clr-primary-light);
  margin: 0.5rem auto 0 auto;
  min-height: 60px;
  padding: 0.5rem;
`
const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  & svg {
    color: var(--clr-contrast);
    width: 1.5em;
    height: 1.5em;
    margin: auto 0.5em;
  }
`
const InfoContainer = styled.div`
  color: white;
  border-right: 0.1rem solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
        <p>contacto</p>
        <p>telefono</p>
      </InfoContainer>
      <SocialContainer>
        <AiOutlineLinkedin />
        <AiOutlineFacebook />
        <AiOutlineInstagram />
        <AiOutlineYoutube />
      </SocialContainer>
    </FooterContainer>
  )
}

export default Footer
