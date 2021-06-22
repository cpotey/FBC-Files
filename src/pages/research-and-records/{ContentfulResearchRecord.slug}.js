import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Breadcrumbs from "../../components/Breadcrumbs"
import DocumentFields from "../../components/Document/DocumentFields"
import Footer from "../../components/Footer"

class ResearchAndRecordsTemplate extends React.Component {
  render() {
    const researchRecordData = this.props.data.post

    return (
      <main id="document">
        <Helmet>
          <title>
            {researchRecordData.documentTitle} | Research & Records | FBC Files
          </title>
          <meta
            name="description"
            content={`${researchRecordData.documentTitle} is a Research & Records file on FBC Files.`}
          />
        </Helmet>
        <Breadcrumbs currentPage="Research & Records" />
        <DocumentFields data={researchRecordData} />
        <Footer />
      </main>
    )
  }
}

export default ResearchAndRecordsTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    post: contentfulResearchRecord(slug: { eq: $slug }) {
      slug
      documentTitle
      documentText {
        raw
      }
      image {
        gatsbyImageData
      }
      compiledBy
      byOrderOf
      employeeName
      employeePosition
      reportType
      dlc
    }
  }
`
