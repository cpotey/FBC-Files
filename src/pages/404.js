import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const NotFoundPage = () => {
  return (
    <main id="document">
      <Helmet>
        <title>Page not found | FBC Files</title>
        <meta name="description" content="Sorry, that page doesn't exist" />
      </Helmet>

      <div className="content">
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for. .
        </p>
      </div>
      <Link className="btn" to="/">
        Go home
      </Link>
    </main>
  )
}

export default NotFoundPage
