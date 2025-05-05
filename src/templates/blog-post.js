import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Clock from "../assets/svg/clock.svg"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
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
            <div className="flex gap-8 mb-8">
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
            </div>
          <div class="aspect-[2/1] overflow-hidden rounded-2xl my-6 ">
            <img src={post.frontmatter.mainImage} alt={`image for ${post.title}`}
              className="w-full" />
          </div>
          </header>
          <div class="flex flex-col md:flex-row gap-8 container">

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="markdown prose"
          />
          <hr />
        <div className="md:w-[300px]">
          <aside
            dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
            className="markdown prose min-w-[280px] max-w-[300px] post_sidebar sticky top-20 p-5 border rounded-2xl"
          />
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
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
  }

`
