# @westegg/gatsby-theme-digital-garden

This theme extends [@westegg/gatsby-theme-digital-garden](https://www.npmjs.com/package/@westegg/gatsby-theme-digital-garden) using React components from the [Misk-Web](https://cashapp.github.io/misk-web/).

It serves as the theme for the [official Misk-Web docs site](https://cashapp.github.io/misk-web/).

This Gatsby Theme lives in [Westegg](https://westegg.xyz/).

![Westegg](https://github.com/westegg/westegg/blob/master/docs/static/img/logos/westegg-slogan.png)

Try out the [demo](http://misk.westegg.xyz)

Copy the starter from the [repo](http://repo.westegg.xyz/tree/master/starters/westegg-misk)

## Getting Started

```
git clone git@github.com:westegg/westegg.git
cp -r westegg/starters/westegg-misk new-site
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
          href: '/',
          label: 'Westegg Misk'
        },
        links: [
          {
            href: '/notes',
            label: 'Themes',
            category: 'Primary'
          }
        ]
      },
      mdx: true,
      mdxLayouts,
      notes: 'notes',
      notesPath: '/notes',
      posts,
      postsPath,
      projects,
      projectsPath
    }
  },
  siteMetadata: {
    title: "Westegg Misk"
  }
}

```
