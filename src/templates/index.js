import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CategoriesBar from "../components/categoriesBar"
const Page = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="container">
        <h1>Blog</h1>
        <CategoriesBar />

        <div className="grid md:grid-cols-3 gap-[24px] md:gap-y-12">
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article
                key={node.fields.slug}
                className={`block border border-solid border-[#e4e8f3] rounded-2xl overflow-hidden w-full ${i === 0 ? "md:col-span-3 grid md:grid-cols-2 " : ""} ${i === 2 || i === 6 ? "md:col-span-2" : ""}`}
                itemScope
                itemType="http://schema.org/Article"
              >
                <div class={`h-48 w-full overflow-hidden ${i === 0 ? "md:h-[421px]" : "md:max-h-[227px] md:min-h-[227px]"}`}
                  style={{
                    backgroundImage: `url(${node.frontmatter.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                 {/*  <img src={node.frontmatter.image}
                    alt={`Image for ${node.frontmatter.title}`}
                    width={350}
                    height={197}
                    className="min-w-[100%] min-h-[100%] w-auto h-auto"
                  /> */}
                </div>
                
                <div>
                  <div className="p-6 flex flex-col justify-between">
                    <h3 >
                      <Link to={node.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h3>
                    <div class={`flex gap-5 flex-col ${i === 0 ? "md:flex-row md:justify-between" : ""}`}>
                      <p>{node.frontmatter.category}</p>
                      <p>{node.frontmatter.author}</p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
          {pageContext.currentPage > 1 && (
            <Link to={pageContext.currentPage === 2 ? "/blog" : `/blog/${pageContext.currentPage - 1}`}>
              ← Newer
            </Link>
          )}
          {pageContext.currentPage < pageContext.numPages && (
            <Link to={`/blog/${pageContext.currentPage + 1}`}>
              Older →
            </Link>
          )}
        </div>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            author
            category
          }
        }
      }
    }
  }

`

export default Page
