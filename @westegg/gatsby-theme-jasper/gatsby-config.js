module.exports = options => {
  const {
    header = {
      home: {
        href: '/',
        label: 'Westegg Jasper'
      },
      links: [
        {
          href: '/notes',
          label: 'Themes'
        }
      ]
    },
    siteMetadata = {
      title: 'Westegg Jasper',
      description: 'The mountainous publishing platform',
      coverImage: 'img/blog-cover.jpg',
      logo: 'img/ghost-logo.png',
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
      footer: 'is based on National Parks of Canada',
      footerLink: 'https://westegg.xyz',
      footerShowRss: false,
      postsPerPage: 6
    }
  } = options

  const plugins = ['gatsby-theme-casper']

  return {
    plugins,
    siteMetadata
  }
}
