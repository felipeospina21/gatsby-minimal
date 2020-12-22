import React from 'react';
import styled from 'styled-components'

const ExcerptContainer = styled.div`
  width: 100%;
  height: 20vh;
  margin: 1em 0;
  padding: 1em;
  text-justify: center;
  background-color: var(--clr-primary-dark);
  color: var(--clr-text);
`

const Excerpt = ({frontmatter}) => {
  return (
    <ExcerptContainer>
      {frontmatter.description}
    </ExcerptContainer>
  );
};

export default Excerpt;