import * as React from "react"
import { FaGithub } from "react-icons/fa"

import { Link } from "react-router-dom"

const navigationList = [
  { name: "Movies", to: "/movies" },
  { name: "TV Shows", to: "/tv" },
  { name: "People", to: "/people" },
]

export const TopNavbar = () => {
  return (
    <header>
      <div className="flex-none bg-white sticky top-0 z-30 py-2">
        <div className="h-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-black">
              <Link to={"/"}>
                <span className="text-xl mr-8">Movie DB</span>
              </Link>
              {navigationList.map((item, index) => (
                <Link to={item.to} key={index}>
                  <span className="mx-2">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-end">
              <a href="https://github.com/fishydev/gs-example">
                <FaGithub size="2em" color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
