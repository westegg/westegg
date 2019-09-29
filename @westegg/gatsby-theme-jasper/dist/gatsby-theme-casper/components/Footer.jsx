'use strict'
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const gatsby_1 = require('gatsby')
const polished_1 = require('polished')
const React = __importStar(require('react'))
const styled_1 = __importDefault(require('@emotion/styled'))
const core_1 = require('@emotion/core')
const gatsby_2 = require('gatsby')
const colors_1 = require('gatsby-theme-casper/src/styles/colors')
const shared_1 = require('gatsby-theme-casper/src/styles/shared')
const SiteFooter = core_1.css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: ${polished_1.setLightness('0.0015', colors_1.colors.darkgrey)};
`
const SiteFooterContent = core_1.css`
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
const SiteFooterNav = styled_1.default.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: "";
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
const Footer = () => {
  const data = gatsby_2.useStaticQuery(gatsby_2.graphql`
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
    <footer css={[shared_1.outer, SiteFooter]}>
      <div css={[shared_1.inner, SiteFooterContent]}>
        <section className="copyright">
          <gatsby_1.Link to="/">{config.title}</gatsby_1.Link> &copy;{' '}
          {new Date().getFullYear()}{' '}
          {config.footer && (
            <gatsby_1.Link to="/">
              | {config.title} {config.footer}
            </gatsby_1.Link>
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
exports.default = Footer
