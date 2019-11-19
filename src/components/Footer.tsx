import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
// import Container from './Container'

const FooterContainer = styled.div`
  height: 20vh;
  padding: 2rem 5rem;
  background-color: ${colors.brand};
  color: ${colors.white};
`

const FooterLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`

interface FooterProps {
  title: string
}

const Footer: React.FC<FooterProps> = ({ title }) => (
  <FooterContainer>
    <div className={title}>
      <FooterLink to="/">Home</FooterLink>
    </div>
  </FooterContainer>
)

export default Footer
