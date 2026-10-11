"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const links = [
  { href: "/research-and-records", title: "Research & Records" },
  { href: "/case-files", title: "Case Files" },
  { href: "/correspondence", title: "Correspondence" },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavigationRef = useRef<HTMLElement>(null)
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`) === true

  useEffect(() => {
    if (!menuOpen) return

    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target
      if (
        target instanceof Node &&
        !menuButtonRef.current?.contains(target) &&
        !mobileNavigationRef.current?.contains(target)
      ) {
        setMenuOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header id="header">
      <div className="header-gradient" />
      <Link className="home" href="/" onClick={() => setMenuOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <path
            d="M1.114 25.966C1.381 27.1 199.62 374.133 200 374.133c.381 0 198.619-347.033 198.886-348.167.073-.31-30.405-.366-198.886-.366-168.422 0-198.959.056-198.886.366"
            fillRule="evenodd"
            fill="#fff"
          />
        </svg>
        FBC FILES
      </Link>
      <nav id="menu" aria-label="Main navigation">
        {links.map(link => (
          <Link
            href={link.href}
            className={isActive(link.href) ? "active" : undefined}
            aria-current={isActive(link.href) ? "page" : undefined}
            key={link.href}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button
        ref={menuButtonRef}
        type="button"
        className={`mobile-menu-button${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && (
        <nav
          ref={mobileNavigationRef}
          id="mobile-navigation"
          className="mobile-nav-panel"
          aria-label="Mobile navigation"
        >
          {links.map(link => (
            <Link
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}