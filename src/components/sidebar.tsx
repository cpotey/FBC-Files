"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import type { DocumentCategory } from "../lib/contentful"

function SidebarGroups({
  categories,
  contentType,
  onNavigate,
}: {
  categories: DocumentCategory[]
  contentType: string
  onNavigate: () => void
}) {
  const pathname = usePathname()

  return categories.map(category => (
    <li key={category.category}>
      <h3>{category.category}</h3>
      <ul>
        {category.items.map(document => {
          const href = `/${contentType}/${document.slug}`
          const active = pathname === href

          return (
            <li key={document.slug}>
              <Link
                href={href}
                className={`btn${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
              >
                {document.documentTitle}
              </Link>
            </li>
          )
        })}
      </ul>
    </li>
  ))
}

export default function Sidebar({
  categories,
  contentType,
  title,
}: {
  categories: DocumentCategory[]
  contentType: string
  title: string
}) {
  const mobileSidebarRef = useRef<HTMLDivElement>(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const closeMobileSidebar = () => setMobileSidebarOpen(false)

  useEffect(() => {
    if (!mobileSidebarOpen) return

    const closeOnOutside = (event: Event) => {
      const target = event.target
      if (
        target instanceof Node &&
        !mobileSidebarRef.current?.contains(target)
      ) {
        setMobileSidebarOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileSidebarOpen(false)
    }

    document.addEventListener("pointerdown", closeOnOutside)
    document.addEventListener("click", closeOnOutside)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside)
      document.removeEventListener("click", closeOnOutside)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [mobileSidebarOpen])

  const groups = (
    <ul className="categories">
      <SidebarGroups
        categories={categories}
        contentType={contentType}
        onNavigate={closeMobileSidebar}
      />
    </ul>
  )

  return (
    <>
      <aside id="sidebar" aria-label={`${title} navigation`}>
        <div className="sidebar-wrapper">
          <div className="nav">
            <div className="gradient" />
            {groups}
          </div>
        </div>
      </aside>
      <div
        id="mobile-sidebar-wrapper"
        className={mobileSidebarOpen ? "is-open" : undefined}
        ref={mobileSidebarRef}
      >
        <button
          id="mobile-sidebar-toggle"
          type="button"
          aria-label={`Browse ${title}`}
          aria-expanded={mobileSidebarOpen}
          aria-controls="mobile-sidebar-navigation"
          onClick={() => setMobileSidebarOpen(open => !open)}
        >
          <span>Browse {title}</span>
        </button>
        {mobileSidebarOpen && (
          <nav
            id="mobile-sidebar-navigation"
            className="mobile-sidebar-panel"
            aria-label={`${title} files`}
          >
            {groups}
          </nav>
        )}
      </div>
    </>
  )
}