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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
