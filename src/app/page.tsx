import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import CaseFilesImage from "../assets/images/case-files.png"
import CorrespondenceImage from "../assets/images/correspondence.png"
import ResearchImage from "../assets/images/research-and-records.png"
import Footer from "../components/footer"

const tiles: { title: string; href: string; image: StaticImageData }[] = [
  {
    title: "Research & Records",
    href: "/research-and-records",
    image: ResearchImage,
  },
  { title: "Case Files", href: "/case-files", image: CaseFilesImage },
  {
    title: "Correspondence",
    href: "/correspondence",
    image: CorrespondenceImage,
  },
]

export default function HomePage() {
  return (
    <div className="page-layout">
      <main id="page">
        <div className="content">
          <h1 className="home-welcome">Welcome, FBC Agent.</h1>
          <p>
            FBC Files collates the incredible world-building collectibles found
            within the video-game, Control. Click through to discover more, and
            find out all about the Federal Bureau of Control.
          </p>
        </div>

        <div className="tiles">
          {tiles.map(tile => (
            <Link href={tile.href} className="tile" key={tile.href}>
              <span className="title">{tile.title}</span>
              <div className="tile-img-wrapper">
                <Image
                  src={tile.image}
                  alt={`${tile.title} icon`}
                  className="tile-img"
                  loading={tile.href === "/research-and-records" ? "eager" : "lazy"}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}