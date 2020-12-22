import React, { useState } from "react"
import styled from "styled-components"

const Services = () => {
  const [services] = useState([
    {
      title: "Desarrollo Web",
      description: "Desarrollamos las mejores páginas web",
    },
    {
      title: "Desarrollo Apps",
      description: "Desarrollamos las Apps web más cool",
    },
    {
      title: "Diseño de Productos",
      description: "Desarrollamos productos que resuelven tus problemas",
    },
  ])

  const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1em 0;
  `
  const ServiceCard = styled.div`
    height: 10em;
    width: 21.5em;
    margin: 0.5em auto;
    padding: 1em;
    border: 1px solid var(--clr-primary-dark);
    border-radius: 5px;
    background-color: var(--clr-primary-light);
    color: var(--clr-text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
      margin: 1em 0;
    }
  `

  return (
    <ServicesContainer>
      {services.map(service => {
        return (
          <ServiceCard key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        )
      })}
    </ServicesContainer>
  )
}

export default Services
