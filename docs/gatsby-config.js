module.exports = {
  siteMetadata: {
    title: 'Westegg Docs'
  },
  plugins: [
    {
      resolve: '@westegg/gatsby-theme-core'
    },
    {
      resolve: '@westegg/gatsby-theme-digital-garden',
      options: {
        header: {
          home: {
            href: '/',
            label: '/img/logos/hw.png'
          },
          links: [
            {
              href: '/themes',
              label: 'Themes'
            }
          ]
        },
        posts: 'posts',
        postsPath: '/blog',
        projects: 'themes',
        projectsPath: '/themes'
      }
    }
  ]
}
