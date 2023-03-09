import React from "react"
import {Icon} from "~types/index"

const Duplicate: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`stroke-current ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.66671 11.3335H3.00004C2.07957 11.3335 1.33337 10.5873 1.33337 9.66683V3.00016C1.33337 2.07969 2.07957 1.3335 3.00004 1.3335H9.66671C10.5872 1.3335 11.3334 2.07969 11.3334 3.00016V4.66683M6.33337 14.6668H13C13.9205 14.6668 14.6667 13.9206 14.6667 13.0002V6.3335C14.6667 5.41302 13.9205 4.66683 13 4.66683H6.33337C5.4129 4.66683 4.66671 5.41302 4.66671 6.3335V13.0002C4.66671 13.9206 5.4129 14.6668 6.33337 14.6668Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Duplicate
