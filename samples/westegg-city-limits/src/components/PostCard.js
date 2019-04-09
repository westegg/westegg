import React from "react"
import { Link } from "gatsby"

// import Img from "gatsby-image"
import Image from "./Image"
import "./PostCard.css"

const PostCard = ({
  excerpt,
  frontmatter,
  fields,
  categories = ["test", "category"],
  className = "",
  ...props
}) => (
  <div>
    {frontmatter && fields ? (
      <Link to={fields.slug} className={`PostCard ${className}`}>
        {console.log(props)}
        {frontmatter.image && (
          <div className="PostCard--Image relative">
            <Image background src={frontmatter.image.childImageSharp.src} alt={frontmatter.sl} />
          </div>
        )}
        <div className="PostCard--Content">
          {frontmatter.title && (
            <h3 className="PostCard--Title">{frontmatter.title}</h3>
          )}
          <div className="PostCard--Category">
            {categories && categories.map(cat => cat.category).join(", ")}
          </div>
          {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
        </div>
      </Link>
    ) : (
      <span />
    )}
  </div>
)

export default PostCard

// posts.map(({ node: post }) => (
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
