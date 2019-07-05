module.exports = options => {
  const {
    mdx = false,
    mdxLayouts = {},
    netlifyCms = true,
    notes = 'notes',
    notesPath = '/notes',
    postsPath = '/blog',
    projects = 'projects',
    projectsPath = '/projects',
    siteMetadata = {
      title: 'Westegg Digital Garden',
      header: {
        home: {
          href: '/',
          label: 'Westegg Digital Garden'
        },
        links: [
          {
            href: '/notes',
            label: 'Themes'
          }
        ]
      }
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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/default-page.js')
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-redirects'
  ]

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
  if (netlifyCms) {
    plugins.push('gatsby-plugin-netlify-cms')
    plugins.push('gatsby-plugin-netlify')
  }

  /**
   * Gatsby Themes
   */
  const themes = []

  if (notes || notesPath) {
    themes.push({
      resolve: 'gatsby-theme-digital-garden',
      options: {
        mdx,
        mdxLayouts,
        notes,
        notesPath
      }
    })
  }

  if (postsPath) {
    themes.push({
      resolve: 'gatsby-theme-digital-garden-blog',
      options: {
        postsPath
      }
    })
  }

  if (projects || projectsPath) {
    themes.push({
      resolve: 'gatsby-theme-digital-garden-portfolio',
      options: {
        projects,
        projectsPath
      }
    })
  }

  return {
    siteMetadata,
    __experimentalThemes: themes,
    plugins
  }
}
