# @westegg/gatsby-theme-digital-garden

This theme extends [johno/digital-garden](https://github.com/johno/digital-garden) with further styling and works well with [@westegg/gatsby-theme-core](https://www.npmjs.com/package/@westegg/gatsby-theme-core).

This Gatsby Theme lives in [Westegg](https://westegg.xyz/).

![Westegg](https://github.com/westegg/westegg/raw/master/docs/static/img/logos/westegg-slogan.png)

Try out the [demo](http://digitalgarden.westegg.xyz)

Copy the starter from the [repo](http://repo.westegg.xyz/tree/master/starters/westegg-digital-garden)

## Getting Started

```
git clone git@github.com:westegg/westegg.git
cp -r westegg/starters/westegg-digital-garden new-site
cd new-site
yarn install
yarn build
```

## Options

Options (defaults shown) can be set in `gatsby-config.js` as follows.

```
module.exports: {
  plugins: {
    resolve: "@westegg/gatsby-theme-digital-garden",
    options: {
      header: {
        home: {
          href: "/",
          label: "Westegg Digital Garden"
        },
        links: [
          {
            href: "/notes",
            label: "Themes"
          }
        ]
      },
      mdx: true,
      mdxLayouts: {
        default: require.resolve("./src/components/layout")
      },
      notes: "notes",
      notesPath: "/notes",
      posts,
      postsPath,
      projects,
      projectsPath
    }
  },
  siteMetadata: {
    title: 'Westegg Digital Garden'
  }
}

```
