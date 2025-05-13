import * as React from "react"
import ThemeToggle from "./themeToggle"
import { Link } from "gatsby"
import { SocialIcon } from 'react-social-icons'
import Data from "../data/footer.yml"
import Logo from "../assets/svg/Logo-t.svg"

const Footer = () => (
  <footer className="bg-slate-50 dark:bg-gray-800 border rounded-2xl mt-10 lg:mt-12">
    <div className="grid max-w-[1512px] mx-auto px-5 lg:px-32 pt-14 lg:pt-20 pb-24 ">
      <header className="flex justify-between items-center mb-11 lg:mb-16">
        <h2 className="text-2xl lg:text-3xl font-semibold">{Data.title}</h2>
        <ThemeToggle cls="hidden md:block" />
      </header>
      <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
        {Data.columns.map((col, i) => (
          <div className="col" key={i}>
            <h3 className="mb-4 font-medium ">{col.name}</h3>
            <ul>
              {col.items.map((item, n) => (
                <li className="mb-4" key={n}>
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid gap-6 pb-20">
        <div className="grid gap-6 md:flex md:justify-between">
          <div className="flex gap-5 justify-between w-full">
            <Logo className="icon" />
            <ThemeToggle cls="block md:hidden" />
          </div>
          <div className="social_icons flex gap-12 mx-auto w-full justify-center">
            {Data.social.map((s, i) => (
              <SocialIcon
                url={s.link}
                key={i} label={s.label}
                style={{ height: 28, width: 28, color: "#000" }}
                bgColor="#fff"
                fgColor="#000"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-4 flex-col md:flex-row md:justify-between items-center text-base md:text-xl">
          <div className="flex gap-4 items-center w-full">
            <span>&copy; Pareto {new Date().getFullYear()}, All Rights Reserved</span>
            <img src="/svg/wbenc-logo.svg" loading="lazy" className="dark:invert w-16 h-16" alt="Pareto Logo" />
          </div>
          <div className="flex gap-4 lg:gap-8 flex-col sm:flex-row w-full">
            {Data.footer_bottom.map((fb, n) => (
              <Link to={fb.link} key={n}>{fb.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex flex-wrap gap-6 md:flex-row md:justify-around p-5 bg-slate-100 dark:bg-[#2f2c3c] rounded-t-2xl w-full">
        <div className="">
          <p className="hidden md:block">Fine-tune your LLMs with expert data.</p>
          <p className="md:hidden">Get premium AI training data.</p>
        </div>
        <button className="py-[6px] px-4 bg-blue-500 text-white rounded-full w-fit" type="button">
          <Link to="/conversion">
            <span className="hidden md:block ">Get started</span>
            <span className="md:hidden">Get started</span>
          </Link>
        </button>
      </div>

    </div>
  </footer>
)

export default Footer