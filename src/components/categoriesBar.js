import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"

const CategoriesBar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              category
              categoryName
            }
          }
        }
      }
    }

  `)

  const location = useLocation()
  const currentPath = location.pathname

  // collect unique categories
  const categoryMap = new Map()

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { category, categoryName } = node.fields
    if (categoryMap.has(category)) {
      categoryMap.get(category).count += 1
    } else {
      categoryMap.set(category, {
        name: categoryName,
        count: 1,
      })
    }
  })

  const categories = Array.from(categoryMap.entries()) // [ [slug, {name, count}], ... ]

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Find what you want</h2>
      <ul className="list-none gap-2 flex flex-wrap mb-5 lg:mb-8">
        {categories.map(([slug, { name, count }]) => {
          const path = `/c/${slug}`
          const isActive = currentPath.startsWith(path)

          return (
            <li
              key={slug}
              className="px-4 py-1 rounded-full text-lg bg-gray-200 dark:bg-gray-600 "
              style={{
                background: isActive ? "#8b6dff" : "",
              }}
            >
              <Link
                to={path}
                style={{
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                  lineHeight: "150%",
                }}
                className="text-black dark:text-white"
              >
                {name} ({count})
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoriesBar
