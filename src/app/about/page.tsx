import Footer from "../../components/footer"

export const metadata = {
  title: "About",
  description:
    "This is an unofficial fan-site built to collate the in-game collectibles and lore found within Remedy's 2019 video-game, Control.",
}

export default function AboutPage() {
  return (
    <div className="page-layout">
      <main id="page">
        <div className="content">
          <h1 className="home-welcome">About FBC Files</h1>
          <p style={{ marginBottom: "1rem" }}>
            This is an unofficial fan-site built to collate the in-game
            collectibles and lore found within Remedy&apos;s 2019 video-game,
            Control.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            I&apos;m just a front-end dev who wanted to create something cool for a
            game that I really like. If you have any feedback, ideas for future
            features, or entry corrections, get in touch with me on{" "}
            <a
              href="https://twitter.com/cpotey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            . You can also read more about how I built the site on{" "}
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
      <Footer />
    </div>
  )
}