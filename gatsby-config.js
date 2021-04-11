module.exports = {
  siteMetadata: {
    title: `SRPLATFORMS`,
    description: `Foremost Indigenous Company with Expertise in Marine/Offshore Support Services to the oil & Gas Industry Using Innovative service Delivery`,
    author: `gravitytech`,
    keywords: `
    SR PLatforms, SR, SR Platform, SR Platform Limited, Offshore Supply Vessels, Offshore Support, Maritime Security, Maritime Security Nigeria, Maritime security & logistics company, Maritime Security company, Security Vessels in Nigeria, Marine Security, Security Vessel, Marine Excort Vessels, Private Security Company, Private Marine Security Company, Marine Security Comapny in Nigeria, Marine Security Vessels, Offshore Security, Offshore Security Vessels, Offshore Security Vessels, Marine Security Company, Oil and Gas, oil and gas companies in Nigeria,oil and gas companies in Lagos, Nigeria,oil and gas companies in lagos hiring, nigeria oil & gas companies, lagos oil & gas companies,vessel security, oil and gas security, marine security, marine vessels, vessel protection, oil and gas security company, vessels security company, marine escorts,
    southwest oil & gas companies, oil and gas safety bill, Marine,  vessels , offshore, marine vessels , offshore vessels , marine operations , drilling and production , upstream , oil servicing , petroleum , offshore support, fsiv , psv, ahts , Lhts, csv, crew boats , tug boats, surfer boats,  security boats ,security vessels , platform supports , anchor handling`,
    twitterusername: "iamrasheedshina",
    image: "/static/bg5.png",
    siteUrl: "https://www.srplatforms.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,

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
        name: `srplatforms`,
        short_name: `srplatforms`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SRLogocroped.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
