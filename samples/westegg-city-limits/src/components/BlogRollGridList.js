import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
})

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <GridList cellHeight={200} cols={2} spacing={1}>
        {posts &&
          posts.map(({ node: post }) => (
            <GridListTile
              key={`${post.frontmatter.title}${post.frontmatter.date}`}
              cols={post.frontmatter.featured ? 2 : 1}
              rows={post.frontmatter.featured ? 2 : 1}
            >
              <Link to={post.fields.slug}>
                {post.frontmatter.image ? (
                  <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                ) : (
                  <span />
                )}
                <GridListTileBar
                  title={post.frontmatter.title}
                  subtitle={<span>{post.frontmatter.date}</span>}
                />
              </Link>
            </GridListTile>
          ))}
      </GridList>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const StyledBlogRoll = withStyles(styles)(BlogRoll)

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollGridListQuery {
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
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <StyledBlogRoll data={data} count={count} />}
  />
)
