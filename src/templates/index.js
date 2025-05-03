import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Page = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  return (
<Layout>
  {posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return <div key={node.fields.slug}>{title}</div>
  })}

  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
    {pageContext.currentPage > 1 && (
      <Link to={pageContext.currentPage === 2 ? "/blog" : `/blog/${pageContext.currentPage - 1}`}>
        ← Never
      </Link>
    )}

    {pageContext.currentPage < pageContext.numPages && (
      <Link to={`/blog/${pageContext.currentPage + 1}`}>
        Older →
      </Link>
    )}
  </div>
</Layout>
  )
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC }}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }

          frontmatter {
            title
          }
        }
      }
    }
  }

`

export default Page
