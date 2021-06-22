import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Breadcrumbs from "../../components/Breadcrumbs"
import DocumentFields from "../../components/Document/DocumentFields"
import Footer from "../../components/Footer"
import SeoHelmet from "../../components/SeoHelmet"

class CorrespondenceTemplate extends React.Component {
  render() {
    const correspondenceData = this.props.data.post
    const title = `${correspondenceData.documentTitle} | Correspondence | FBC Files`
    const description = `${correspondenceData.documentTitle} is a Correspondence file on FBC Files.`

    return (
      <main id="document">
        <Helmet>
          <title>
            {correspondenceData.documentTitle} | Correspondence | FBC Files
          </title>
        </Helmet>
        <SeoHelmet metaTitle={title} metaDesc={description} />
        <Breadcrumbs currentPage="Correspondence" />
        <DocumentFields data={correspondenceData} />
        <Footer />
      </main>
    )
  }
}

export default CorrespondenceTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    post: contentfulCorrespondence(slug: { eq: $slug }) {
      slug
      documentTitle
      documentText {
        raw
      }
      image {
        gatsbyImageData
      }
      to
      from
      subject
      dlc
    }
  }
`
