# @westegg/gatsby-theme-core

`@westegg/gatsby-theme-core` has the core plugins and configuration used by other Gatsby Themes in [Westegg](https://westegg.xyz/).

This Gatsby Theme lives in [Westegg](https://westegg.xyz/).

![Westegg](https://github.com/westegg/westegg/raw/master/docs/static/img/logos/westegg-slogan.png)

Try out the [demo](http://core.westegg.xyz)

Copy the starter from the [repo](http://repo.westegg.xyz/tree/master/starters/westegg-core)

## Getting Started

```
git clone git@github.com:westegg/westegg.git
cp -r westegg/starters/westegg-core new-site
cd new-site
yarn install
yarn build
```

## Options

Options (defaults shown) can be set in `gatsby-config.js` as follows.

```
module.exports = {
  plugins: {
    resolve: "@westegg/gatsby-theme-core",
    options: {
      mdx: false,
      mdxLayouts: {}
    }
  },
  siteMetadata: {
    title: 'Westegg Core'
  }
}

```
