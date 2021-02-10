module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolev: "gatsby-source-fileSystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolev: "gatsby-source-fileSystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolev: "gatsby-source-fileSystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gastby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        gatsbyRemarkPligins: [
          {
            resolve: `gastby-remark-images`,
            options: { maxWidth: 1200 },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
