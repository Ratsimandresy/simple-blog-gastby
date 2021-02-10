module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolev: "gatsby-source-fileSystem",
      option: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolev: "gatsby-source-fileSystem",
      option: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolev: "gatsby-source-fileSystem",
      option: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
