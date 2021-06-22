import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Breadcrumbs from "../../components/Breadcrumbs"
import DocumentFields from "../../components/Document/DocumentFields"
import Footer from "../../components/Footer"
import SeoHelmet from "../../components/SeoHelmet"

class CaseFileTemplate extends React.Component {
  render() {
    const caseFileData = this.props.data.post
    const title = `${caseFileData.documentTitle} | Case Files | FBC Files`
    const description = `${caseFileData.documentTitle} is a case file on FBC Files.`

    return (
      <main id="document">
        <Helmet>
          <title>{caseFileData.documentTitle} | Case Files | FBC Files</title>
        </Helmet>
        <SeoHelmet metaTitle={title} metaDesc={description} />

        <Breadcrumbs currentPage="Case Files" />
        <DocumentFields data={caseFileData} />
        <Footer />
      </main>
    )
  }
}

export default CaseFileTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    post: contentfulCaseFile(slug: { eq: $slug }) {
      slug
      documentTitle
      documentText {
        raw
      }
      image {
        gatsbyImageData
      }
      documentId
      acquisitionDate
      containmentLocation
      eventDate
      eventLocation
      dlc
    }
  }
`
