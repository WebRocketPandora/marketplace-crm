import React from "react"
import {Icon} from "~types/index"

const ArrowTriangleForward: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1.69029 8.33537C1.90123 8.33537 2.07701 8.24497 2.31306 8.12443L8.64118 5.06584C9.08817 4.84988 9.25893 4.61885 9.25893 4.30747C9.25893 3.99609 9.08817 3.76506 8.64118 3.5491L2.31306 0.490507C2.07199 0.374993 1.90123 0.284592 1.68527 0.284592C1.27846 0.284592 0.992188 0.590953 0.992188 1.08816L0.99721 7.52678C0.99721 8.02399 1.28348 8.33537 1.69029 8.33537Z" />
    </svg>
  )
}

export default ArrowTriangleForward
