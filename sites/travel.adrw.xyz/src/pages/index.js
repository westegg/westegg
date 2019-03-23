import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import Layout from "../components/Layout"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h3 className="has-text-weight-bold is-size-3">Adventures</h3>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: "1px solid #333", padding: "2em 4em" }}
                key={post.id}
              >
                {post.frontmatter.img ? (
                  <Img fluid={post.frontmatter.img.childImageSharp.fluid} />
                ) : (
                  <span />
                )}
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                  <small>{post.frontmatter.date}</small>
                  <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                  {post.frontmatter.tags.map(tag => (
                    <span key={tag + `tag`} style={{ padding: "10px" }}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </span>
                  ))}
                </p>
                <p>
                  {post.frontmatter.description
                    ? post.frontmatter.description
                    : post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            img {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
