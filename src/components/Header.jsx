import React from 'react'

const Header = ({ category, title, haveDarkMode = false }) => {
  return (
    <div className="mb-10">
      <p
        className={`text-gray-400 ${haveDarkMode ? 'dark:text-gray-200' : ''}`}
      >
        {category}
      </p>
      <p
        className={`text-3xl font-extrabold ${
          haveDarkMode && 'dark:text-gray-200'
        } tracking-tight text-slate-900`}
      >
        {title}
      </p>
    </div>
  )
}

export default Header
