import React from "react"
import {Icon} from "~types/index"

const ChevronForward: React.FC<Icon> = ({className}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M7.69165 7.1823C7.69165 6.91863 7.59372 6.69263 7.38278 6.49676L1.52173 0.75624C1.35599 0.590504 1.14506 0.500102 0.896451 0.500102C0.399241 0.500102 -3.31982e-05 0.891843 -3.32423e-05 1.39659C-3.3264e-05 1.64519 0.105435 1.86366 0.271172 2.03693L5.55214 7.1823L0.271171 12.3277C0.105435 12.5009 -3.42328e-05 12.7269 -3.42539e-05 12.968C-3.4298e-05 13.4728 0.39924 13.8645 0.89645 13.8645C1.14505 13.8645 1.35599 13.7741 1.52173 13.6084L7.38278 7.87538C7.59372 7.67198 7.69165 7.44597 7.69165 7.1823Z" />
    </svg>
  )
}

export default ChevronForward
