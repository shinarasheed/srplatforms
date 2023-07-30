import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        keywords: keywords
        author
        siteUrl
        image
        twitterusername
      }
    }
  }
`

const SeoComponent = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteDesc, keywords, siteTitle, siteUrl, image, twitterusername } =
    site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      {/* facebook card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content={400} />
      <meta property="og:image:height" content={300} />
      {/* twitter card */}
      <meta name="twittercard" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterusername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SeoComponent
