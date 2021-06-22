import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Breadcrumbs from "../../components/Breadcrumbs"
import Footer from "../../components/Footer"
import SeoHelmet from "../../components/SeoHelmet"

class CaseFileTemplate extends React.Component {
  render() {
    const pageTitle = "Case Files"
    const title = `${pageTitle} | FBC Files`
    const description =
      "Records on Altered World Events, Objects of Powers and Altered Items."

    return (
      <main id="document">
        <Helmet>
          <title>{pageTitle} | FBC Files</title>
        </Helmet>
        <SeoHelmet metaTitle={title} metaDesc={description} />
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
