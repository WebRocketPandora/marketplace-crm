import React from "react"
import {Link} from "react-router-dom"

import {useMatchPage, useSidebar} from "~hooks/."
import {Line3Horizontal} from "~icons/."

import GoBack from "./GoBack"

const Header: React.FC = () => {
  const {isGoBack} = useMatchPage()

  const {toggleSidebar} = useSidebar()
  const open = () => toggleSidebar(true)

  return (
    <header className="bg-white relative z-1 px-5 py-5 flex items-center">
      {isGoBack ? (
        <GoBack className="p1 absolute" />
      ) : (
        <button onClick={open} className="p-1 absolute">
          <Line3Horizontal />
        </button>
      )}
      <Link to="/" className="t1 text-black-50 mx-auto">
        LOGO
      </Link>
    </header>
  )
}

export default Header
