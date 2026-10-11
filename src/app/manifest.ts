import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FBC Files",
    short_name: "FBC Files",
    start_url: "/",
    background_color: "#f7f0eb",
    theme_color: "#a2466c",
    display: "standalone",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}