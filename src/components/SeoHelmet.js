import React from "react"
import { Helmet } from "react-helmet"

function SeoHelmet(props) {
  const metaTitle = props.metaTitle || "FBC Files (for Control Collectibles)"
  const metaDesc =
    props.metaDesc ||
    "FBC Files collates the world-building collectibles and lore found within the video-game, Control."

  return (
    <Helmet>
      <html lang="en-GB" />
      <meta name="description" content={metaDesc} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="FBC Files" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://fbcfiles.netlify.app/opengraph.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@cpotey" />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta
        name="twitter:image"
        content="https://fbcfiles.netlify.app/opengraph.png"
      />
    </Helmet>
  )
}
export default SeoHelmet
