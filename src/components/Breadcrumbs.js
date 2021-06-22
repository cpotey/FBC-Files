import React from "react"
import { Link } from "gatsby"

function Breadcrumbs(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {props.currentPage}
        </li>
      </ol>
    </nav>
  )
}
export default Breadcrumbs
