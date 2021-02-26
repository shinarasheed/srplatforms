module.exports = {
  siteMetadata: {
    title: `srplatforms`,
    description: `Foremost Indigenous Company with Expertise in Marine/Offshore Support Services to the oil & Gas Industry Using Innovative service Delivery`,
    author: `gravitytech`,
    keywords: `
    SR PLatforms, SR, SR Platform,SR Platform Limited, Oil and Gas, oil and gas companies in Nigeria,oil and gas companies in Lagos, Nigeria,oil and gas companies in lagos hiring, nigeria oil & gas companies, lagos oil & gas companies,vessel security, oil and gas security, marine security, marine vessels, vessel protection, oil and gas security company, vessels security company, marine escorts,
    southwest oil & gas companies, oil and gas safety bill, Marine,  vessels , offshore, marine vessels , offshore vessels , marine operations , drilling and production , upstream , oil servicing , petroleum , offshore support, fsiv , psv, ahts , Lhts, csv, crew boats , tug boats, surfer boats,  security boats ,security vessels , platform supports , anchor handling`,
    twitterusername: "iamrasheedshina",
    image: "/static/bg5.png",
    siteUrl: "https://www.srplatforms.com/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SRLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
