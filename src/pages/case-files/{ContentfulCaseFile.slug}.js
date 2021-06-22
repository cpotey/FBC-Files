import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Breadcrumbs from "../../components/Breadcrumbs"
import DocumentFields from "../../components/Document/DocumentFields"
import Footer from "../../components/Footer"

class CaseFileTemplate extends React.Component {
  render() {
    const caseFileData = this.props.data.post

    return (
      <main id="document">
        <Helmet>
          <title>{caseFileData.documentTitle} | Case Files | FBC Files</title>
          <meta
            name="description"
            content={`${caseFileData.documentTitle} is a Case Files file on FBC Files.`}
          />
        </Helmet>

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
