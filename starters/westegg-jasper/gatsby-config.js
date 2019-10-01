module.exports = {
  plugins: [
    {
      resolve: '@westegg/gatsby-theme-jasper',
      options: {
        siteMetadata: {
          title: 'Westegg Jasper',
          description: 'Cash App The mountainous publishing platform',
          coverImage: 'img/2019-09-19-cashapp-insta.jpg',
          logo: 'avatars/cashapp.png',
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
