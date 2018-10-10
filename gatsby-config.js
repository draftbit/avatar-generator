module.exports = {
  siteMetadata: {
    title: 'Persona Avatar Generator by Draftbit',
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
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-96165051-4',
        respectDNT: true,
      },
    },
  ],
}
