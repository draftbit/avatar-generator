module.exports = {
  siteMetadata: {
    title:
      'Personas by Draftbit | A playful avatar generator for the modern age.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'persona-avatar-generator-draftbit',
        short_name: 'avatar-generator',
        start_url: '/',
        background_color: '#5a45ff',
        theme_color: '#5a45ff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-96165051-4',
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /avatars/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        typeName: 'Config',
        path: `./src/data/`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
