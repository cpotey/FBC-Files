import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

function DocumentFields(props) {
  const data = props.data

  return (
    <div id="document-wrapper">
      {data.image && (
        <div className="document-image">
          <h1>{data.documentTitle} </h1>
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.documentTitle}
            placeholder="blurred"
          />
        </div>
      )}

      <div className="document-body">
        {data.dlc && <span className="dlc">{data.dlc}</span>}
        <h1>{data.documentTitle}</h1>

        {/* Case File Fields */}
        {data.documentId && (
          <div className="id">
            <h2>ID</h2>
            <p>{data.documentId}</p>
          </div>
        )}
        {data.acquisitionDate && (
          <div className="acquisitionDate">
            <h2>Acquisition date</h2>
            <p>{data.acquisitionDate}</p>
          </div>
        )}
        {data.containmentLocation && (
          <div className="containmentLocation">
            <h2>Containment location</h2>
            <p>{data.containmentLocation}</p>
          </div>
        )}
        {data.eventDate && (
          <div className="eventDate">
            <h2>Event date</h2>
            <p>{data.eventDate}</p>
          </div>
        )}
        {data.eventLocation && (
          <div className="eventLocation">
            <h2>Event location</h2>
            <p>{data.eventLocation}</p>
          </div>
        )}

        {/* Correspondence Fields */}

        {data.to && (
          <div className="to">
            <h2>To</h2>
            <p>{data.to}</p>
          </div>
        )}
        {data.from && (
          <div className="from">
            <h2>From</h2>
            <p>{data.from}</p>
          </div>
        )}
        {data.subject && (
          <div className="subject">
            <h2>Subject</h2>
            <p>{data.subject}</p>
          </div>
        )}

        {/* Research & Records Fields */}

        {data.compiledBy && (
          <div className="compiledBy">
            <h2>Compiled by</h2>
            <p>{data.compiledBy}</p>
          </div>
        )}
        {data.byOrderOf && (
          <div className="byOrderOf">
            <h2>By order of</h2>
            <p>{data.byOrderOf}</p>
          </div>
        )}
        {data.employeeName && (
          <div className="employeeName">
            <h2>Employee name</h2>
            <p>{data.employeeName}</p>
          </div>
        )}
        {data.employeePosition && (
          <div className="employeePosition">
            <h2>Employee position</h2>
            <p>{data.employeePosition}</p>
          </div>
        )}
        {data.reportType && (
          <div className="reportType">
            <h2>Report type</h2>
            <p>{data.reportType}</p>
          </div>
        )}

        {/* Summary */}
        <div className="documentSummary">
          <h2>Document transcript</h2>
          {data.documentText && renderRichText(data.documentText)}
        </div>
      </div>
    </div>
  )
}
export default DocumentFields
