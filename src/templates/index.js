import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoriesBar from "../components/categoriesBar"

const Page = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="container">
        <h1>Blog</h1>
        <CategoriesBar />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[24px] md:gap-y-12">
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            const image = getImage(node.localImage)
            return (
              <article
                key={node.fields.slug}
                className={`block border rounded-2xl overflow-hidden w-full ${i === 0 ? "md:col-span-3 grid md:grid-cols-2 " : ""} ${i === 2 || i === 6 ? "md:col-span-2" : ""}`}
                itemScope
                itemType="http://schema.org/Article"
              >
                <div class={`h-48 w-full overflow-hidden ${i === 0 ? "md:h-[421px]" : "md:max-h-[227px] md:min-h-[227px]"}`}>
                <Link to={node.fields.slug} itemProp="url">
                  <GatsbyImage
                    image={image}
                    alt={node.frontmatter.title}
                    style={{ width: "100%", height: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                  />
                  </Link>
                </div>

                <div>
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="mb-5">
                        <Link to={node.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h3>
                      {i === 0 ?
                        <p className="hidden md:block">
                          {node.frontmatter.description || node.excerpt}
                        </p>
                        : ""
                      }
                    </div>

                    <div class={`flex gap-3 flex-col ${i === 0 ? "md:flex-row md:justify-between" : ""}`}>
                      <p>{node.frontmatter.category}</p>
                      <p>{node.frontmatter.author}</p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "3rem" }}>
          {pageContext.currentPage > 1 && (
            <Link to={pageContext.currentPage === 2 ? "/" : `/${pageContext.currentPage - 1}`}>
              ← Newer
            </Link>
          )}
          {pageContext.currentPage < pageContext.numPages && (
            <Link to={`/${pageContext.currentPage + 1}`}>
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

        localImage {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP
              placeholder: DOMINANT_COLOR
               layout: CONSTRAINED
            )
          }
        }        
      }
    }
  }
}

`
export const Head = () => (
  <Seo
    title="Pareto Blog"
    image="/images/1.webp"
  />
)

export default Page
