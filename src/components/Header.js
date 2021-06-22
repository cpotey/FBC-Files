import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import MenuIcon from "../assets/images/icons/menu.svg"
import CloseIcon from "../assets/images/icons/close.svg"

function Header() {
  return (
    <header id="header">
      <Link className="home" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
        >
          <path
            d="M1.114 25.966C1.381 27.1 199.62 374.133 200 374.133c.381 0 198.619-347.033 198.886-348.167.073-.31-30.405-.366-198.886-.366-168.422 0-198.959.056-198.886.366"
            fill-rule="evenodd"
            fill="#fff"
          />
        </svg>
        FBC FILES
      </Link>
      <nav id="menu">
        <Link to="/research-and-records" activeClassName="active">
          Research & Records
        </Link>
        <Link to="/case-files" activeClassName="active">
          Case Files
        </Link>
        <Link to="/correspondence" activeClassName="active">
          Correspondence
        </Link>
      </nav>
      <Menu
        outerContainerId={"wrapper"}
        right
        id={"mobile-menu"}
        burgerButtonClassName={"burger-button"}
        crossButtonClassName={"close-icon"}
        customCrossIcon={<img src={CloseIcon} alt="Close Menu" />}
        customBurgerIcon={<img src={MenuIcon} alt="Close Menu" />}
        bodyClassName={"active-menu"}
        disableAutoFocus
      >
        <Link
          to="/research-and-records"
          activeClassName="active"
          partiallyActive={true}
        >
          Research & Records
        </Link>
        <Link to="/case-files" activeClassName="active" partiallyActive={true}>
          Case Files
        </Link>
        <Link
          to="/correspondence"
          activeClassName="active"
          partiallyActive={true}
        >
          Correspondence
        </Link>
      </Menu>
    </header>
  )
}
export default Header
