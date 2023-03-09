import React from "react"
import {Icon} from "~types/index"

const Power: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6.9933 7.7782C7.38881 7.7782 7.6462 7.50197 7.6462 7.08763V1.57563C7.6462 1.16129 7.38881 0.878784 6.9933 0.878784C6.60407 0.878784 6.3404 1.16129 6.3404 1.57563V7.08763C6.3404 7.50197 6.60407 7.7782 6.9933 7.7782ZM6.9933 14.2444C10.5529 14.2444 13.4909 11.3064 13.4909 7.75309C13.4909 5.85716 12.6497 4.19979 11.4757 3.09488C10.8228 2.45454 9.89997 3.31461 10.5717 3.99262C11.5699 4.93431 12.1851 6.26522 12.1914 7.75309C12.1977 10.6346 9.87486 12.9512 6.9933 12.9512C4.11175 12.9512 1.80776 10.6346 1.80776 7.75309C1.80776 6.25895 2.42299 4.92803 3.42118 3.98635C4.09291 3.30205 3.17006 2.44826 2.51716 3.08861C1.33691 4.19352 0.501953 5.85716 0.501953 7.75309C0.501953 11.3064 3.44001 14.2444 6.9933 14.2444Z" />
    </svg>
  )
}

export default Power