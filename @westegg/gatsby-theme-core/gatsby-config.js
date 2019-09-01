const fs = require('fs')
const path = require('path')

module.exports = options => {
  const {
    mdx = false,
    mdxLayouts = {},
    siteMetadata = {
      title: 'Westegg Digital Garden'
    }
  } = options

  const plugins = [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'static/img',
        name: 'uploads'
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(`pages`)
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-redirects'
  ]

  /**
   * Gatsby MDX
   */
  if (mdx && Object.keys(mdxLayouts).length > 0) {
    plugins.push({
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          ...mdxLayouts
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          }
        ],
        rehypePlugins: [
          require('rehype-autolink-headings'),
          require('rehype-highlight'),
          require('rehype-slug'),
          require('rehype-toc')
        ]
      }
    })
  }

  /**
   * Google Analytics
   */
  const gaBase = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      anonymize: true
    }
  }

  if (typeof analytics === 'string') {
    plugins.push({
      ...gaBase,
      options: {
        ...gaBase.options,
        trackingId: analytics
      }
    })
  }

  if (
    typeof analytics === 'object' &&
    typeof analytics.trackingId === 'string'
  ) {
    plugins.push({
      ...gaBase,
      options: {
        ...gaBase.options,
        ...analytics
      }
    })
  }

  /**
   * Netlify CMS
   */
  if (fs.existsSync('./static/admin/config.yml')) {
    plugins.push('gatsby-plugin-netlify-cms')
    plugins.push('gatsby-plugin-netlify')
  }

  return {
    siteMetadata,
    plugins
  }
}
