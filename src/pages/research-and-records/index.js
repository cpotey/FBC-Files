import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Breadcrumbs from "../../components/Breadcrumbs"
import Footer from "../../components/Footer"

class ResearchAndRecordsTemplate extends React.Component {
  render() {
    const pageTitle = "Research & Records"

    return (
      <main id="document">
        <Helmet>
          <title>{pageTitle} | FBC Files</title>
          <meta
            name="description"
            content="Research files on the Hiss, amongst other findings, and reports of
          FBC investigations."
          />
        </Helmet>
        <Breadcrumbs currentPage={pageTitle} />
        <StaticImage
          className="category-image"
          src="../../assets/images/research-and-records.png"
          placeholder="none"
          alt="Research & Records icon"
          loading="eager"
        />
        <h1 className="category-title">{pageTitle}</h1>
        <div className="content">
          <p>
            Research files on the Hiss, amongst other findings, and reports of
            FBC investigations.
          </p>
        </div>
        <Link className="btn" to="hiss-agent">
          View the files
        </Link>
        <Footer />
      </main>
    )
  }
}

export default ResearchAndRecordsTemplate
