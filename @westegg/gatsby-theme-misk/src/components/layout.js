import React from "react"
import { Global } from "@emotion/core"
import { css } from "theme-ui"
import { Layout, Main, Container } from "theme-ui/layout"
import HeaderContainer from "gatsby-theme-digital-garden/src/components/header-container"
import { SEO } from "gatsby-theme-digital-garden/src/components/seo"

export default props => (
  <>
    <Global
      styles={css({
        "*": {
          boxSizing: "border-box"
        },
        body: {
          margin: 0,
          color: "text",
          bg: "background",
          fontFamily: "body"
        }
      })}
    />
    <Layout>
      <SEO />
      <HeaderContainer />
      <Main>
        <Container>{props.children}</Container>
      </Main>
    </Layout>
  </>
)
