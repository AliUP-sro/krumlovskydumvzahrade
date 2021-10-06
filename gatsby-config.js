module.exports = {
  siteMetadata: {
    siteUrl: 'https://krumlovskydumvzahrade.cz',
    title: `Krumlovský dům v zahradě`,
    description: `Krumlovský dům v zahradě. Ubytování v Krumlovské zahradě se může stát skvělým ýchozím bodem pro Vaše zážitky.`,
    author: `AliUP s.r.o. <aliup.cz>`,
    keywords: 'ubytování,krumlov,dum,v,zahrade,zážitek,krumlovsky'
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
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '572734367294803',
    //   },
    // }
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
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap'
  ],
}
