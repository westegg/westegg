import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          header {
            home {
              label
              href
            }
            links {
              label
              href
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.header
}
