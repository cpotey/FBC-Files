import Link from "next/link"

import Footer from "../components/footer"

export const metadata = {
  title: "Page not found",
  description: "Sorry, that page does not exist.",
}

export default function NotFoundPage() {
  return (
    <main id="document">
      <div className="content">
        <h1>Page not found</h1>
        <p>Sorry, we couldn&apos;t find what you were looking for.</p>
      </div>
      <Link className="btn" href="/">
        Go home
      </Link>
      <Footer />
    </main>
  )
}