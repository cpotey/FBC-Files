import Link from "next/link"

import Footer from "../../components/footer"

export const metadata = {
  title: "Privacy Notice",
  description:
    "How FBC Files uses Cloudflare Web Analytics and handles analytics data.",
}

export default function PrivacyPage() {
  return (
    <div className="page-layout">
      <main id="page">
        <div className="content privacy-content">
          <h1 className="home-welcome">Privacy Notice</h1>
          <p>
            FBC Files uses Cloudflare Web Analytics to understand aggregate
            site traffic, including page views and referring sites.
          </p>
          <h2>Analytics</h2>
          <p>
            Cloudflare states that Web Analytics does not use cookies or local
            storage to collect analytics, and does not fingerprint visitors to
            display its reports. Cloudflare processes request information to
            provide these metrics. Read the{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare Privacy Policy
            </a>
            .
          </p>
          <p>
            For questions about privacy on this site, see the{" "}
            <Link href="/about">About page</Link> for contact details.
          </p>
          <p>Last updated: 11 October 2026.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}