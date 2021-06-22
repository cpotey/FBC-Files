/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../assets/scss/main.scss"

import Header from "../Header"
import Sidebar from "../Sidebar"

const ResearchLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      categories: allContentfulResearchRecord(
        sort: { fields: documentTitle, order: ASC }
      ) {
        group(field: category) {
          edges {
            node {
              documentTitle
              slug
            }
          }
          fieldValue
        }
      }
    }
  `)
  const astralResearch = data.categories.group[0]
  const hissResearch = data.categories.group[1]
  const reports = data.categories.group[2]
  const research = data.categories.group[3]
  const categories = [hissResearch, reports, research, astralResearch]

  return (
    <div id="wrapper">
      <Header />
      <div className="flex">
        <Sidebar
          title="Research & Records"
          contentType="research-and-records"
          categories={categories}
        />
        {children}
      </div>
    </div>
  )
}

ResearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ResearchLayout
