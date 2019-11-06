module.exports = {
  plugins: [
    {
      resolve: '@westegg/gatsby-theme-casper',
      options: {
        siteMetadata: {
          title: 'Westegg Casper',
          description: 'The mountainous publishing platform',
          coverImage: 'img/ca-blog-cover.jpg',
          logo: 'avatars/ghost.png',
          lang: 'en',
          siteUrl: 'https://westegg.xyz',
          facebook: 'https://www.facebook.com/ghost',
          twitter: 'https://twitter.com/tryghost',
          showSubscribe: true,
          mailchimpAction:
            'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
          mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
          mailchimpEmailFieldName: 'MERGE0',
          googleSiteVerification: 'GoogleCode',
          footer: 'lives in Westegg',
          footerLink: 'https://westegg.xyz/',
          footerShowRss: false,
          postsPerPage: 6
        }
      }
    }
  ]
}
