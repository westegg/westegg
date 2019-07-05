import React from 'react'
import MDXProvider from '../components/mdx-provider'

import Header from '../gatsby-theme-digital-garden/components/header'

const SiteLayout = ({ children }) => {
  return (
    <MDXProvider>
      <section>
        <Header />
        <main>{children}</main>
      </section>
    </MDXProvider>
  )
}

export default SiteLayout
