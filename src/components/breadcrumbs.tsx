import Link from "next/link"

export default function Breadcrumbs({
  currentPage,
}: {
  currentPage: string
}) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  )
}