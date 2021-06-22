import * as React from "react"
import { Helmet } from "react-helmet"
import SeoHelmet from "../components/SeoHelmet"

const About = () => {
  return (
    <main id="page">
      <Helmet>
        <title>About | FBC Files</title>
      </Helmet>
      <SeoHelmet
        metaTitle="About"
        metaDesc="This is an unofficial fan-site built to collate the in-game collectibles and lore found within Remedy's 2019 video-game, Control. Find out more on how it was built on my portfolio."
      />

      <div className="content">
        <h1 className="home-welcome">About FBC Files</h1>
        <p style={{ marginBottom: "1rem" }}>
          This is an unofficial fan-site built to collate the in-game
          collectibles and lore found within Remedy's 2019 video-game, Control.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          I'm just a front-end dev who wanted to create something cool for a
          game that I really like, if you have any feedback/ideas for future
          features/entry mistakes, get in touch with me on{" "}
          <a
            href="https://twitter.com/cpotey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          . You can also read a bit more about how I built the site on{" "}
          <a
            href="https://connorpote.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            my portfolio
          </a>
          .
        </p>
      </div>
      <a
        className="btn"
        href="https://connorpote.co.uk/fbc-files"
        target="_blank"
        rel="noopener noreferrer"
      >
        View more on the project
      </a>
    </main>
  )
}

export default About
