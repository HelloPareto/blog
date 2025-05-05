import React, { useEffect, useMemo, useRef, useState } from "react"
import parse, { domToReact } from "html-react-parser"

export const useActiveHeading = (ids) => {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0.1,
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [ids])

  return activeId
}

export const TableOfContents = ({ tocHtml }) => {
  const headingItems = useMemo(() => {
    if (!tocHtml) return []
    const temp = []
    const parserOptions = {
      replace: (domNode) => {
        if (domNode.name === "a" && domNode.attribs?.href) {
          const href = domNode.attribs.href
          const text = domToReact(domNode.children)
          temp.push({ href, title: text, id: href.replace("#", "") })
        }
      },
    }

    parse(tocHtml, parserOptions)
    return temp
  }, [tocHtml])

  const headingIds = headingItems.map((item) => item.id)
  const activeId = useActiveHeading(headingIds)
  const tocContainerRef = useRef(null)

  useEffect(() => {
    if (!tocContainerRef.current || !activeId) return
    const activeLink = tocContainerRef.current.querySelector(`a[href="#${activeId}"]`)
    if (activeLink?.scrollIntoView) {
      activeLink.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }, [activeId])

  return (
    <nav
      ref={tocContainerRef}
      className="sticky top-20 text-sm space-y-2 max-h-[75vh] overflow-y-auto pr-2"
    >
      <ul className="space-y-1">
        {headingItems.map(({ href, title, id }) => (
          <li key={href}>
            <a
              href={href}
              className={`block relative pl-4 border-l-2 transition-colors duration-300 ${
                activeId === id
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-600"
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
