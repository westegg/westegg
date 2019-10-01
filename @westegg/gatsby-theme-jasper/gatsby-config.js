module.exports = options => {
  const defaultSiteMetadata = {
    title: 'Westegg Jasper',
    description: 'The mountainous publishing platform',
    coverImage: 'img/blog-cover.jpg',
    logo: 'img/ghost-logo.png',
    lang: 'en',
    siteUrl: 'https://gatsby-casper.netlify.com', // full path to blog - no ending slash
    facebook: 'https://www.facebook.com/ghost',
    twitter: 'https://twitter.com/tryghost',
    showSubscribe: false, // subscribe button in site nav and home page
    mailchimpAction: '', // 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
    mailchimpName: '', // 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
    mailchimpEmailFieldName: '', // 'MERGE0',
    googleSiteVerification: '', // 'GoogleCode',
    footer: 'is based on National Parks of Canada',
    footerLink: '', // "https://westegg.xyz",
    footerShowRss: true,
    postsPerPage: 6
  }

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
    siteMetadata
  } = options

  console.log('westegg jasper')

  const plugins = ['gatsby-theme-casper']

  return {
    plugins,
    siteMetadata: { ...defaultSiteMetadata, ...siteMetadata }
  }
}
