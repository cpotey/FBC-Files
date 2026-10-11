import type { Metadata } from "next"
import type { ReactNode } from "react"

import "../assets/css/main.css"
import Header from "../components/header"

export const metadata: Metadata = {
  metadataBase: new URL("https://fbcfiles.netlify.app"),
  title: {
    default: "FBC Files - Control Collectibles",
    template: "%s | FBC Files",
  },
  description:
    "FBC Files collates the world-building collectibles and lore found within the video-game, Control.",
  icons: {
    icon: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    locale: "en_GB",
    siteName: "FBC Files",
    type: "website",
    images: ["/opengraph.png"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cpotey",
    images: ["/opengraph.png"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <div id="wrapper">
          <Header />
          <div className="site-main">{children}</div>
        </div>
      </body>
    </html>
  )
}