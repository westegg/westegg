const fs = require("fs")
const path = require("path")

module.exports = options => {
  const {
    mdx = false,
    mdxLayouts = {},
    mdxShowToc = true,
    matomoConfig = {},
    siteMetadata = {
      title: "Westegg Core"
    }
  } = options

  const plugins = [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: "static/img",
        name: "uploads"
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(`pages`)
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-redirects"
  ]

  /**
   * Gatsby MDX
   */
  if (mdx && Object.keys(mdxLayouts).length > 0) {
    plugins.push({
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          ...mdxLayouts
        },
        gatsbyRemarkPlugins: [
          {
            // TODO this doesn't work. Waiting on https://github.com/gatsbyjs/gatsby/issues/16242
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          }
        ],
        rehypePlugins: [
          require("rehype-autolink-headings"),
          require("rehype-highlight"),
          require("rehype-slug")
        ].concat((mdxShowToc && [require("rehype-toc")]) || [])
      }
    })
  }

  /**
   * Matomo Analytics
   */
  if (Object.keys(matomoConfig).length > 0) {
    plugins.push({
      resolve: "gatsby-plugin-matomo",
      options: {
        ...matomoConfig
        // siteId: "YOUR_SITE_ID",
        // matomoUrl: "https://YOUR_MATOMO_URL.COM",
        // siteUrl: "https://YOUR_LIVE_SITE_URL.COM",
        // // All the optional settings
        // exclude: ["/offline-plugin-app-shell-fallback/"],
        // requireConsent: false,
        // disableCookies: false,
        // cookieDomain: "*.example.org",
        // localScript: "/piwik.js",
        // dev: false
      }
    })
  }

  /**
   * Netlify CMS
   */
  if (fs.existsSync("./static/admin/config.yml")) {
    plugins.push("gatsby-plugin-netlify-cms")
    plugins.push("gatsby-plugin-netlify")
  }

  return {
    siteMetadata,
    plugins
  }
}
