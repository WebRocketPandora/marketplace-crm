import React from "react"
import {Outlet} from "react-router-dom"
import Sidebar from "react-sidebar"

import {useBreakpoints, useSidebar} from "~hooks/."
import {Sidebar as SidebarContent, Header} from "~components/."

const AppOverlay: React.FC = () => {
  const {open, toggleSidebar} = useSidebar()
  const {isMobile} = useBreakpoints()

  return (
    <Sidebar
      sidebar={<SidebarContent />}
      sidebarClassName={"w-full sm:w-20 lg:w-63 z-20 bg-sidebar"}
      open={open}
      docked={!isMobile}
      transitions={isMobile}
      onSetOpen={toggleSidebar}>
      {isMobile && <Header />}
      <Outlet />
    </Sidebar>
  )
}

export default AppOverlay
