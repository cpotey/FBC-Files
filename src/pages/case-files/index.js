import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Breadcrumbs from "../../components/Breadcrumbs"
import Footer from "../../components/Footer"

class CaseFileTemplate extends React.Component {
  render() {
    const pageTitle = "Case Files"

    return (
      <main id="document">
        <Helmet>
          <title>{pageTitle} | FBC Files</title>
          <meta
            name="description"
            content="Records on Altered World Events, Objects of Powers and Altered
            Items."
          />
        </Helmet>
        <Breadcrumbs currentPage={pageTitle} />

        <StaticImage
          className="category-image"
          src="../../assets/images/case-files.png"
          placeholder="none"
          alt="Case Files icon"
          loading="eager"
        />
        <h1 className="category-title">{pageTitle}</h1>
        <div className="content">
          <p>
            Records on Altered World Events, Objects of Powers and Altered
            Items.
          </p>
        </div>
        <Link className="btn" to="ashtray-and-cigarette">
          View the files
        </Link>
        <Footer />
      </main>
    )
  }
}

export default CaseFileTemplate
