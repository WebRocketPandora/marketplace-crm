import React from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import {ChevronForward} from "~icons/."
import {useBreakpoints} from "~hooks/."
import {Breadcrumb} from "~redux/slices/breadcrumbsSlice"

type Props = {
  breadcrumbs: Breadcrumb[]
}

const Breadcrumbs: React.FC<Props> = ({breadcrumbs}) => {
  const {isTablet, isDesktop} = useBreakpoints()

  return (
    <div
      className={cls("bg-black w-full h-full text-black-30 flex items-center px-6", {
        t4: isTablet,
        t3: isDesktop,
      })}>
      {breadcrumbs.map(({lable, path}, index) => (
        <div key={`breadcrumb_${index}`} className="flex items-center">
          <Link
            to={path}
            className={cls("link", {
              "text-white pointer-events-none": index == breadcrumbs.length - 1,
            })}>
            {lable}
          </Link>
          {index !== breadcrumbs.length - 1 && <ChevronForward className="mx-2" />}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumbs
