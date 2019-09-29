# @westegg/gatsby-theme-jasper

This theme extends [scttcper/gatsby-theme-casper](https://github.com/scttcper/gatsby-theme-casper) with further styling and works well with [@westegg/gatsby-theme-core](https://www.npmjs.com/package/@westegg/gatsby-theme-core).

This Gatsby Theme lives in [Westegg](https://westegg.xyz/).

![Westegg](https://github.com/westegg/westegg/blob/master/docs/static/img/logos/westegg-slogan.png)

Try out the [demo](http://jasper.westegg.xyz)

Copy the starter from the [repo](http://repo.westegg.xyz/tree/master/starters/westegg-jasper)

## Getting Started

```
git clone git@github.com:westegg/westegg.git
cp -r westegg/starters/westegg-jasper new-site
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
          label: "Westegg Jasper"
        },
        links: [
          {
            href: "/notes",
            label: "Themes"
          }
        ]
      },
    }
  },
  siteMetadata: {
    title: "Westegg Jasper",
    description: "The mountainous publishing platform",
    coverImage: "img/blog-cover.jpg",
    logo: "img/ghost-logo.png",
    lang: "en",
    siteUrl: "https://westegg.xyz",
    facebook: "https://www.facebook.com/ghost",
    twitter: "https://twitter.com/tryghost",
    showSubscribe: true,
    mailchimpAction:
      "https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75",
    mailchimpName: "b_a89b6987ac248c81b0b7f3a0f_7d777b7d75",
    mailchimpEmailFieldName: "MERGE0",
    googleSiteVerification: "GoogleCode",
    footer: "is based on National Parks of Canada",
    postsPerPage: 6
  }
}

```
