import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ src, alt, objectFit, ...props }) => {
  alt = alt || ""
  objectFit = objectFit || "cover"

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  return (
    <Img
      fluid={match.node.childImageSharp.fluid}
      objectPosition="50% 50%"
      objectFit={objectFit}
      alt={alt}
      {...props}
    />
  )
}
