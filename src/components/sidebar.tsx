"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

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
  const mobileSidebarRef = useRef<HTMLDetailsElement>(null)
  const closeMobileSidebar = () => {
    if (mobileSidebarRef.current) mobileSidebarRef.current.open = false
  }

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target
      if (
        target instanceof Node &&
        mobileSidebarRef.current?.open &&
        !mobileSidebarRef.current.contains(target)
      ) {
        closeMobileSidebar()
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileSidebar()
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

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
      <details id="mobile-sidebar-wrapper" ref={mobileSidebarRef}>
        <summary aria-label="Browse all files">
          <span>Browse all files</span>
        </summary>
        <nav className="mobile-sidebar-panel" aria-label={`${title} files`}>
          {groups}
        </nav>
      </details>
    </>
  )
}