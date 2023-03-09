import React from "react"
import {Icon} from "~types/index"

const ArrowUturnUp: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M4.17927 12.8298C6.68415 12.8298 8.4043 11.141 8.4043 8.29715V4.32952L8.34152 2.87932L9.26437 3.97168L10.8213 5.56627C10.9468 5.69182 11.0975 5.77344 11.3047 5.77344C11.7002 5.77344 11.989 5.50349 11.989 5.08915C11.989 4.91336 11.9074 4.71875 11.7693 4.58691L8.22224 0.983398C8.08412 0.839007 7.89579 0.763672 7.70745 0.763672C7.51283 0.763672 7.3245 0.839007 7.18638 0.983398L3.64565 4.58691C3.50753 4.71875 3.42592 4.91336 3.42592 5.08915C3.42592 5.50349 3.7147 5.77344 4.10393 5.77344C4.3111 5.77344 4.46805 5.69182 4.59361 5.56627L6.14425 3.97168L7.07338 2.87932L7.00432 4.32952V8.32854C7.00432 10.3375 5.86175 11.4487 4.22949 11.4487C2.60352 11.4487 1.41071 10.3375 1.41071 8.32854V6.85951C1.41071 6.43889 1.09682 6.15011 0.707589 6.15011C0.324637 6.15011 0.0107422 6.44517 0.0107422 6.85951V8.37877C0.0107422 11.1787 1.66811 12.8298 4.17927 12.8298Z" />
    </svg>
  )
}

export default ArrowUturnUp