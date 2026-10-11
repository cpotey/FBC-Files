export const sections = {
  "case-files": {
    title: "Case Files",
    description:
      "Records on Altered World Events, Objects of Powers and Altered Items.",
    contentType: "caseFile",
    featuredSlug: "ashtray-and-cigarette",
    documentDescription: "a case file",
    categoryOrder: [
      "objects of power",
      "altered world events",
      "altered items",
    ],
  },
  correspondence: {
    title: "Correspondence",
    description:
      "Letters sent and received by the Bureau, on an official and non-official basis.",
    contentType: "correspondence",
    featuredSlug: "agent-death-notification",
    documentDescription: "a Correspondence file",
    categoryOrder: ["official", "non-official", "dead letters"],
  },
  "research-and-records": {
    title: "Research & Records",
    description:
      "Research files on the Hiss, amongst other findings, and reports of FBC investigations.",
    contentType: "researchrecord",
    featuredSlug: "hiss-agent",
    documentDescription: "a Research & Records file",
    categoryOrder: ["hiss research", "reports", "research", "astral research"],
  },
} as const

export type SectionKey = keyof typeof sections

export function isSection(section: string): section is SectionKey {
  return Object.hasOwn(sections, section)
}