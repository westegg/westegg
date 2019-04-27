const semver = require("semver")
const {
  hasDependencies,
  hasDevDependencies,
  pkg,
  stripSemverRanges
} = require("./utils")

const gaBase = {
  resolve: "gatsby-plugin-google-analytics",
  options: {
    anonymize: true
  }
}

module.exports = ({ analytics, sitemap } = {}) => {
  const plugins = [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["@westegg/gatsby-theme-core"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `src/data`,
        ignore: ["**/.*"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `src/images`
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `src/pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    }
  ]

  if (typeof sitemap === "undefined" || sitemap === true) {
    plugins.push("gatsby-plugin-sitemap")
  }

  if (typeof analytics === "string") {
    plugins.push({
      ...gaBase,
      options: {
        ...gaBase.options,
        trackingId: analytics
      }
    })
  }

  if (
    typeof analytics === "object" &&
    typeof analytics.trackingId === "string"
  ) {
    plugins.push({
      ...gaBase,
      options: {
        ...gaBase.options,
        ...analytics
      }
    })
  }

  if (hasDevDependencies("typescript")) {
    plugins.push("gatsby-plugin-typescript")
  }

  if (
    hasDependencies("@emotion/core") &&
    semver.satisfies(
      stripSemverRanges(pkg.dependencies["@emotion/core"]),
      ">= 10.0.0"
    )
  ) {
    plugins.push("gatsby-plugin-emotion")
  }

  return {
    plugins
  }
}
