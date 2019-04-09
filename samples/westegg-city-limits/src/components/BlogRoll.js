import React from "react"
import PostCard from "./PostCard"
// import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="PostSection">
        {/* {title && <h2 className="PostSection--Title">{title}</h2>} */}
        {!!posts.length && (
          <div className="PostSection--Grid">
            {posts.map(({ node: post }, index) => (
              <div>
                {console.log(post)}
                <PostCard key={post.frontmatter.title + index} {...post} />
              </div>
            ))}
          </div>
        )}
        {/* {showLoadMore && visiblePosts.length < posts.length && (
          <div className="taCenter">
            <button className="button" onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )} */}
      </div>
      // <GridList cellHeight={200} cols={2} spacing={1}>
      //   {posts &&
      //     posts.map(({ node: post }) => (
      //       <GridListTile
      //         key={`${post.frontmatter.title}${post.frontmatter.date}`}
      //         cols={post.frontmatter.featured ? 2 : 1}
      //         rows={post.frontmatter.featured ? 2 : 1}
      //       >
      //         <Link to={post.fields.slug}>
      //           {post.frontmatter.image ? (
      //             <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      //           ) : (
      //             <span />
      //           )}
      //           <GridListTileBar
      //             title={post.frontmatter.title}
      //             subtitle={<span>{post.frontmatter.date}</span>}
      //           />
      //         </Link>
      //       </GridListTile>
      //     ))}
      // </GridList>
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

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
