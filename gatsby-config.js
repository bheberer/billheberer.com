/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Bill Heberer',
    description: 'Software Engineer building customer experiences at ',
    employer: 'GoDaddy',
    employerURL: 'https://www.godaddy.com/',
    linkedinURL: 'https://www.linkedin.com/in/william-heberer-umd/',
    githubURL: 'https://github.com/bheberer',
    twitterURL: 'https://twitter.com/b_hebs'
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
