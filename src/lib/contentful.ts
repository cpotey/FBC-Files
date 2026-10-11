import "server-only"

import { unstable_cache } from "next/cache"
import { createClient } from "contentful"
import type { Document } from "@contentful/rich-text-types"

import { isSection, sections } from "./sections"

type UnknownRecord = Record<string, unknown>

type ContentfulEntry = {
  sys: { id: string }
  fields: UnknownRecord
}

export type ContentImage = {
  url: string
  width: number
  height: number
}

export type ContentDocument = {
  slug: string
  documentTitle: string
  documentText?: Document
  image: ContentImage | null
  category?: unknown
  dlc?: string
  documentId?: string
  acquisitionDate?: string
  containmentLocation?: string
  eventDate?: string
  eventLocation?: string
  to?: string
  from?: string
  subject?: string
  compiledBy?: string
  byOrderOf?: string
  employeeName?: string
  employeePosition?: string
  reportType?: string
}

const client =
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      })
    : null

if (!client) {
  console.warn(
    "Contentful is not configured. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN to load records."
  )
}

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null
}

function normalizeImage(value: unknown): ContentImage | null {
  if (!isRecord(value) || !isRecord(value.fields)) return null
  const file = value.fields.file
  if (!isRecord(file) || typeof file.url !== "string") return null

  const imageDetails =
    isRecord(file.details) && isRecord(file.details.image)
      ? file.details.image
      : null

  return {
    url: file.url.startsWith("//") ? `https:${file.url}` : file.url,
    width:
      typeof imageDetails?.width === "number" ? imageDetails.width : 1200,
    height:
      typeof imageDetails?.height === "number" ? imageDetails.height : 900,
  }
}

function normalizeEntry(entry: ContentfulEntry): ContentDocument {
  const fields = entry.fields
  const title = fields.documentTitle

  return {
    ...(fields as Partial<ContentDocument>),
    slug: typeof fields.slug === "string" ? fields.slug : entry.sys.id,
    documentTitle: typeof title === "string" ? title : "Untitled document",
    documentText: fields.documentText as Document | undefined,
    image: normalizeImage(fields.image),
  }
}

const fetchDocuments = unstable_cache(
  async (contentType: string): Promise<ContentDocument[]> => {
    if (!client) return []

    const response = await client.getEntries({
      content_type: contentType,
      include: 2,
      limit: 1000,
    })

    return response.items
      .map(entry => normalizeEntry(entry as unknown as ContentfulEntry))
      .sort((first, second) =>
        first.documentTitle.localeCompare(second.documentTitle)
      )
  },
  ["contentful-documents"],
  { revalidate: 3600 }
)

export async function getDocuments(section: string): Promise<ContentDocument[]> {
  if (!client || !isSection(section)) return []
  return fetchDocuments(sections[section].contentType)
}

export async function getDocument(
  section: string,
  slug: string
): Promise<ContentDocument | null> {
  const documents = await getDocuments(section)
  return documents.find(document => document.slug === slug) || null
}

export type DocumentCategory = {
  category: string
  items: ContentDocument[]
}

function categoryName(category: unknown): string {
  if (typeof category === "string") return category
  if (!isRecord(category) || !isRecord(category.fields)) return "Other"

  const name = category.fields.name ?? category.fields.title
  return typeof name === "string" ? name : "Other"
}

export async function getDocumentCategories(
  section: string
): Promise<DocumentCategory[]> {
  if (!isSection(section)) return []

  const groups = new Map<string, ContentDocument[]>()
  for (const document of await getDocuments(section)) {
    const category = categoryName(document.category)
    const items = groups.get(category) || []
    items.push(document)
    groups.set(category, items)
  }

  const order: readonly string[] = sections[section].categoryOrder
  return [...groups.entries()]
    .sort(([first], [second]) => {
      const firstIndex = order.indexOf(first.toLowerCase())
      const secondIndex = order.indexOf(second.toLowerCase())
      if (firstIndex !== -1 || secondIndex !== -1) {
        return (firstIndex === -1 ? order.length : firstIndex) -
          (secondIndex === -1 ? order.length : secondIndex)
      }
      return first.localeCompare(second)
    })
    .map(([category, items]) => ({ category, items }))
}