import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts/index'

const IndexPage = () => (
  <IndexLayout>
    <Page className="testtest123">
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/portfolio/" style={{ color: `green`, fontSize: `24px` }}>
          Go to page 2
        </Link>
        <Link to="/contact/">Contact Me</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
