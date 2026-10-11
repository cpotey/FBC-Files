import { notFound } from "next/navigation"
import type { Metadata } from "next"

import Breadcrumbs from "../../../components/breadcrumbs"
import DocumentFields from "../../../components/document/document-fields"
import Footer from "../../../components/footer"
import { getDocument, getDocuments } from "../../../lib/contentful"
import { isSection, sections } from "../../../lib/sections"

type DocumentPageProps = {
  params: Promise<{ section: string; slug: string }>
}

export const revalidate = 3600

export async function generateStaticParams({
  params,
}: {
  params: { section: string; slug: string }
}) {
  const { section } = params
  const documents = await getDocuments(section)
  return documents.map(document => ({ slug: document.slug }))
}

export async function generateMetadata({
  params,
}: DocumentPageProps): Promise<Metadata> {
  const { section, slug } = await params
  if (!isSection(section)) return { title: "Page not found" }

  const document = await getDocument(section, slug)
  return document
    ? {
        title: `${document.documentTitle} | ${sections[section].title}`,
        description: `${document.documentTitle} is ${sections[section].documentDescription} on FBC Files.`,
      }
    : { title: "Page not found" }
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { section, slug } = await params
  if (!isSection(section)) notFound()

  const document = await getDocument(section, slug)
  if (!document) notFound()

  return (
    <main id="document">
      <Breadcrumbs currentPage={sections[section].title} />
      <DocumentFields data={document} />
      <Footer />
    </main>
  )
}