import React from "react"
import {useBreakpoints, useNotification} from "~hooks/."

const Notification: React.FC = () => {
  const {isMobile} = useBreakpoints()
  const {message, type} = useNotification()

  const typeColor = React.useMemo(() => {
    switch (type) {
      case "error":
        return "bg-red"
      case "success":
        return "bg-green"
      default:
        return "bg-blue"
    }
  }, [type])

  return (
    <div
      className={`transition-all absolute ${
        message ? "top-0" : "-top-6 sm:-top-8 lg:-top-10"
      } w-full h-6 sm:h-8 lg:h-10 text-white ${typeColor} flex items-center justify-center`}>
      <p className={isMobile ? "h6" : "h5"}>{message}</p>
    </div>
  )
}

export default Notification
