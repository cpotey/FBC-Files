"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { DocumentCategory } from "../lib/contentful"

function SidebarGroups({
  categories,
  contentType,
}: {
  categories: DocumentCategory[]
  contentType: string
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
  const groups = (
    <ul className="categories">
      <SidebarGroups categories={categories} contentType={contentType} />
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
      <details id="mobile-sidebar-wrapper">
        <summary aria-label={`Browse ${title}`}>
          <span className="file-icon" aria-hidden="true" />
          <span>Browse files</span>
        </summary>
        <nav className="mobile-sidebar-panel" aria-label={`${title} files`}>
          {groups}
        </nav>
      </details>
    </>
  )
}