/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              category
              relatedArticles {
                slug
              }
            }

            fields {
              slug
            }
          }
        }
      }
    }

  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const postsPerPage = 8
  const numPages = Math.ceil(posts.length / postsPerPage)

 // 📄 CREATE SINGLE POST PAGES
posts.forEach(({ node }, index) => {
  const previousPostId = index === 0 ? null : posts[index - 1].node.id
  const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id

  const normalizedSlug = slug => slug.replace(/^\/|\/$/g, "")

  const relatedArticleSlugs = (node.frontmatter.relatedArticles || []).map(article =>
    normalizedSlug(article.slug)
  )

  createPage({
    path: node.fields.slug,
    component: blogPost,
    context: {
      id: node.id,
      previousPostId,
      nextPostId,
      relatedArticleSlugs,
    },
  })
})

  //  CREATE PAGINATED LIST
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //  CREATE CATEGORY PAGES
  const categories = {}

  posts.forEach(({ node }) => {
    const category = node.frontmatter.category?.toLowerCase().replace(/\s+/g, "-")
    if (!category) return
    if (!categories[category]) {
      categories[category] = []
    }

    categories[category].push(node)
  })

  Object.keys(categories).forEach(category => {
    const categoryPosts = categories[category]
    const numPages = Math.ceil(categoryPosts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/c/${category}` : `/c/${category}/${i + 1}`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          category,
          categoryName: categoryPosts[0]?.frontmatter?.category || category,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "content/blog" })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    const rawCategory = node.frontmatter.category || "Uncategorized"
    const categorySlug = rawCategory.toLowerCase().replace(/\s+/g, "-")
    
    // slug (for URL)
    createNodeField({
      node,
      name: "category",
      value: categorySlug,
    })

    // Original name
    createNodeField({
      node,
      name: "categoryName",
      value: rawCategory,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }

  `)
}
