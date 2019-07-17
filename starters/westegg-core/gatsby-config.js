module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl: 'http://example.com',
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: '@westegg/gatsby-theme-core',
      options: {
        mdx: true,
        mdxLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    }
  ]
}
