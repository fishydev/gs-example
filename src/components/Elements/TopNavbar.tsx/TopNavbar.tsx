import * as React from "react"
import { FaGithub } from "react-icons/fa"

import { Link } from "react-router-dom"

const navigationList = [
  { name: "Movies", to: "/movies" },
  { name: "TV Shows", to: "/cart" },
  { name: "People", to: "/about" },
]

export const TopNavbar = () => {
  return (
    <header>
      <div className="flex-none bg-slate-700 sticky top-0 z-30 py-2">
        <div className="h-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <span className="text-xl">Movie DB</span>
              {navigationList.map((item) => (
                <Link to={item.to}>
                  <span className="mx-2">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-end">
              <FaGithub size="2em" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
