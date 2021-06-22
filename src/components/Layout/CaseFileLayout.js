/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Sidebar from "../Sidebar"

const CaseFileLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      categories: allContentfulCaseFile(
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

  const alteredItems = data.categories.group[0]
  const alteredWorldEvents = data.categories.group[1]
  const objectsOfPower = data.categories.group[2]
  const categories = [objectsOfPower, alteredWorldEvents, alteredItems]

  return (
    <div id="wrapper">
      <Header />
      <div className="flex">
        <Sidebar
          title="Case Files"
          contentType="case-files"
          categories={categories}
        />
        {children}
      </div>
    </div>
  )
}

CaseFileLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CaseFileLayout
