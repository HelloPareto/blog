import React, { useEffect, useState } from 'react'

export default function ThemeToggle({ cls = '' }) {
  const [theme, setTheme] = useState('light')

  // when mount: read theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  // Theme toggler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className={`modeToggler ${cls}`}>
      <label className="toggler cursor-pointer flex items-center gap-3">
        <span className="text-sm font-medium">
          {theme === 'dark' ? 'Theme Dark' : 'Theme Light'}
        </span>
        <div className="w-10 h-5 bg-blue-500 rounded-full relative" onClick={toggleTheme}>
          <div
            className={`w-5 h-5 bg-white rounded-full absolute top-0 transition-transform duration-300 ${
              theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </label>
    </div>
  )
}
