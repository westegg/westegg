import { Link } from "gatsby"
import React from "react"

export const Tags = props =>
  props.tags.map(tag => (
    <span>
      <Link
        className={"link has-text-white-ter"}
        to={`/tags/${tag.toLowerCase()}`}
      >
        {tag}
      </Link>{" "}
    </span>
  ))
