/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Personal Blog of Bill Heberer',
    author: 'Bill Heberer',
    bio: 'Software Engineer building customer experiences at ',
    description:
      'Personal blog of Bill Heberer. Software Engineer at GoDaddy and React enthusiast.',
    employer: 'GoDaddy',
    siteURL: 'https://www.billheberer.com',
    employerURL: 'https://www.godaddy.com/',
    navData: [
      {
        url: 'mailto:billyheb@gmail.com',
        label: 'email',
        iconLabel: 'mail'
      },
      {
        url: 'https://www.linkedin.com/in/william-heberer-umd/',
        label: 'LinkedIn Profile',
        iconLabel: 'linkedin'
      },
      {
        url: 'https://github.com/bheberer',
        label: 'Github Profile',
        iconLabel: 'github'
      },
      {
        url: 'https://twitter.com/b_hebs',
        label: 'Twitter Profile',
        iconLabel: 'twitter'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-prismjs`
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: 'language-',
          //     inlineCodeMarker: '@',
          //     noInlineHighlight: false
          //   }
          // }
        ]
      }
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`)
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
