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
    posts,
    postsPath,
    projects,
    projectsPath,
    siteMetadata = {
      title: 'Westegg Digital Garden'
    }
  } = options

  const plugins = []
  /**
   * Gatsby Themes
   */
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

  if (typeof posts === 'string' || typeof postsPath === 'string') {
    plugins.push({
      resolve: 'gatsby-theme-digital-garden-blog',
      options: {
        posts,
        postsPath
      }
    })
  }

  if (typeof projects === 'string' || typeof projectsPath === 'string') {
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
