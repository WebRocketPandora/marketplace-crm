import React from "react"
import {Icon} from "~types/index"

const Pencil: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1529 3.14033L12.9741 2.32672C13.3809 1.91991 13.3959 1.47543 13.0268 1.09876L12.733 0.797419C12.3638 0.428279 11.9043 0.465946 11.505 0.865221L10.6839 1.6713L12.1529 3.14033ZM2.92439 12.3538L11.4297 3.84848L9.96819 2.39452L1.46289 10.8848L0.724609 12.6627C0.641741 12.8887 0.875279 13.1373 1.10128 13.0544L2.92439 12.3538Z" />
    </svg>
  )
}

export default Pencil
