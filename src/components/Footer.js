import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer id="footer">
      <span>
        Built by{" "}
        <a
          href="https://connorpote.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connor Pote
        </a>{" "}
        | <Link to="/about">About</Link>
      </span>
    </footer>
  )
}
export default Footer
