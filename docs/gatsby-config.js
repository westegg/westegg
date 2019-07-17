module.exports = {
  siteMetadata: {
    title: 'Westegg Docs'
  },
  plugins: [
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
              href: '/notes/themes',
              label: 'Themes'
            }
          ]
        }
      }
    }
  ]
}
