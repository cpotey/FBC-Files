import Link from "next/link"

export default function Footer() {
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
        | <Link href="/about">About</Link>
      </span>
    </footer>
  )
}