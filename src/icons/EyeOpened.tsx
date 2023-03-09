import React from "react"
import {Icon} from "~types/index"

const EyeOpened: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7C13 8.65685 11.6569 10 10 10ZM10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 14C6.68497 14 3.43017 11.8301 0.205226 7.60691C-0.0684087 7.24857 -0.0684087 6.75143 0.205226 6.39309C3.43017 2.16987 6.68497 0 10 0C13.315 0 16.5698 2.16987 19.7948 6.39309C20.0684 6.75143 20.0684 7.24857 19.7948 7.60691C16.5698 11.8301 13.315 14 10 14ZM10 12C12.434 12 15.019 10.3661 17.7295 7C15.019 3.63391 12.434 2 10 2C7.56601 2 4.98096 3.63391 2.27049 7C4.98096 10.3661 7.56601 12 10 12Z"
      />
    </svg>
  )
}

export default EyeOpened
