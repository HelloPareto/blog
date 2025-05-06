import * as React from "react"
import { Link, graphql } from "gatsby"

import { TableOfContents } from "../components/TableOfContents"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShareButtons from "../components/share_buttons"
import Clock from "../assets/svg/clock.svg"

const normalizedSlug = slug => (slug || "").replace(/^\/|\/$/g, "")

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const { markdownRemark: post, site, related, previous, next } = data
  const siteTitle = site.siteMetadata?.title || "Title"
  const relatedArticleSlugs = Array.isArray(pageContext.relatedArticleSlugs)
    ? pageContext.relatedArticleSlugs
    : []

  let relatedArticles = []

  try {
    if (related?.nodes?.length && Array.isArray(relatedArticleSlugs)) {
      relatedArticles = related.nodes.filter(article =>
        relatedArticleSlugs.includes(normalizedSlug(article?.fields?.slug || ""))
      )
    }
  } catch (e) {
    console.error("Error while resolving related articles", e)
  }

  console.log("-------rel---------", relatedArticles)
  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="container min-w-280px py-12 lg:py-8 "
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline"
            className="text-3xl lg:text-5xl items-center"
          >
            {post.frontmatter.title}
          </h1>

          <div className="flex gap-8 mb-8 flex-wrap">
            <span className="py-2 text-[#93959b]">{post.frontmatter.author}</span>
            <span className="py-2 text-[#93959b]">{post.frontmatter.date}</span>
            <div className="flex gap-1 items-center py-[6px] bg-gray-300 px-3 rounded-full">
              <Clock style={{ width: "20px", height: "20px", stroke: "white" }} />
              <span className=" text-white ">{post.timeToRead} min</span>
            </div>
            <Link to={`/c/${post.fields.category}`}
              className="py-[6px] px-4 bg-gray-200 rounded-full"
            >
              {post.frontmatter.category}
            </Link>
            <ShareButtons />
          </div>

          <div class="aspect-[2/1] overflow-hidden rounded-2xl my-6 ">
            {post.frontmatter.mainImage && (
              <img src={post.frontmatter.mainImage} alt={`for ${post.frontmatter.title}`} />
            )}

          </div>
        </header>

        <div class="flex flex-col md:flex-row gap-8 container">

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="markdown prose max-w-none"
          />
          <hr />
          <div className="md:w-[300px]">
            <aside className="min-w-[280px] max-w-[300px] post_sidebar sticky top-20 p-5 border rounded-2xl">
              {post.tableOfContents && (
                <TableOfContents tocHtml={post.tableOfContents} />
              )}
            </aside>
          </div>
        </div>
      </article>

      <nav className="blog-post-nav container">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="text-blue-600 hover:text-blue-700">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" className="text-blue-600 hover:text-blue-700">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Related Posts */}

      <section className="my-12 not-prose max-w-none">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedArticles.map(article => (
              <article
                key={article.fields.slug}
                className="block border border-solid border-[#e4e8f3] rounded-2xl overflow-hidden w-full"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link
                  to={article.fields.slug}
                  itemProp="url"
                  className="no-underline hover:no-underline"
                >
                  <div
                    className="h-48 w-full overflow-hidden md:max-h-[227px] md:min-h-[227px]"
                    style={{
                      backgroundImage: `url(${article.frontmatter.mainImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#ccc",
                    }}
                  />
                </Link>

                <div className="p-6 flex flex-col justify-between h-full ">
                  <h3 className="mb-3 text-base " itemProp="headline">
                    {article.frontmatter.title}
                  </h3>
                  <div class="flex gap-4">
                    {article.fields.category ?
                      <Link to={`/c/${article.fields.category}`} className="py-[6px] px-4 bg-blue-500 text-white rounded-full w-fit">{article.frontmatter.category}</Link> : ""}
                    <div className="flex gap-1 items-center py-[6px] bg-gray-300 px-3 rounded-full w-fit">
                      <Clock style={{ width: "20px", height: "20px", stroke: "white" }} />
                      <span className=" text-white ">{article.timeToRead} min</span>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.seoTitleTag || post.frontmatter.title}
      description={post.frontmatter.seoMetaDescription || post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        category
        seoTitleTag
        seoMetaDescription
        mainImage
      }

      fields {
        category
      }
    }

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }

      frontmatter {
        title
      }
    }

    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }

      frontmatter {
        title
      }
    }

    related: allMarkdownRemark {
      nodes {
        id
        excerpt(pruneLength: 140)
        timeToRead
        frontmatter {
          title
          author
          category
          mainImage
          date(formatString: "MMMM DD, YYYY")
        }

        fields {
          slug
          category
        }
      }
    }
  }

`
