import * as React from "react"
import ThemeToggle from "./themeToggle"
import {Link} from "gatsby"
import { SocialIcon } from 'react-social-icons'
import Data from "../data/footer.yml"
import Logo from "../assets/svg/Logo-t.svg"
import Label from "../assets/svg/label.svg"

const Footer = () => (
  <footer className="grid container">
    <header className="flex justify-between items-center">
      <h2>{Data.title}</h2>
      <ThemeToggle />
    </header>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {Data.columns.map((col, i) => (
        <div class="col">
          <h3>{col.name}</h3>
          <ul>
            {col.items.map((item) => (
               <li>
                 <Link to={item.link}>{item.label}</Link>
               </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div class="grid gap-16">.
      <div className="flex justify-between flex-wrap">
        <Logo />
        <div className="flex gap-5">
          {Data.social.map((s,i) => (
            <SocialIcon url={s.link} key={i} label="s.label" />          
          ))}
        </div>
      </div>
      <div className="flex gap-4  justify-between items-center">
      <div className="flex gap-4 items-center">
        <span>&copy; Pareto {new Date().getFullYear()}, All Rights Reserved</span>
        <Label/>
      </div>
      <div className="flex hap-8">
        {Data.footer_bottom.map((fb,n) => (
          <Link to={fb.link} key={n}>{fb.label}</Link>
        ))}
      </div>
      </div>
    </div> 
  </footer>
)

export default Footer