module.exports = {
  siteMetadata: {
    title: 'Westegg Digital Garden'
  },
  __experimentalThemes: [
    {
      resolve: '@westegg/gatsby-theme-digital-garden',
      options: {
        header: {
          home: {
            href: '/',
            label: '/img/logos/h.png'
          },
          links: [
            {
              href: '/blog',
              label: 'Writing'
            },
            {
              href: '/portfolio',
              label: 'Portfolio'
            },
            {
              href: '/notes',
              label: 'Notes'
            },
            {
              href: '/contact',
              label: 'Contact'
            }
          ]
        },
        projects: 'portfolio',
        projectsPath: '/portfolio'
      }
    }
  ]
}
