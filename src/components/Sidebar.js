import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import FileIcon from "../assets/images/icons/file-text.svg"
import CloseIcon from "../assets/images/icons/close.svg"

function Sidebar(props) {
  const categories = props.categories

  return (
    <>
      <div id="sidebar">
        <div className="sidebar-wrapper">
          <div className="nav">
            <div className="gradient"></div>
            <ul className="categories">
              {categories.map(category => (
                <li key={category.fieldValue}>
                  <h3>{category.fieldValue}</h3>
                  <ul>
                    {category.edges.map((post, postIndex) => (
                      <li key={postIndex}>
                        <Link
                          to={`/${props.contentType}/${post.node.slug}`}
                          className="btn"
                          activeClassName="active"
                        >
                          {post.node.documentTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="mobile-sidebar-wrapper">
        <Menu
          outerContainerId={"wrapper"}
          left
          id={"mobile-sidebar"}
          burgerButtonClassName={"sidebar-burger-button"}
          crossButtonClassName={"close-icon"}
          customCrossIcon={<img src={CloseIcon} alt="Close Menu" />}
          customBurgerIcon={<img src={FileIcon} alt="FileIcon" />}
          bodyClassName={"active-menu"}
          disableAutoFocus
        >
          <ul className="categories">
            {categories.map(category => (
              <li key={category.fieldValue}>
                <h3>{category.fieldValue}</h3>
                <ul>
                  {category.edges.map((post, postIndex) => (
                    <li key={postIndex}>
                      <Link
                        to={`/${props.contentType}/${post.node.slug}`}
                        className="btn"
                        activeClassName="active"
                      >
                        {post.node.documentTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Menu>
      </div>
    </>
  )
}
export default Sidebar
