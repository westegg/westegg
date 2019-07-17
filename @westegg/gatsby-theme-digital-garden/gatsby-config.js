module.exports = options => {
  const {
    header = {
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
    },
    mdx = true,
    mdxLayouts = {},
    netlifyCms = true,
    notes = 'notes',
    notesPath = '/notes',
    postsPath = '/blog',
    projects = 'projects',
    projectsPath = '/projects',
    siteMetadata = {
      title: 'Westegg Digital Garden'
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
        header,
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
