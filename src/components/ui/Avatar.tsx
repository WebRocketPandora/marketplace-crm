import React from "react"

type Props = {
  className?: string
}

const Avatar: React.FC<Props> = ({className}) => {
  return (
    <div className={`w-11 h-11 rounded-full bg-black-50 flex items-center justify-center ${className}`}>
      <p className="h4">A</p>
    </div>
  )
}

export default Avatar
