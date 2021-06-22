import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main id="page">
      <Helmet>
        <title>Home | FBC Files</title>
        <meta
          name="description"
          content="FBC Files collates the world-building collectibles and lore found
          within the video-game, Control."
        />
      </Helmet>

      <div className="content">
        <h1 className="home-welcome">Welcome, Agent.</h1>
        <p>
          FBC Files collates the incredible world-building collectibles found
          within the video-game, Control. Click through to discover more, and
          find out all about the Federal Bureau of Control.
        </p>
      </div>

      <div className="tiles">
        <Link to="/research-and-records" className="tile">
          <span className="title">Research & Records</span>
          <div className="tile-img-wrapper">
            <StaticImage
              src="../assets/images/research-and-records.png"
              placeholder="none"
              alt="Research & Records icon"
              loading="eager"
            />
          </div>
        </Link>
        <Link to="/case-files" className="tile">
          <span className="title">Case Files</span>
          <div className="tile-img-wrapper">
            <StaticImage
              src="../assets/images/case-files.png"
              placeholder="none"
              alt="Case Files icon"
              loading="eager"
            />
          </div>
        </Link>
        <Link to="/correspondence" className="tile">
          <span className="title">Correspondence</span>
          <div className="tile-img-wrapper">
            <StaticImage
              src="../assets/images/correspondence.png"
              placeholder="none"
              alt="Correspondence icon"
              loading="eager"
            />
          </div>
        </Link>
      </div>
    </main>
  )
}

export default IndexPage
