# Westegg Gatsby Theme Core

This theme installs some core Gatsby plugins used by many sites. This resolves the problem of installing and updating many packages in each Gatsby project. This package installs and adds the following packages to your `gatsby-config.js`:

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-copy-linked-files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/)
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)
- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

## Installation and Usage

To install this theme run the command below.

- Yarn: `yarn add @westegg/gatsby-theme-core`
- NPM: `npm i @westegg/gatsby-theme-core`

Once installed, your `gatsby-config.js` will need to be updated to use the theme. This can be done by adding the following code.

```javascript
// gatsby-config.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: '@westegg/gatsby-theme-core',
      options: {
        analytics: 'tracking-id' // Object or string
        sitemap: true // Boolean
      }
  ],
  ...
}
```

Gatsby will then merge the plugins defined in the package's gatsby-config onto yours. As a result, you do not need to install or manually add any of the packages listed above to your project.

### Gatsby Source Filesystem

Out of the box, the theme will connect `src/data` and `src/images` to GraphQL. The theme will create these folders automatically if they do not exist. Any files beginning with a `.` in the data folder will be ignored. Since `gatsby-source-filesystem` is installed as a dependency of the theme, you may also add more folders in your `gatsby-config.js` without needing to manually install the package separately.

## API

This theme exposes several options for configuring its behavior. These can be configured within the `options` object when theme is resolved as shown in the installation instructions above.

### Google analytics

- **Option key:** `analytics`
- **Type:** `String` or `Object`
- **Default:** `undefined`

If enabled, Gatsby will add Google Analytics tracking configuration to your pages during production builds. It is off by default. The configuration accepts a string or an object to enable Google Analytics tracking. The configuration object accepts all of the keys listed in the [Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)

- String: Must be your Google Analytics tracking id. Sets the `anonymize` option to true.
- Object: Pass in the same options listed in the plugin docs. Anonymize is defaulted to true, but can be overriden by your configuration object.

### Sitemap Generation

- **Option key:** `sitemap`
- **Type:** `boolean`
- **Default:** `true`

If enabled, Gatsby will generate a sitemap for your site during production builds. **Note**: This requires a `siteUrl` in your `siteMetadata` if enabled. Failing to set this property in your `gatsby-config.js` will result in a build error.

## Conditionally added plugins

Gatsby has a number of plugins which may be added dependening on other dependencies you use in your project. For example `gatsby-plugin-emotion` will handle the Babel presets to use Emotion's css prop without needing to use the JSX pragma at the top of each file. The following plugins will be added automatically if you have the corresponding dependency installed.

The installed column indicates whether the config checks for the package in `dependencies`, `devDependencies` or both.

| Dependency    | Installed     | Version Reqs | Gatsby Plugin            |
| ------------- | ------------- | ------------ | ------------------------ |
| typescript    | devDependency |              | gatsby-plugin-typescript |
| @emotion/core | dependency    | >=10.0.0     | gatsby-plugin-emotion    |
