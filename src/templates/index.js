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
                className={`block border rounded-2xl overflow-hidden w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 ${i === 0 ? "md:col-span-3" : ""} ${i === 2 || i === 6 ? "md:col-span-2" : ""}`}
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link 
                  to={node.fields.slug} 
                  itemProp="url"
                  style={{objectFit: "cover"}}
                  className={`grid w-full ${i === 0 ? "md:grid-cols-2 " : ""}`}
                >

                  <div class={`h-48 w-full overflow-hidden ${i === 0 ? "md:h-[421px]" : "md:max-h-[227px] md:min-h-[227px]"}`}>
                    <GatsbyImage
                      image={image}
                      alt={node.frontmatter.title}
                      style={{ width: "100%", height: "100%" }}
                      imgStyle={{ objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <div className="p-5 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="mb-5">
                          <span itemProp="headline">{title}</span>
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
                  </Link>
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
