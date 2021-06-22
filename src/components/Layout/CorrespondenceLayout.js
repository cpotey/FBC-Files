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

const CorrespondenceLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      categories: allContentfulCorrespondence(
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
  const deadLetters = data.categories.group[0]
  const nonOfficial = data.categories.group[1]
  const official = data.categories.group[2]
  const categories = [official, nonOfficial, deadLetters]

  return (
    <div id="wrapper">
      <Header />
      <div className="flex">
        <Sidebar
          title="Correspondence"
          contentType="correspondence"
          categories={categories}
        />
        {children}
      </div>
    </div>
  )
}

CorrespondenceLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CorrespondenceLayout
