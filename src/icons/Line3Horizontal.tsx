import React from "react"
import {Icon} from "~types/index"

const Line3Horizontal: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="26"
      height="14"
      viewBox="0 0 26 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1.14146 2.34196H24.8459C25.48 2.34196 26 1.81146 26 1.16451C26 0.51756 25.48 0 24.8459 0H1.14146C0.507317 0 0 0.51756 0 1.16451C0 1.79852 0.507317 2.34196 1.14146 2.34196ZM1.14146 8.16451H24.8459C25.48 8.16451 26 7.63401 26 7C26 6.34011 25.48 5.80961 24.8459 5.80961H1.14146C0.507317 5.80961 0 6.34011 0 7C0 7.63401 0.507317 8.16451 1.14146 8.16451ZM1.14146 14H24.8459C25.48 14 26 13.4695 26 12.8096C26 12.1627 25.48 11.6451 24.8459 11.6451H1.14146C0.507317 11.6451 0 12.1756 0 12.8096C0 13.4566 0.507317 14 1.14146 14Z" />
    </svg>
  )
}

export default Line3Horizontal
