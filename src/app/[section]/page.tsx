import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import Breadcrumbs from "../../components/breadcrumbs"
import Footer from "../../components/footer"
import CaseFilesImage from "../../assets/images/case-files.png"
import CorrespondenceImage from "../../assets/images/correspondence.png"
import ResearchImage from "../../assets/images/research-and-records.png"
import { getDocuments } from "../../lib/contentful"
import { isSection, sections, type SectionKey } from "../../lib/sections"

type SectionPageProps = { params: Promise<{ section: string }> }

const images: Record<SectionKey, StaticImageData> = {
  "case-files": CaseFilesImage,
  correspondence: CorrespondenceImage,
  "research-and-records": ResearchImage,
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { section } = await params
  return isSection(section)
    ? {
        title: sections[section].title,
        description: sections[section].description,
      }
    : { title: "Page not found" }
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params
  if (!isSection(section)) notFound()

  const documents = await getDocuments(section)
  const sectionConfig = sections[section]
  const featuredDocument = documents.find(
    document => document.slug === sectionConfig.featuredSlug
  )

  return (
    <main id="document">
      <Breadcrumbs currentPage={sectionConfig.title} />
      <Image
        className="category-image"
        src={images[section]}
        alt={`${sectionConfig.title} icon`}
        priority
      />
      <h1 className="category-title">{sectionConfig.title}</h1>
      <div className="content">
        <p>{sectionConfig.description}</p>
      </div>
      {featuredDocument && (
        <Link className="btn" href={`/${section}/${featuredDocument.slug}`}>
          View the files
        </Link>
      )}
      <Footer />
    </main>
  )
}