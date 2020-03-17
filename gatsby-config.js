require('dotenv').config()
// import config from './config';

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '63347a0b858573eb4b2bc0a8446116',
      },
    },
  ],
}
