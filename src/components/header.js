import * as React from "react"
import { Link } from "gatsby"
import nav from "../data/navigation.yml"
import Logo from "../assets/svg/logo.svg"

const Header = ({ siteTitle }) => {
  console.log("---NAV---", nav)
  return (
    <header className="flex justify-between items-center " >
      <Link
        to="/"
        className="flex gap-2"
      >
        <Logo />
        {siteTitle}
      </Link>
      <nav className="flex gap-4 items-center">
        <ul className="flex gap-2">
          {nav.map((item, i) => {
            return (
              <li key={i}>
                {item.submenu ?
                <>
                  <button>{item.name}</button>
                  <ul className="hidden">
                    {item.submenu.map((sub, n) => (
                      <li key={n}>
                        <a href={sub.link} >{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                </>
                :
                <li>
                  <a href={item.link}>{item.name}</a>
                </li>
                }
              </li>
            )
          })}
        </ul>
        <button>Hire labelers</button>
      </nav>
    </header>
  )
}

export default Header
