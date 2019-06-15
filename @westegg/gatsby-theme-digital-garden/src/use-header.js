import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      westegg(id: { eq: "@westegg/gatsby-theme-digital-garden-root" }) {
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
  `)
  return data.westegg.header
}
