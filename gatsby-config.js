module.exports = {
  siteMetadata: {
    title: `Krumlovský dům v zahradě`,
    description: `Page description`,
    author: `AliUP s.r.o. <aliup.cz>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Krumlovský dům v zahradě`,
    //     short_name: `kdvz`,
    //     start_url: `/`,
    //     background_color: `#FFFFFF`,
    //     theme_color: `#FFFFFF`,
    //     display: `minimal-ui`,
    //     //icon: ``,
    //   },
    // },
    `gatsby-plugin-smoothscroll`,
  ],
}
