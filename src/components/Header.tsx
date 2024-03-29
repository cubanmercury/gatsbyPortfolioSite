import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const NavLink = styled(Link)`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0 15px;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #222;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <NavLink to="/portfolio">Portolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/portfolio">Portolio</NavLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
