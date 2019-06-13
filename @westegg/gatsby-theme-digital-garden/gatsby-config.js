module.exports = options => {
  const {
    mdx = true,
    mdxLayouts = {},
    notes = "notes",
    siteMetadata = {
      title: "Westegg Digital Garden"
    }
  } = options

  return {
    siteMetadata,
    __experimentalThemes: [
      {
        resolve: "gatsby-theme-digital-garden",
        options: {
          mdx,
          mdxLayouts,
          notes
        }
      }
    ],
    plugins: []
  }
}
