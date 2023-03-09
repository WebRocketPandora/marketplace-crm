import React from "react"
import {Icon} from "~types/index"

const Portrait: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5219 2.88325C10.5219 1.52722 9.83132 0.824097 8.48785 0.824097H2.52384C1.18037 0.824097 0.483521 1.52722 0.483521 2.88325V11.3961C0.483521 12.7458 1.18037 13.4552 2.52384 13.4552H3.46552V14.6229C3.46552 15.979 4.16865 16.6821 5.50584 16.6821H11.4698C12.807 16.6821 13.5102 15.979 13.5102 14.6229V6.05359C13.5102 4.69756 12.8133 3.99444 11.4698 3.99444H10.5219V2.88325ZM2.62428 12.2248C2.01533 12.2248 1.71399 11.8983 1.71399 11.3207V2.95858C1.71399 2.37474 2.01533 2.05457 2.62428 2.05457H8.38112C8.99008 2.05457 9.29142 2.37474 9.29142 2.95858V3.99444H5.50584C4.16237 3.99444 3.46552 4.69756 3.46552 6.05359V12.2248H2.62428ZM12.2797 6.12892V14.5476C12.2797 15.1252 11.9721 15.4516 11.3631 15.4516H5.61257C5.00361 15.4516 4.69599 15.1252 4.69599 14.5476V6.12892C4.69599 5.54508 5.00361 5.22491 5.61257 5.22491H11.3631C11.9721 5.22491 12.2797 5.54508 12.2797 6.12892Z" />
    </svg>
  )
}

export default Portrait