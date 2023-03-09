import React from "react"
import {Outlet} from "react-router-dom"

import {Breadcrumbs, Notification} from "~components/."
import {useBreadcrumbs, useBreakpoints} from "~hooks/."

const InfoOverlay: React.FC = () => {
  const {isMobile} = useBreakpoints()
  const {breadcrumbs} = useBreadcrumbs()

  return (
    <>
      <div className="h-6 sm:h-8 lg:h-10 relative bg-transparent">
        <Notification />
        {!isMobile && breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      </div>
      <Outlet />
    </>
  )
}

export default InfoOverlay
