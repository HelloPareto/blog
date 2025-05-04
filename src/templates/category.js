import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CategoriesBar from "../components/categoriesBar"

const CategoryPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  console.log("---DATA---", data, pageContext)
  const { category, currentPage, numPages } = pageContext

  return (
    <Layout>
      <div class="container">
        <h1>Blog: {category}</h1>
        <CategoriesBar />
    <div class="grid md:grid-cols-2">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
                <header>
                  <img src={node.frontmatter.image} 
                       alt={node.frontmatter.title} 
                       width={350}
                       height={197}
                  /> 
                  <h2>
                    <Link to={node.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p>{node.frontmatter.category}</p>
                  <p>{node.frontmatter.author}</p>
                </header>
          </article>
        )
      })}
    </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
          {currentPage > 1 && (
            <Link to={currentPage === 2 ? `/c/${category}` : `/c/${category}/${currentPage - 1}`}>
              ← Never
            </Link>
          )}
          {currentPage < numPages && (
            <Link to={`/c/${category}/${currentPage + 1}`}>
              Older →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { category: { eq: $category } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            author
            category
          }

          fields {
            slug
          }
        }
      }
    }
  }

`

export default CategoryPage
