import { notFound } from "next/navigation"
import type { ReactNode } from "react"

import Sidebar from "../../components/sidebar"
import { getDocumentCategories } from "../../lib/contentful"
import { isSection, sections } from "../../lib/sections"

export const revalidate = 3600

export function generateStaticParams() {
  return Object.keys(sections).map(section => ({ section }))
}

export default async function SectionLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ section: string }>
}>) {
  const { section } = await params
  if (!isSection(section)) notFound()

  const categories = await getDocumentCategories(section)

  return (
    <div className="flex">
      <Sidebar
        title={sections[section].title}
        contentType={section}
        categories={categories}
      />
      {children}
    </div>
  )
}