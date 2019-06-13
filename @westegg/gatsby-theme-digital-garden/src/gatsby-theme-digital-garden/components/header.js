import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import { Header } from "theme-ui/layout"

import { Box } from "./ui"

export default () => (
  <Header
    css={css({
      p: [3, 4],
      bg: "background"
    })}
  >
    <Helmet>
      <link rel="icon" type="image/png" href="/img/logos/h.png" sizes="32x32" />
    </Helmet>
    <Styled.a as={Link} to="/">
      {"Westegg Docs"}
    </Styled.a>
    {/* <Link to="/">
      <img
        alt=""
        src="/img/logos/hfm.png"
        style={{ maxHeight: "100%", width: "50px" }}
      />
    </Link> */}
    <Box mx="auto" />
    <Box mx={1} />
    <span>
      <Styled.a as={Link} to={"/notes"}>
        Notes
      </Styled.a>
    </span>
    <Box mx={1} />
    <span>
      <Styled.a as={Link} to={"/contact"}>
        Contact
      </Styled.a>
    </span>
  </Header>
)
