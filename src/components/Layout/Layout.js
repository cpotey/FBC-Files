/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { globalHistory } from "@reach/router"
import { Helmet } from "react-helmet"

import Header from "../Header"
import Footer from "../Footer"

import CaseFileLayout from "./CaseFileLayout"
import CorrespondenceLayout from "./CorrespondenceLayout"
import ResearchLayout from "./ResearchLayout"

const Layout = ({ children }) => {
  const path = globalHistory.location.pathname
  if (path.includes("/case-files")) {
    return <CaseFileLayout>{children}</CaseFileLayout>
  } else if (path.includes("/research-and-records")) {
    return <ResearchLayout>{children}</ResearchLayout>
  } else if (path.includes("/correspondence")) {
    return <CorrespondenceLayout>{children}</CorrespondenceLayout>
  }

  return (
    <div id="wrapper">
      <Helmet>
        <html lang="en-GB" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="FBC Files" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="FBC Files collates the world-building collectibles and lore found within the video-game, Control."
        />
        <meta
          property="og:image"
          content="https://fbcfiles.netlify.app/opengraph.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@cpotey" />

        <meta property="og:title" content="FBC Files - Control Collectibles" />
        <meta
          property="og:description"
          content="FBC Files collates the world-building collectibles and lore found
          within the video-game, Control."
        />
        <meta name="twitter:title" content="FBC Files - Control Collectibles" />
        <meta
          name="twitter:description"
          content="FBC Files collates the world-building collectibles and lore found
          within the video-game, Control."
        />
        <meta
          name="twitter:image"
          content="https://fbcfiles.netlify.app/opengraph.png"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
