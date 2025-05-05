import React, { useEffect, useMemo, useRef, useState } from "react"

export const useActiveHeading = (ids) => {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
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
    const parser = new DOMParser()
    const doc = parser.parseFromString(tocHtml, "text/html")
    const links = Array.from(doc.querySelectorAll("a"))
    return links.map((link) => ({
      href: link.getAttribute("href"),
      title: link.textContent,
      level: link.parentElement.tagName === "LI" ? 2 : 3,
    }))
  }, [tocHtml])

  const headingIds = headingItems.map((item) => item.href.replace("#", ""))
  const activeId = useActiveHeading(headingIds)

  const tocContainerRef = useRef(null)

  useEffect(() => {
    if (!tocContainerRef.current || !activeId) return
    const activeLink = tocContainerRef.current.querySelector(`a[href="#${activeId}"]`)
    if (activeLink && activeLink.scrollIntoView) {
      activeLink.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }, [activeId])

  return (
    <nav
      ref={tocContainerRef}
      className="sticky top-20 text-sm space-y-2 max-h-[75vh] overflow-y-auto pr-2"
    >
      <ul className="space-y-1">
        {headingItems.map(({ href, title, level }) => (
          <li key={href} className={`pl-${level * 2}`}>
            <a
              href={href}
              className={`block relative pl-4 border-l-2 transition-colors duration-300 ${activeId === href.replace("#", "")
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
