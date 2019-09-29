import { Link } from 'gatsby'
import { setLightness } from 'polished'
import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'

import { colors } from 'gatsby-theme-casper/src/styles/colors'
import { outer, inner } from 'gatsby-theme-casper/src/styles/shared'

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: ${setLightness('0.0015', colors.darkgrey)};
`

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-child {
      margin-left: 0;
    }
  }
`

interface FooterData {
  site: {
    siteMetadata: {
      title: string
      facebook?: string
      twitter?: string
      footer: string
      footerLink?: string
      footerShowRss?: boolean
    }
  }
}

const Footer: React.FC = () => {
  const data = useStaticQuery<FooterData>(graphql`
    query {
      site {
        siteMetadata {
          title
          facebook
          twitter
          footer
          footerLink
          footerShowRss
        }
      }
    }
  `)
  const config = data.site.siteMetadata

  console.log(config)

  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | {config.title} {config.footer}
            </Link>
          )}
        </section>
        <SiteFooterNav>
          {config.facebook && (
            <a href={config.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {config.twitter && (
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}

          {config.footerShowRss && <a href="/rss.xml">RSS</a>}
        </SiteFooterNav>
      </div>
    </footer>
  )
}

export default Footer
