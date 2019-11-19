import React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import Header from '../components/Header'

const ContactPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Header title="Contact Page" />
        <Link to="/">Home</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default ContactPage
