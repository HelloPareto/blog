import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function ThemeToggle() {
  return (
    <div className="modeToggler">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="toggler cursor-pointer flex items-center gap-3">
            <span className="text-sm font-medium">
              {theme === 'dark' ? 'Theme Dark' : 'Theme Light'}
            </span>
            <input
              type="checkbox"
              onChange={e =>
                toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              className="hidden"
            />
            <div className="w-10 h-5 bg-blue-500 rounded-full relative">
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0 transition-transform duration-300 ${
                  theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </label>
        )}
      </ThemeToggler>
    </div>
  )
}
