import * as React from "react"
import { Link, graphql } from "gatsby"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { TableOfContents } from "../components/TableOfContents"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShareButtons from "../components/share_buttons"
import Clock from "../assets/svg/clock.svg"

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
}

const normalizedSlug = slug => (slug || "").replace(/^\/|\/$/g, "")

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const { markdownRemark: post, site, related, previous, next, localImage } = data
  const siteTitle = site.siteMetadata?.title || "Title"
  const image = getImage(post.localImage)
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

  const relatedItems = relatedArticles?.map(article => (
    <div key={article.fields.slug} className="px-2">
      <article
        className="block border rounded-2xl overflow-hidden w-full"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Link
          to={article.fields.slug}
          itemProp="url"
          className="no-underline hover:no-underline"
        >
          <div
            className="w-full overflow-hidden min-h-40 max-h-40"
            style={{
              backgroundImage: `url(${article.frontmatter.mainImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#ccc",
            }}
          >
          <div
            className="w-full overflow-hidden min-h-40 max-h-40"
          />
          
          </div>
        </Link>

        <div className="p-6 flex flex-col justify-between h-30 min-h-40">
          <h3 className="mb-3 text-base " itemProp="headline">
            {article.frontmatter.title}
          </h3>
          <div className="flex gap-4">
            {article.fields.category ? (
              <Link
                to={`/c/${article.fields.category}`}
                className="py-[6px] px-4 bg-blue-500 text-white rounded-full w-fit"
              >
                {article.frontmatter.category}
              </Link>
            ) : null}
            <div className="flex gap-1 items-center py-[6px] bg-gray-300 dark:bg-gray-400 px-3 rounded-full w-fit">
              <Clock className="w-5 h-5 stroke-black dark:stroke-white" />
              <span>{article.timeToRead} min</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  ))

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="container min-w-280px py-12 lg:py-8"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className="text-3xl lg:text-5xl items-center">
            {post.frontmatter.title}
          </h1>

          <div className="flex gap-8 mb-8 flex-wrap">
            <span className="py-2 text-[#93959b]">{post.frontmatter.author}</span>
            <span className="py-2 text-[#93959b]">{post.frontmatter.date}</span>
            <div className="flex gap-1 items-center py-[6px] bg-gray-300 dark:bg-gray-400 px-3 rounded-full">
              <Clock style={{ width: "20px", height: "20px", stroke: "white" }} />
              <span className="text-white">{post.timeToRead} min</span>
            </div>
            <Link
              to={`/c/${post.fields.category}`}
              className="py-[6px] px-4 bg-gray-200 dark:bg-gray-400 rounded-full"
            >
              {post.frontmatter.category}
            </Link>
            <ShareButtons />
          </div>

          {post.frontmatter.mainImage && (
          <div className="aspect-[2/1] w-full overflow-hidden mt-6 mb-8 rounded-2xl lg:rounded-3xl">
            {post.frontmatter.mainImage && (
              <div className="aspect-2/1 w-full rounded-2xl lg:rounded-3xl">
                {/* <img src={post.frontmatter.mainImage} alt={`for ${post.frontmatter.title}`} className=" w-full min-h-[100%]"/> */}
                                  <GatsbyImage
                                    image={image}
                                    alt={post.frontmatter.title}
                                    style={{ width: "100%", height: "100%" }}
                                    imgStyle={{ objectFit: "cover" }}
                                  />
              </div>
            )}
          </div>
          )}
        </header>

        <div className="flex flex-col md:flex-row gap-8 container">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="markdown prose dark:prose-invert max-w-none"
          />
          <hr />
          <div className="md:w-[300px]">
            {post.tableOfContents && <aside className="min-w-[280px] max-w-[300px] post_sidebar sticky top-20 p-5 border rounded-2xl">
              <TableOfContents tocHtml={post.tableOfContents} />
            </aside>}
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

      {/* Related Posts using AliceCarousel */}
      <section className="my-12 not-prose max-w-none">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
          <AliceCarousel
            mouseTracking
            items={relatedItems}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls={true}
            autoPlay={false}
          />
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
      image={post.frontmatter.mainImage}
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

        localImage {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP
              placeholder: DOMINANT_COLOR
              layout: CONSTRAINED
              aspectRatio: 2
            )
          }
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
