import * as React from "react"
import ThemeToggle from "./themeToggle"
import { Link } from "gatsby"
import { SocialIcon } from 'react-social-icons'
import Data from "../data/footer.yml"
import Logo from "../assets/svg/Logo-t.svg"
import Label from "../assets/svg/label.svg"

const Footer = () => (
  <footer className="grid max-w-[1512px] mx-auto px-5 lg:px-32 pt-14 lg:pt-20 pb-24 border border-[#E4E8F3] rounded-2xl mt-16 lg:mt-32">
    <header className="flex justify-between items-center mb-11 lg:mb-16">
      <h2>{Data.title}</h2>
      {/* <ThemeToggle /> */}
    </header>
    <div class="grid gap-8 grid-cols-2 lg:grid-cols-4">
      {Data.columns.map((col, i) => (
        <div class="col">
          <h3 className="mb-4 font-medium text-[#262628]">{col.name}</h3>
          <ul>
            {col.items.map((item) => (
              <li className="mb-4">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div class="grid gap-16">.
      <div className="flex gap-5 md:justify-between flex-col md:flex-row">
        <Logo />
        <div className="flex gap-5">
          {Data.social.map((s, i) => (
            <SocialIcon url={s.link} key={i} label="s.label" style={{ height: 22, width: 22 }} />
          ))}
        </div>
        <ThemeToggle />

      </div>
      <div className="flex gap-4 flex-col md:flex-row md:justify-between items-center text-base md:text-xl">
        <div className="flex gap-4 items-center w-full">
          <span>&copy; Pareto {new Date().getFullYear()}, All Rights Reserved</span>
          <Label />
        </div>
        <div className="flex gap-4 lg:gap-8 flex-col sm:flex-row w-full">
          {Data.footer_bottom.map((fb, n) => (
            <Link to={fb.link} key={n}>{fb.label}</Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer