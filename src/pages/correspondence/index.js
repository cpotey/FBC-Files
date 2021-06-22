import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Breadcrumbs from "../../components/Breadcrumbs"
import Footer from "../../components/Footer"

class CorrespondenceTemplate extends React.Component {
  render() {
    const pageTitle = "Correspondence"

    return (
      <main id="document">
        <Helmet>
          <title>{pageTitle} | FBC Files</title>
          <meta
            name="description"
            content="Letters sent recieved by the Bureau, on an official and non-official
            basis."
          />
        </Helmet>
        <Breadcrumbs currentPage={pageTitle} />
        <StaticImage
          className="category-image"
          src="../../assets/images/correspondence.png"
          placeholder="none"
          alt="Correspondence icon"
          loading="eager"
        />
        <h1 className="category-title">{pageTitle}</h1>
        <div className="content">
          <p>
            Letters sent recieved by the Bureau, on an official and non-official
            basis.
          </p>
        </div>
        <Link className="btn" to="agent-death-notification">
          View the files
        </Link>
        <Footer />
      </main>
    )
  }
}

export default CorrespondenceTemplate
