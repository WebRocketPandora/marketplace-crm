import React from "react"

type Props = {
  className?: string
}

const Spinner: React.FC<Props> = ({className}) => {
  return (
    <svg
      className={`fill-current animate-spin ${className}`}
      width="32"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2.4375C12.403 2.4375 8.95333 3.8664 6.40986 6.40986C3.8664 8.95333 2.4375 12.403 2.4375 16H0C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16H29.5625C29.5625 12.403 28.1336 8.95333 25.5901 6.40986C23.0467 3.8664 19.597 2.4375 16 2.4375Z" />
    </svg>
  )
}

export default Spinner
