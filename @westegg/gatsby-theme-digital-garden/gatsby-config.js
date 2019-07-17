module.exports = options => {
  const {
    mdx = true,
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

  const plugins = []
  /**
   * Gatsby Themes
   */
  if (notes || notesPath) {
    plugins.push({
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
    plugins.push({
      resolve: 'gatsby-theme-digital-garden-blog',
      options: {
        postsPath
      }
    })
  }

  if (projects || projectsPath) {
    plugins.push({
      resolve: 'gatsby-theme-digital-garden-portfolio',
      options: {
        projects,
        projectsPath
      }
    })
  }

  return {
    siteMetadata,
    plugins
  }
}
