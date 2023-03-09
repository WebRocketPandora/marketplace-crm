import React from "react"
import {useNavigate} from "react-router-dom"
import cls from "classnames"

import {ChevronBack} from "~icons/."

type Props = {
  className?: string
}

const GoBack: React.FC<Props> = ({className}) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <button
      type="button"
      onClick={goBack}
      className={cls("transition flex items-center text-black-60 hover:text-black-40 active:text-black-80", className)}>
      <ChevronBack className="mr-5" />
      Назад
    </button>
  )
}

export default GoBack
